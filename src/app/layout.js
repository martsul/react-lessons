import { EditReviewContextProvider } from "../components/edit-review-context/edit-review-context";
import { Layout } from "../components/layout/layout";
import { ReduxProvider } from "../components/redux-provider/redux-provider";
import { SignContextProvider } from "../components/sign-context/sign-context";
import { ThemeContextProvider } from "../components/theme-context/theme-context";
import "../style/fonts.css";
import "../style/reset.css";
import "../style/root.css";

export const metadata = {
  title: "Delivery",
  description: "Delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <div id="root">
          <ReduxProvider>
            <ThemeContextProvider>
              <SignContextProvider>
                <EditReviewContextProvider>
                  <Layout>{children}</Layout>
                </EditReviewContextProvider>
              </SignContextProvider>
            </ThemeContextProvider>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
