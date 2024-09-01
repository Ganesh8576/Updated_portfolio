import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Ganesh Kumar, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education 
        </h1>
        <span>
          [Master of Computer Application], [Veer Bahadur Singh Purvanchal University , Jaunpur], [2022 - 2024] [7.94 CGPA]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
        <h3 className="text-black-600 font-semibold text-xl">Languages:</h3> C/C++, GoLang, Javascript.
 <h3 className="text-black-600 font-semibold text-xl">Web Technologies:</h3> HTML, CSS, JWT, BcryptJS, JSON.
<h3 className="text-black-600 font-semibold text-xl">Frameworks:</h3> Node.js, Express.js
<h3 className="text-black-600 font-semibold text-xl">Database:</h3> SQL , MySql , MongoDB.
<h3 className="text-black-600 font-semibold text-xl">Cloud Technology:</h3>AWS(Code Deploy, API Gateway, Lambda.)
<h3 className="text-black-600 font-semibold text-xl">Developer Tools:</h3> Git, Github, Postman, MongoDB Compass , VS Code.
<h3 className="text-black-600 font-semibold text-xl">Course Work:</h3> DSA , CN , OS , DBMS.
        </span>
        <br />
      
      </div>
    </div>
  );
}

export default About;
