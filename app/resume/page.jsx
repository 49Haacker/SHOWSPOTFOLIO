"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaJs,
  FaTypo3,
} from "react-icons/fa";

import { SiTailwindcss, SiBootstrap, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "My name is Gaurav Tiwari, and I hold a BCA degree from BBDU. Currently based in Surat, my permanent address is in Lucknow, Uttar Pradesh. With 1 year of experience in frontend development, I am proficient in building responsive and user-friendly web applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Gaurav Tiwari",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7355749398",
    },
    {
      fieldName: "Experience",
      fieldValue: "08 Months",
    },
    {
      fieldName: "Skype",
      fieldValue: "Gaurav0.1",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "gauravtiwari7888@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Hindi, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I am a passionate and skilled Frontend Developer with 1 year of experience in building responsive and user-friendly web applications. I have a strong foundation in HTML, CSS, JavaScript, and popular frontend frameworks like React and Angular. I am also proficient in UI/UX principles and best practices.",
  items: [
    {
      company: "Hallo-Tech solution",
      position: "Freelance Web Developer",
      duration: "2024 - present",
    },
    {
      company: "Redjinni Pvt. Ltd.",
      position: "Front End Developer",
      duration: "2023-2024",
    },
    {
      company: "Digipodium",
      position: "MERN Full Stack Developer Intern",
      duration: "summer 2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Hii!! I'm Gaurav Tiwari, I'm experienced in web development with a strong foundation in BCA (2023) and additional courses. See below for detailed education history.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },

    {
      institution:
        "Babu Banarasi Das University, Lucknow, Uttar Pradesh, 226028",
      degree: "BCA (Bachelor Of Computer Application)",
      duration: "2020 - 2023",
    },

    {
      institution:
        "IANT (Institute of Advance Network Technology), Lucknow, Uttar Pradesh, 226028",
      degree: "Diploma CHNA (Computer Hardware & Network Administrator)",
      duration: "2018 - 2019",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I possess a comprehensive skill set for building modern web applications. My expertise includes ->",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "htms 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaTypo3 />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindCSS",
    },
    {
      icon: <SiBootstrap />,
      name: "tailwindCSS",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";

const Resume = () => {
  const [showFullText, setShowFullText] = useState({
    experience: false,
    education: false,
    skills: false,
    about: false,
  });

  const toggleText = (section) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const truncateText = (text, wordLimit, section) => {
    // console.log(text, wordLimit);

    const words = text.split(" ");
    // console.log(words);
    // if (words.length > wordLimit) {
    //   return words.slice(0, wordLimit).join(" ") + " !!!!!!";
    // }
    if (showFullText[section]) {
      return (
        <>
          {text}{" "}
          <span
            onClick={() => toggleText(section)}
            style={{ color: "#00FF99", cursor: "pointer" }}
          >
            Show Less
          </span>
        </>
      );
    } else {
      return (
        <>
          {words.slice(0, wordLimit).join(" ")}{" "}
          <span
            onClick={() => toggleText(section)}
            style={{ color: "#00FF99", cursor: "pointer" }}
          >
            !!!!!
          </span>
        </>
      );
    }
    return text;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {truncateText(experience.description, 15, "experience")}
                  </p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {truncateText(education.description, 15, "education")}
                  </p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {truncateText(skills.description, 15, "skills")}
                    </p>
                  </div>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => (
                        <li key={index} className="">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>

                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* About me */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {truncateText(about.description, 15, "about")}
                  </p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index) => (
                        <li
                          key={index}
                          className={`${
                            item.fieldName === "Email" && "max-[450px]:flex-col"
                          } flex items-center justify-center xl:justify-start gap-4`}
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
