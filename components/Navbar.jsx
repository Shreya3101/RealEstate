import Link from "next/link";
import { useColorMode } from "@chakra-ui/react";
import { Menu, MenuButton,MenuList,MenuItem,IconButton,Flex, Box ,Spacer } from "@chakra-ui/react";
import {FcMenu,FcHome,FcAbout} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import {FiKey} from 'react-icons/fi';
import {FaSun,FaMoon} from 'react-icons/fa'



function Navbar(){

    const {colorMode, toggleColorMode }= useColorMode();
const isDark = colorMode==="dark"
    return(
        <>
        <Flex p="2" borderBottom="1px" borderColor="gray.100">
       <Box fontSize="3xl" color="blue.400" fontWeight="bold">
    <Link href="/" paddingLeft="2">
        realtor
    </Link>
       </Box>
       <IconButton ml={8} icon={isDark? <FaSun/> :<FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
       <Spacer/>
       <Box>
        <Menu>
            <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400" />
            <MenuList>
                <Link href="/" passHref>
                    <MenuItem icon={<FcHome/>}>
                        Home
                    </MenuItem>
                </Link>
                <Link href="/Search" passHref>
                    <MenuItem icon={<BsSearch/>}>
                        Search
                    </MenuItem>
                </Link>
                <Link href="/Search?purpose=for-sale" passHref>
                    <MenuItem icon={<FcAbout/>}>
                        Buy Property
                    </MenuItem>
                </Link>
                    <Link href="/Search?purpose=for-rent" passHref >
                        <MenuItem icon={<FcHome/>}>
                            Rent Property
                        </MenuItem>
                    </Link>
            </MenuList>
    
           
        </Menu>
       </Box>
        </Flex>
        </>
    )
    
};
export default Navbar