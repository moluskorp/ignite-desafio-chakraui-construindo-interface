import { Box, Flex, HStack, Icon, Image, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { CityViewer } from "../../components/CityViewer";
import { CountryDescription } from "../../components/CountryDescription";
import { Description } from "../../components/Description";
import { Numbers } from "../../components/Numbers";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface City{
    image: string;
    city: string;
    country: string;
    country_logo: string;
}

interface CountryProps{
    description: string;
    statesNumber: number;
    languagesNumber: number;
    citiesNumber: number;
    cities: City[];
}

export default function Country({description, statesNumber, languagesNumber, citiesNumber, cities}: CountryProps){
    return(
            <Flex
                align="center"
                justify="center"
                direction="column"
                margin-left="auto"
                pb="8"
            >
                <Image src="/images/europaBanner.svg" alt="Europe"/>
                <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    margin-left="auto"
                    mt={16}
                    maxWidth={1200}
                >
                    <Stack direction={["column","column","column","row"]} spacing={[12,14,20]}>
                        <CountryDescription description={description}/>
                        <Box >
                            <Numbers quantity={statesNumber}/>
                            <Description description="países"/>
                        </Box>
                        <Box>
                            <Numbers quantity={languagesNumber}/>
                            <Description description="línguas"/>
                        </Box>
                        <Flex direction="column">
                            <Numbers quantity={citiesNumber}/>
                            <Flex spacing={0} justify="center">
                                <Description description="cidades +100"/>
                                <Tooltip hasArrow label="As cidades mais visitadas do mundo" bg="gray.300" color="black">
                                    <Box>
                                    <Icon as={AiOutlineInfoCircle} color="gray.500"/>
                                    </Box>
                                </Tooltip>
                            </Flex>
                        </Flex>
                    </Stack>
                    <Box>
                        <Text 
                            mr="auto" 
                            mt="50px"
                            mb="50px"
                            fontSize="36px"
                            fontWeight="500"
                            >Cidades +100</Text>
                        
                        </Box>
                    <SimpleGrid columns={[1,1,2,2,3,4]} spacing={["4","6","8"]} width="100%">
                        {cities.map((city) => (
                            <Box align="center">
                            <CityViewer 
                            key={city.city}
                            image={city.image} 
                            city={city.city}
                            country={city.country} 
                            country_logo={city.country_logo}/>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Flex>
            </Flex>
    );
}

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const {country} = params;

    const countryProps = getCountryProps(String(country));

    return { 
        props: countryProps
        
    }
}

function getCountryProps(country : string){
    if(country === 'europa'){
        return getEuropa();
    }
    if(country === 'brasil'){
        return getBrasil();
    }
}

function getBrasil(){
    const description = "O Brasil estende-se "+ 
    "da Bacia Amazônica, no norte, até os vinhedos e as gigantescas Cataratas "+
    "do Iguaçu, no sul. O Rio de Janeiro, simbolizado pela sua estátua de 38 "+ 
    "metros de altura do Cristo Redentor, situada no topo do Corcovado, é "+ 
    "famoso pelas movimentadas praias de Copacabana e Ipanema, bem como pelo "+ 
    "imenso e animado Carnaval, com desfiles de carros alegóricos, fantasias "+ 
    "extravagantes e samba."

    const statesNumber = 193;
    const languagesNumber = 2;
    const citiesNumber = 4;

    const cities = [
        {
            image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80",
            city: "Rio de Janeiro" ,
            country: "Rio de Janeiro" ,
            country_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg/1280px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png"
        },
        {
            image: "https://images.unsplash.com/photo-1598900863555-3b098bec6394?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" ,
            city: "São Paulo" ,
            country: "São Paulo" ,
            country_logo: "https://a-static.mlcdn.com.br/1500x1500/bandeira-do-sao-paulo-22x32cm-banderminas/wgilbandeiras/52/100f3169f8c6ea848357115931387347.jpg",
        },
    ]

    return {
        description,
        statesNumber,
        languagesNumber,
        citiesNumber,
        cities
    }
    
}

function getEuropa(){
    const description = "A Europa é, por convenção, um dos seis continentes do" + 
    'mundo. Compreendendo a península acidental da  Eurásia,' + 
    'a Europa geralmente divide-se da Ásia a leste pela' +
    'divisória de águas dos montes Urais, o rio Ural, o' + 
    'mar Cáspio, o Cáucaso, e o mar Negro a sudeste'

    const statesNumber = 50;
    const languagesNumber = 60;
    const citiesNumber = 27;

    const cities = [
        {
            image: "/images/londres.svg",
            city: "Londres" ,
            country: "Reino Unido" ,
            country_logo: "/images/londresLogo.svg"
        },
        {
            image: "/images/paris.svg" ,
            city: "Paris" ,
            country: "França" ,
            country_logo: "/images/francalogo.svg",
        },
        {
            image: "/images/roma.svg" ,
            city: "Roma" ,
            country: "Itália" ,
            country_logo: "/images/italialogo.svg",
        },
        {
            image: "/images/praga.svg" ,
            city: "Praga" ,
            country: "República Tcheca" ,
            country_logo: "/images/republicatchecalogo.svg",
        },
        {
            image:"/images/amsterda.svg" ,
            city:"Amsterdã" ,
            country:"Holanda" ,
            country_logo:"/images/holandalogo.svg",
        }
    ]

    return {
        description,
        statesNumber,
        languagesNumber,
        citiesNumber,
        cities
    }
}