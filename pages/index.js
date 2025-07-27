import Head from "next/head";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="robots" content="follow, index" />
        <meta name="google-site-verification" content="" />
        <meta name="yandex-verification" content="" />

        <meta name="facebook-domain-verification" content="" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" key="desc" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="" name="position" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="rating" content="General" />
        <meta name="author" content="Mushfiqur Rahman" />
        <meta name="owner" content="Mushfiqur Rahman" />
        <meta name="robots" content="index,follow,noodp,noydir" />
        <meta name="copyright" content="Copyright © Mushfiqur Rahman" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta name="msvalidate.01" content="3EA8D19855F5F7D04AEABD2C2A95FA33" />
        <meta property="og:site_name" content="Mushfiqur Rahman" />
        <meta property="og:description" content="" />
        <meta property="og:title" content="" />
        <meta property="og:image" content="" />
        <meta property="fb:app_id" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
        <meta name="keywords" content="" />

        <link href="https://minimal-cv-theta.vercel.app" rel="canonical" />
        <meta content="https://minimal-cv-theta.vercel.app" property="og:url" />
        <meta content="" name="author" />
        <meta content="" name="application-name" />
        <title>MUSHFIQ - Next JS Minimal CV</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main
        aria-label="resume-content"
        className="md:w-1/2 mx-auto min-h-screen px-10 py-5 rounded-lg shadow-2xl dark:shadow-amber-500 m-20"
      >
        <Header />
        <Summary />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
