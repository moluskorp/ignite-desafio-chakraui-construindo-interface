import { Text } from "@chakra-ui/react";

interface DescriptionProps{
    description: string;
}

export function Description({description}: DescriptionProps){
    return(
        <Text
            textAlign="center"
            fontSize="24px"
            fontWeight="600"
            align="center"
        >{description}</Text>
    );
}