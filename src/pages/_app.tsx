import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const queryClient = new QueryClient();
var cors = require("cors");
//app.use(cors());
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
