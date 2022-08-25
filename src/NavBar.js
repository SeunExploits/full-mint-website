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

    return (
        <Flex justify= 'space-between' align= 'center' padding= '30px'>
        { /*left side - Social media Icons */}
            <Flex justify= 'space-around' width = '40%' padding= '0 75px'>
                <link href ='https://www.facebook.com'>
                    <image src= {Facebook} boxSize='42px' margin='0 15px' />
                </link>
                <link href ='https://www.twitter.com'>
                    <image src= {Twitter} boxSize='42px' margin='0 15px' />
                </link>
                <link href ='https://www.gmail.com'>
                    <image src= {Email} boxSize='42px' margin='0 15px' />
                </link>
            </Flex>
           

        { /*Right side - Sections and Connect */}
            <Flex
            justify='space-around'
            align='center'
            width= '40%'
            padding= '30px'

            > 

            <Box margin= '0 15px'>About</Box>
            <Spacer/>
            <Box margin= '0 15px'>Mint</Box>
            <Spacer/>
            <Box margin= '0 15px'>Team</Box>
            <Spacer/>


            { /*Connected */}
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
        </Flex>
    );
};

export default NavBar;