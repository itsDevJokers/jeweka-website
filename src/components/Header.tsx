"use client";

import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className=" bg-darkPurple text-cream px-4 retro-border mb-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 cursor-pointer">
            {/* <div className="text-2xl font-retro tracking-wider">JEWEKA</div> */}
            <Image
              src="/jeweka-logo.webp"
              alt="logo"
              width={150}
              height={100}
              quality={100}
            />
          </div>
          <div className="flex items-center justify-between w-full md:w-auto">
            <ul className="flex flex-wrap justify-center gap-6 font-mono">
              <li>
                <a href="#" className="nav-item text-salmon font-bold">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  BLOG
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="#" className="nav-item">
                  PROFILE
                </a>
              </li>
            </ul>
            <div className="flex items-center ml-6 gap-4">
              <a
                href="#"
                className="github-icon text-cream hover:text-salmon transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <div className="profile-pic rounded-full overflow-hidden w-10 h-10 bg-salmon flex items-center justify-center pt-3">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-8 h-8"
                >
                  <circle cx="50" cy="35" r="20" fill="#FFEAD8"></circle>
                  <path
                    d="M50 60 L50 60 Q30 60 20 80 L20 100 L80 100 L80 80 Q70 60 50 60"
                    fill="#FFEAD8"
                  ></path>
                  <circle cx="40" cy="30" r="3" fill="#2A1458"></circle>
                  <circle cx="60" cy="30" r="3" fill="#2A1458"></circle>
                  <path
                    d="M40 45 Q50 55 60 45"
                    stroke="#2A1458"
                    strokeWidth="2"
                    fill="none"
                  ></path>
                </svg> */}
                <Image
                  src="/cartoon-profile.webp"
                  alt="profile"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
