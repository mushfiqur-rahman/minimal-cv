import PinterestTag from "@/components/PinterestTag";
import Progress from "@/components/Progress";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import SiteSchema from "@/components/Schema";

const manrope = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Progress />
      <PinterestTag />
      <SiteSchema />

      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
