import Head from "next/head";
import { Box, useColorMode } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from 'react'



export default function Layout({children}) {
  return (
    <>
    <Head>
        <title>Real Estate</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
    <header>
        <Navbar/>
    </header>
    <main>
        {children}
    </main>
    <footer>
        <Footer/>
    </footer>
    </Box>
    </>
  )
}
