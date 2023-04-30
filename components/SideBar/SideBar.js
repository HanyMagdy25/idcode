// import "./SideBar.css";
import NextLink from "next/link";
import ExpandMenu from "./ExpandMenu";
import { navTitle } from "../../utils/data";


import logo from "../../public/images/logo.png";
import Image from "next/image";
const SideBar = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      {isOpen && <div className="Backdrop" onClick={toggleDrawer} />}
      <div className={`SDrawer ${isOpen && "isOpen"}`} >
        <div className="RightNav">
          {/* <h2 className="SNavbarBrand ">LOGO</h2> */}
          <NextLink href="/" className="navbar-logo">
            <Image src={logo} alt="Medical-logo" />
          </NextLink>
          <div className="NavRoutes ">
            {navTitle.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.title} isOpen={isOpen}/>;
              }
              return (
                <NextLink
                  className="NavRoute"
                  onClick={toggleDrawer}
                  href={route.path}
                  key={route.title}
                >
                  {route.title}
                </NextLink>
              );
            })}
          </div>
          {/* <LoginButton>Login</LoginButton> */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
