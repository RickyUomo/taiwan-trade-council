import "@/styles/globals.css";
import { Provider } from "@/components/ui/provider";
import { Layout } from "@/components/common/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
