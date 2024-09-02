import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaTelegram } from "react-icons/fa6"; 
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <ul><li><a href="https://github.com/Ganesh8576"><FaGithub size={24}/></a></li></ul>
              <ul><li><a href="https://www.geeksforgeeks.org/user/ganesh_chaubey_mca/"><SiGeeksforgeeks size={24}/></a></li></ul>
              <ul><li><a href="https://t.me/Km4477"><FaTelegram size={24}/></a></li></ul>
              <ul><li><a href="https://linkedin.com/in/ganesh-chaubey"><FaLinkedin size={24}/></a></li></ul>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 @Ganesh8576. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
