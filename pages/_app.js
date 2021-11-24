import Header from "../components/Header";
import "../styles/globals.css";
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";
const theme = {
  colors: {
    primary: "#ff0000",
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
