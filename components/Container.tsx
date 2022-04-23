import Head from "next/head";
import { useRouter } from "next/router";

export default function Container({ children, ...customMeta }) {
  const router = useRouter();
  const meta = {
    title: "Jacob Hummel - Software Engineer",
    description: `React/React Native front-end software engineer with a UX background.`,
    // image: "https://jacobhummel.com/static/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="container">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://jacobhummel.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://jacobhummel.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Jacob Hummel" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {/* <meta property="og:image" content={meta.image} /> */}
      </Head>
      <main className="">
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
