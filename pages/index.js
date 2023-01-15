import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col border">
      <Navbar />
      <div className="flex flex-1">
        <Hero />
      </div>
      <Footer/>
    </div>
  );
}
