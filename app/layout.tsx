import "./styles/globals.css";
import "./styles/design_tokens.css";
import "./styles/utilities.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "dotenv/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bulindo",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
