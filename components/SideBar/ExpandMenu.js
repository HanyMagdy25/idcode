import { useState } from "react";
// import "./ExpandMenu.css";
import NextLink from "next/link";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
const ExpandMenu = ({route ,isOpen}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // console.log("route",route)
  return (
    <div>
      <div className="MenuButton" onClick={toggleMenu}>
        {route.title} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </div>
      <div
        className={`SubRoutesContainer ${isMenuOpen && "isMenuOpen"}`}
        // isOpen={isMenuOpen}
      >
        {route.subRoutes.map((subRoute) => (
          <NextLink
            className="SubRoute"
            href={subRoute.link}
            key={subRoute.link}
          >
            {subRoute.name}
          </NextLink>
        ))}
      </div>
    </div>
  );
};

export default ExpandMenu;
