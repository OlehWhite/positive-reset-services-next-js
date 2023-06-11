import { Layout } from "../components/Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/global.css";

const theme = createTheme({});

const MyApp = ({ Component, pageProps }) => (
  <>
    <Layout>
      <main>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <ToastContainer hideProgressBar />
        </ThemeProvider>
      </main>
    </Layout>
  </>
);

export default MyApp;
