import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import theme from "./src/theme";
import Routes from "@routes/index";
import { Loading } from "@components/Loading";

export default function App() {
  const [areFontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {areFontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
