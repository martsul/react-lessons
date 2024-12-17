"use client";

import App from "../app";
import { Layout } from "../components/layout/layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <div id="root">
          <App>
            <Layout>{children}</Layout>
          </App>
        </div>
      </body>
    </html>
  );
}
