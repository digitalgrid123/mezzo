// pages/_app.tsx
import type { AppProps } from "next/app";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Landing from "@/components/Landing/Landing";
import Shop from "@/components/Shop/Shop";
import Collection from "@/components/Collection/Collection";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Shop />
        <Collection />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
