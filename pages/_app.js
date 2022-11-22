import "../styles/globals.css";
// import { MoralisProvider } from "react-moralis";
import { TransactionProvider } from "../context/TransactionContext";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
      {/* <MoralisProvider initializeOnMount={false}> */}
      <Component {...pageProps} />
      {/* </MoralisProvider> */}
    </TransactionProvider>
  );
}

export default MyApp;
