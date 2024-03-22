import React from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";

export default function page() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero/>
    </div>
  );
}
