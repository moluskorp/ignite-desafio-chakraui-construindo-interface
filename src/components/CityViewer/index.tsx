import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

interface CityViewerProps{
    image: string;
    city: string;
    country: string;
    country_logo: string
}

export function CityViewer({image, city, country, country_logo}: CityViewerProps) {
    return(
        <Box width="300px">
            <Image src={image} w="100%" alt={city} h="56"/>
            <Flex 
                border="1px" 
                borderRadius="0px 0px 5px 5px" 
                borderColor="#FFBA08" 
                borderTop="0"  
                paddingBottom="4" 
                paddingTop="4"
                justify="center" 
                align="center"
            >
                <Box  marginLeft="6">
                    <Text color="gray.500" fontWeight="500" fontSize="20px">{city}</Text>
                    <Text mt="4" color="gray.400" fontSize="16px">{country}</Text>
                </Box>
                <Box marginLeft="auto" marginRight="4"> 
                    <Image src={country_logo} w="30px" borderRadius="full"/>
                </Box>
            </Flex>
        </Box>
    );
}