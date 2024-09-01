import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import node from "../../public/node.png";
import javascript from "../../public/javascript.png";
import goLang from "../../public/goLang.png";
import Cppfor from "../../public/Cppfor.png";
import mongodb from "../../public/mongodb.png";
import mysql from "../../public/mysql.png";
import github from "../../public/github.png";
import postman from "../../public/postman.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "javascript",
    },
    {
      id: 4,
      logo: node,
      name: "Node.JS",
    },
    {
      id: 5,
      logo: goLang,
      name: "GoLang",
    },
    {
      id: 6,
      logo: Cppfor,
      name: "C++",
    },
    {
      id: 7,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 8,
      logo: mysql,
      name: "MySql",
    },
    {
      id: 9,
      logo: github,
      name: "Github",
    },
    {
      id: 10,
      logo: postman,
      name: "Postman",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I have experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
