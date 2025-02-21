import React, { useState } from "react";
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,
  python_Logo,
  php_Logo,
  laravel_Logo,
  magento_Logo,
  django_Logo,
  mysql_Logo,
  postman_Logo,
  jira_Logo,
  bitbucket_Logo,
  aws_Logo,
  Jquery_Logo,
  React_Logo,
  Git_Logo,
  Github_Logo,
  Firebase_Logo,
  VSCode_Logo,
  Tailwind_Logo
} from "../assets/images/index";

function Skills() {
  const [name, setName] = useState(null);
  const handleLeave = (name) => {
    setName(name)
  }

  const cards = [
    {
      title: "Programming Languages",
      items: [

        { src: python_Logo, alt: "Python" },
        { src: php_Logo, alt: "PHP" },
      ],
    },
    {
      title: "Library and Frameworks",
      items: [
        { src: React_Logo, alt: "React" },
        { src: laravel_Logo, alt: "Laravel" },
        { src: magento_Logo, alt: "Magento" },
        { src: django_Logo, alt: "Django" },
        // { src: Bootstrap_Logo, alt: "Bootstrap" },
        { src: Tailwind_Logo, alt: "Tailwind" },
        { src: Jquery_Logo, alt: "Jquery" },
      ],
    },
    {
      title: "Scripting Languages",  // New section for testing tools
      items: [
        { src: JavaScript_Logo, alt: "JavaScript" },
        { src: HTML_Logo, alt: "HTML5" },
        { src: CSS_Logo, alt: "CSS3" },
      ],
    },
    {
      title: "Version Control",
      items: [
        { src: Git_Logo, alt: "Git" },
        { src: Github_Logo, alt: "Github" },
      ],
    },
    {
      title: "Database",
      items: [
        { src: mysql_Logo, alt: "MySQL" },
        { src: aws_Logo, alt: "AWS" },
      ],
    },
    {
      title: "Other tools & Services",
      items: [
        { src: Firebase_Logo, alt: "Firebase" },
        { src: VSCode_Logo, alt: "Visual Studio Code" },
        { src: postman_Logo, alt: "Postman" },
        { src: jira_Logo, alt: "Jira" },
        { src: bitbucket_Logo, alt: "Bitbucket" },
      ],
    },
  ];



  return (
    <div className="pb-5 h-auto my-20" id="skills">

      <div className="text-center font-bold flex justify-between items-center">
        <h1 className="text-6xl max-md:text-4xl">Skills</h1>
        <div className="text-[#7e9199] text-6xl max-md:text-4xl">{name}</div>
      </div>

      <div className="flex max-sm:flex-col items-center justify-between mt-14 gap-10 flex-wrap">

        {cards.map((value, index) => {
          return (
            <div className="flex flex-col gap-10 max-sm:gap-5 max-md:w-full w-5/12" key={index}>
              <div className="flex flex-col gap-5">
                <h4 className="text-2xl">{value.title}</h4>
                <div className="flex gap-5 max-md:flex-wrap">
                  {
                    value.items.map((icon, id) => {
                      return (
                        <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300" onMouseMove={() => setName(icon.alt)} onMouseLeave={() => handleLeave(null)} key={id}>
                          <img src={icon.src} alt={icon.alt} className="h-10" />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        })}

      </div>

    </div>
  );
}

export default Skills;