import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider, useTheme } from "styled-components";
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
      <StatusBar
        backgroundColor="#FAFAFA"
        barStyle="dark-content"
        translucent
      />
      {areFontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
