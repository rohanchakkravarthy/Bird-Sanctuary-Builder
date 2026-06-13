import "./globals.css";

export const metadata = {
  title: "The Backyard Biome",
  description: "Find the best bird feeders for your region",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

