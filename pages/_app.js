import Header from "../components/Header";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";

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
        {/* <GlobalStyles /> */}
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
