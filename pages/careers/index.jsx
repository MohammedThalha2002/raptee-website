import React from "react";

function Index() {
  return (
    <div
      style={{
        background: "#ffffff",
        border: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <Head>
        <title>Raptee | Careers</title>
        <meta name="Careers page" content="An E-motorcycle website - Careers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe
        src="https://apply.workable.com/raptee-energy/"
        style={{
          background: "#ffffff",
          border: "none",
          display: "block",
          height: "100vh",
          width: "100vw",
        }}
      ></iframe>
    </div>
  );
}

export default Index;
