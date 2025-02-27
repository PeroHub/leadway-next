import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Legal Pathway Immigration Law Firm</title>
        <meta
          content="Legal Pathway Immigration Law Firm"
          property="og:title"
        />
        <meta
          content="Legal Pathway Immigration Law Firm"
          property="twitter:title"
        />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        {/* <link rel="stylesheet" href={styles} /> */}
      </Head>
      <main>{/* Main content goes here */}</main>
    </div>
  );
}
