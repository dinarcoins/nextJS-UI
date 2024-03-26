import React from "react";

import Image from "next/image";

// Import
import Navbar from "./navbar";
import { navItems } from "../Constans";
import CardComponent from "./cars";

const SectionFirst = () => {
  return (
    <div className="flex justify-center">
      <Navbar items={navItems} />
      <CardComponent />
    </div>
  );
};

export default SectionFirst;
