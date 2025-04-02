import "./globals.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const metadata = {
  title: "Rick and Morty - Catalogo personaggi",
  description: "Made by me with Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
