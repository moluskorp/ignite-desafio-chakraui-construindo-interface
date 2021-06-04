import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypesProps{
    description: string;
    img_url: string;
}

export function TravelTypes({description, img_url}: TravelTypesProps) {
    return(
        <Flex align="center" justify="center" direction="column">
          <Image src={img_url} alt={description}/>
          <Text>{description}</Text>
        </Flex>
    );
}