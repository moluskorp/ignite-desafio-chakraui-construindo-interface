import { Text } from "@chakra-ui/react";

interface CountryDescriptionProps{
    description: string;
}

export function CountryDescription({description}: CountryDescriptionProps){
    return(
        <Text maxWidth="500px" lineHeight="8" fontSize={["16px","18px","24px"]}>
           {description}
        </Text>
    );
}