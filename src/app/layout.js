import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Avispora",
  description: "Helping birds one garden at a time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

