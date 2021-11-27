import Header from "../components/Header";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";

import { useTheme, ThemeProvider, withTheme } from "@emotion/react";
import getConfig from "next/config";
const theme = {
  colors: {
    primary: "#ff0000",
  },
};
function MyApp({ Component, pageProps, navigation }) {
  console.log(navigation, "[[[[[[[[[");
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
const { publicRuntimeConfig } = getConfig();
console.log(publicRuntimeConfig);
// MyApp.getInitialProps = async () => {
//   const res = await fetch(`${publicRuntimeConfig.API_URL}/ Navigatons`);
//   const navigation = await res.json();
//   return { navigation };
// };

export default MyApp;
