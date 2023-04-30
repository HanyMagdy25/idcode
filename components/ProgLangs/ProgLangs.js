import React from "react";
import Image from "next/image";
import lang1 from "../../public/images/langs/lang (1).png";
import lang2 from "../../public/images/langs/lang (2).png";
import lang3 from "../../public/images/langs/lang (3).png";
import lang4 from "../../public/images/langs/lang (4).png";
import lang5 from "../../public/images/langs/lang (5).png";
import lang6 from "../../public/images/langs/lang (6).png";
import lang7 from "../../public/images/langs/lang (7).png";
import lang8 from "../../public/images/langs/lang (8).png";
import lang9 from "../../public/images/langs/lang (9).png";

const langsImages = [
    lang3,
    lang7,
    lang1,
    lang2,
  lang4,
  lang8,
  lang9,
  lang5,
  lang6,
];

const ProgLangs = () => {
  return (
    <div className="progLangs">
      <div className="container progLangs__inner ">
        {langsImages.map((item, index) => (
          <Image src={item} key={index} alt="lang1" />
        ))}
      </div>
    </div>
  );
};

export default ProgLangs;
