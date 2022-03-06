import React, { useState } from "react";
import "./campaignpage.scss";
import {
  Text,
  Textarea,
  Button,
  FormLabel,
  FormControl,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

const CampaignPage = ({ user, logout }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const logoutbutton = () => {
    logout();
    navigate("/");
    };
     const handleChange = (event) => {
       const { value, name } = event.target;
         console.log(value);
       setInput(...Input, { [name]: value });
     };

    const [Input, setInput] = useState({
        email: '',
        name: '',
        purpose: '',
        address: ''
    })
    const { email, name, purpose, address } = Input;
  return (
    <div className="campaignpage">
      {user ? (
        <div>
          <div className="campaignpage-header">
            {" "}
            <h3>Welcome!</h3>
            <h4>{user.getUsername()}</h4>
            <Button colorScheme="blue" onClick={logoutbutton}>
              LOG OUT
            </Button>
          </div>
          <div className="campaignpage-content">
            <div className="campaignpage-content2">
              <Text fontSize="2xl" fontWeight="bold">
                CREATE A CAMPAIGN
              </Text>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                                  setInput({
                        
                    })
                  toast({
                    title: "Campaign created successfully",
                    description:
                      "You will be notified when someone donates to your cause.",
                    status: "success",
                    duration: 900,
                    isClosable: true,
                  });
                }}
              >
                <FormControl mt="3" isRequired>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input id="email" type="email" name={email} value={email} onChange={handleChange}/>

                  <FormLabel mt="2" htmlFor="Name">
                    Campaign's title
                  </FormLabel>
                  <Input id="name" type="text" name={name} value={name} onChange={handleChange}/>

                  <FormLabel mt="2" htmlFor="purpose">
                    Purpose of Campaign
                  </FormLabel>
                  <Textarea
                    placeholder="Purpose of Campaign"
                    id="purpose"
                    name={purpose}
                    value={purpose}
                    size="sm"
                  onChange={handleChange}/>
                  <FormLabel mt="2" htmlFor="address">
                    ETH Address
                  </FormLabel>
                  <Input id="address" type="text" name={address} value={address} onChange={handleChange}/>
                </FormControl>
                <Button mt="6" type="submit" colorScheme="blue">
                  CREATE CAMPAIGN
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

export default CampaignPage;
