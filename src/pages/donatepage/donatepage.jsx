import React, { useState } from "react";
import {
  Text,
  Button,
  FormLabel,
  FormControl,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast
} from "@chakra-ui/react";
import Balance from "../../components/balance";

import "./donatepage.scss";
import { useNavigate } from "react-router";
import Moralis from "moralis";

import { useWeb3Transfer, useMoralis } from "react-moralis";

const DonatePage = ({ logout, user }) => {
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState("");

  const toast = useToast();

  const navigate = useNavigate();
  const handleChange = (value) => {
    setAmount(value);
  };

  const { fetch, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.ETH(amount || 0),
    receiver: receiver,
    type: "native",
  });

  const logoutbutton = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="donatepage">
      {user ? (
        <div>
          <div className="donatepage-header">
            {" "}
            <h3>Welcome!</h3>
            <h4>{user.getUsername()}</h4>
            <Button colorScheme="blue" onClick={logoutbutton}>
              LOG OUT
            </Button>
          </div>
          <div className="donatepage-content">
            <div className="donatepage-content2">
              <Text fontSize="2xl" fontWeight="bold">
                Send ETH
              </Text>
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  await Moralis.enableWeb3();
                  fetch({
                    onSuccess: () => {
                      toast({
                        title: "ETH Successfully Sent",
                        description: "Fresh ETH are showing up in the receiver's wallet",
                        status: "success",
                        duration: 900,
                        isClosable: true
                      })
                      setReceiver('')
                    
                    },
                    onError: (error) => {
                      toast({
                        title: "Error.",
                        description: error,
                        status: 'error',
                        duration: '900',
                        isClosable: true
})
                    },
                  });
                }}
              >
                <FormControl mt="4">
                  <FormLabel htmlFor="amount">Amount of ETH</FormLabel>
                  <NumberInput step={0.1} onChange={handleChange}>
                    <NumberInputField id="amount" vale={amount} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Balance user={user}/>
                  <FormLabel mt="4" htmlFor="receiver">
                    Send to
                  </FormLabel>
                  <Input
                    id="receiver"
                    type="text"
                    placeholder="Receiver's Address"
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                  />
                </FormControl>
                <Button mt="6" type="submit" colorScheme="blue" disabled={isFetching}>
                  DONATE
                </Button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h1>LOADING...</h1>
      )}
    </div>
  );
};

export default DonatePage;
