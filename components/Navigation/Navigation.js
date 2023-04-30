import React, { useState } from "react";

import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/Navbar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggleDrawer={toggleDrawer} setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} toggleDrawer={toggleDrawer}  />
    </div>
  );
};

export default Navigation;
