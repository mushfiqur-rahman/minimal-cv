import Head from "next/head";

const Schema = ({ type = "website", data }) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mushfiqur Rahman",
    url: "https://mushfiq.xyz",
    image: "https://mushfiq.xyz/mushfiqur.jpg",
    jobTitle: "Web Developer & IT Support Engineer",
    sameAs: [
      "https://www.linkedin.com/in/mushfiq1",
      "https://github.com/mushfiqur-rahman",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chuknagar",
      addressRegion: "Khulna",
      addressCountry: "Bangladesh",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },

    "@graph": [
      {
        "@type": "WebSite",
        url: "https://mushfiq.xyz",
        name: "MUSHFIQ - IT Support Engineer | Web Developer",
        description:
          "I am Mushfiq — a Web Developer & IT Support Engineer helping businesses build trust and grow online. I specialize in fast, SEO-friendly, Responsive websites and professional email setup using Google Workspace and Microsoft 365.Whether you are launching a new brand, moving your email from cPanel, or struggling with domain/DNS issues, I make complex tech simple and reliable. My goal is to make sure your online presence is not just live — but working for your business 24/7. I believe in clear communication, quick turnaround, and long-term support — so you’re never left guessing. Let’s build something that works.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chuknagar",
          addressRegion: "Khulna",
          addressCountry: "Bangladesh",
        },
      },
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema) }}
      />
    </Head>
  );
};

export default Schema;
