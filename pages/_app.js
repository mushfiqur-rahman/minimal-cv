import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const manrope = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={manrope.className}>
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-J2N8PJJ379" />
      </main>
    </>
  );
}
