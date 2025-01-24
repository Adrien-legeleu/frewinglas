"use client";

import AboutGrid from "../components/About/AboutGrid";
import Landing from "../components/About/Landing";

export default function page() {
  return (
    <div className="space-y-20">
      <Landing />
      <AboutGrid />
    </div>
  );
}
