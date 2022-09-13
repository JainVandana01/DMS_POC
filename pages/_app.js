import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "../components/Header";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Header />
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
