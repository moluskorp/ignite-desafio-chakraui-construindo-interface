import { Text } from "@chakra-ui/react";

interface NumbersProps{
    quantity: number;
}

export function Numbers({quantity}: NumbersProps){
    return(
        <Text 
            textAlign="center"
            color="yellow.400"
            fontSize={["36px","38px","40px","48px"]}
            fontWeight="600"
        >{quantity}</Text>
    );
}