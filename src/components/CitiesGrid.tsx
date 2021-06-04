import { SimpleGrid } from "@chakra-ui/react";
import { CityViewer } from "./CityViewer";

interface CitiesGrid{
    cities: {
        image: string;
        city: string;
        country: string;
        country_img: string;
    }[]
}

export function CitiesGrid({cities}: CitiesGrid){
    return(
        <SimpleGrid columns={4} spacing={"8"} width="100%">
            {cities.map((city) =>(
                <CityViewer 
                image={city.image} 
                city={city.city}
                country={city.country} 
                country_logo={city.country_img}/>
        ))}
        </SimpleGrid>
    );
}