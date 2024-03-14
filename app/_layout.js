import { Box, Image, MantineProvider, Text } from "@mantine/core";
import "@mantine/core/styles.css";
import "../global.css";
import "@expo/metro-runtime";
import { Slot, Stack } from 'expo-router'
import { Footer, InstagramIcon, NavBar } from "../src/components";



const App = () => {
  return (
    <MantineProvider>
       <NavBar />
       <Slot />
       <InstagramIcon />
       <Footer />
    </MantineProvider>
  );
};

export default App;
