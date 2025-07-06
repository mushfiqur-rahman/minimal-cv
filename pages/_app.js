import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-J2N8PJJ379" />
      </main>
    </>
  );
}
