import "../styles/globals.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../components/Header";

const queryClient = new QueryClient();
var cors = require("cors");
//app.use(cors());
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
