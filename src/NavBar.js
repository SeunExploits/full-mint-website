import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);


    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccounts(accounts);
        }
    }

    return(
        <Flex justify= 'space-between' align= 'center' padding= '30px'>
{/*lEFT SIDE OF THE NAVBAR*/}
<div>Facebook</div>
<div>Twitter</div>
<div>Email</div>

{/*RIGHT SIDE - SECTIONS AND CONNECT*/}
<div>About</div>
<div>Mint</div>
<div>Team</div>

{/*CONNECT*/}
{isConnected ? (
                <Box margin= '0 15px'>Connected</Box>
            ) : (
                <button
                backgroundColor = '#06517D'
                borderRadius= '5px'
                boxShadow= '0px 2px 2px 1px #OFOFOF'
                color='white' 
                cursor= 'pointer'
                fontFamily= 'inherit'
                padding= '15px'
                margin='0 15px'
                onClick={connectAccount}
                >
                Connect
                </button>
)}
    
    </Flex>

    )
   
};

export default NavBar;