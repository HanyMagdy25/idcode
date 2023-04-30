import React, { useState } from "react";
import NextLink from "next/link";

const Dropdown = ({ dropDownData }) => {

  const [drop, setDrop] = useState(false);
  return (
    <>
      <ul onClick={() => setDrop(!drop)} className="dropdown-main">
        {dropDownData?.map((item, index) => (
          <li key={index}>
            <NextLink href={item.link} onClick={() => setDrop(!drop)}>
              {item.name}
            </NextLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
