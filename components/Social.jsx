import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/49Haacker",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/gaurav-tiwari-243137170/",
  },
  {
    icon: <FaYoutube />,
    path: "#",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/in_hacke_r",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <>
      <div className={containerStyles}>
        {socials.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            target={`${item.path === "#" ? "_self" : "_blank"}`}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Social;
