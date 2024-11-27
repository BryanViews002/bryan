import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Portfolio - Photographer & Video Editor</title>
      <meta
        name="description"
        content="A creative portfolio showcasing my work in photography and video editing."
      />
      <meta
        name="keywords"
        content="photography, video editing, portfolio, creative work"
      />
      <meta name="author" content="Bryan Joe" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
