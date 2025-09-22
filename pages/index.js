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
        <title>MUSHFIQ - IT Support Engineer | Web Developer</title>
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
