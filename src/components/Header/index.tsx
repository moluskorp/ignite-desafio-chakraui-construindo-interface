import {Flex, Image, Text} from '@chakra-ui/react';
import { Router } from 'next/dist/client/router';

export function Header(){

    return(
        <Flex
            as="header"
            w="100%"
            h="16"
            maxWidth={1480}
            mx="auto"
            align="center"
            justify="center"
            direction="row"
        >
            <Text>a</Text>
            <Image 
                src="./images/logo.svg" 
                alt="imagem aleatória"
                h="8"
            />
        </Flex>
    );
}