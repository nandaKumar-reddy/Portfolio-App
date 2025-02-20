import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact(){
  return (
      <div className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20" id="contact">
        <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me ☎️</div>
        <p className="text-white text-base">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        <a href="tel:+923349009827" className="text-white text-2xl hover:text-white">+91-9945813567</a>
        <a href="mailto:syedtalhadev7@gmail.com" className="text-white text-2xl hover:text-white">nandakumarr522@gmail.com</a>
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://github.com/nandaKumar-reddy" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nanda-r-b467ab210/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
            <FaLinkedin />
          </a>
        </div>
      </div>
  )
}

export default Contact;