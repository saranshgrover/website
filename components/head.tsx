import * as React from "react";
import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";

interface Props {
  title: string;
}

export const Head = ({ children, title } : React.PropsWithChildren<Props>) => (
  <React.Fragment>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Alice&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>{title}</title>

      {children}
    </NextHead>
  </React.Fragment>
);