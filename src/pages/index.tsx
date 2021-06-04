import { Box, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Carrousel } from "../components/Carrousel";
import { TravelTypes } from "../components/TravelTypes";
//import './index.module.css';

export default function Home() {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      margin-left="auto"
      pb="8"
    >
      <Image src="./images/banner.svg" alt="banner" w={1480}/>
      <SimpleGrid direction="row" columns={[1,3,4,5,5]} spacing={["8","12","16","20","24","28"]} mt="20">
        <TravelTypes description="vida noturna" img_url="./images/cocktail.svg"/>
        <TravelTypes description="praia" img_url="./images/surf.svg"/>
        <TravelTypes description="moderno" img_url="./images/building.svg"/>
        <TravelTypes description="clássico" img_url="./images/museum.svg"/>
        <TravelTypes description="e mais..." img_url="./images/earth.svg"/>
      </SimpleGrid>
      <Text mt="12" borderTop="1px" paddingTop="12" fontWeight="500" fontSize={["28px","30px","36px"]} align="center">Vamos nessa?</Text>
        
      <Text
        fontWeight="500"
        fontSize={["28px","30px","36px"]}
        align="center"
      >Então escolha seu continente</Text>

      <Box w="100%" mb="4" mt="8" justify="center" align="center" >
        <Carrousel />
      </Box>
    </Flex>
  );
}
