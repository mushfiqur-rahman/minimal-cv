import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

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
      </main>
    </>
  );
}
