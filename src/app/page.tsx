import Image from "next/image";

interface ProjectCardProps {
  title: String;
  description: String;
  image: String;
  delay?: any;
}

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />

      <div className="marquee mb-16">
        <div className="marquee-content">
          <p className="marquee-text">
            <span className="marquee-highlight">WEB DEVELOPMENT</span> • MOBILE
            DEVELOPMENT •{" "}
            <span className="marquee-highlight">DATA ANALYTICS</span> • RETRO
            AESTHETICS •{" "}
            <span className="marquee-highlight">WEB ANIMATION</span> • FPS &
            SPORTS GAMING •{" "}
            <span className="marquee-highlight">RESPONSIVE DESIGN</span> •{" "}
            <span className="marquee-highlight">WEB DEVELOPMENT</span> • MOBILE
            DEVELOPMENT •{" "}
            <span className="marquee-highlight">DATA ANALYTICS</span> • RETRO
            AESTHETICS •{" "}
            <span className="marquee-highlight">WEB ANIMATION</span> • FPS &
            SPORTS GAMING •{" "}
            <span className="marquee-highlight">RESPONSIVE DESIGN</span> •{" "}
            <span className="marquee-highlight">WEB DEVELOPMENT</span> • MOBILE
            DEVELOPMENT •{" "}
            <span className="marquee-highlight">DATA ANALYTICS</span> • RETRO
            AESTHETICS •{" "}
            <span className="marquee-highlight">WEB ANIMATION</span> • FPS &
            SPORTS GAMING •{" "}
            <span className="marquee-highlight">RESPONSIVE DESIGN</span>
          </p>
        </div>
      </div>

      <LatestProjects />
      {/* <AboutMe /> */}

      <Skills />

      <LatestBlogPosts />

      <ContactCTA />
    </main>
  );
}

const HeroSection = () => (
  <div className="container mx-auto px-4 mb-16">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-retro text-darkPurple mb-4">
          <span className="glitch" data-text="HELLO WORLD">
            HELLO WORLD
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-mono text-purple mb-6">
          I'm a{" "}
          <span className="font-bold text-salmon">Frontend Developer</span>
          <span className="blink">_</span>
        </h2>
        <p className="font-pixel text-xl text-darkPurple mb-8">
          Creating nostalgic digital experiences with modern web technologies.
          Pixel perfect, retro-inspired designs that stand out.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="retro-btn bg-salmon text-darkPurple font-mono font-bold py-3 px-6 retro-shadow retro-border"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#"
            className="retro-btn bg-purple text-cream font-mono font-bold py-3 px-6 retro-shadow retro-border"
          >
            CONTACT ME
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div className="hero-terminal retro-shadow">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <div className="terminal-title">retro-terminal</div>
          </div>
          <div className="terminal-content">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">whoami</span>
            </div>
            <div className="terminal-output">
              Jonathan Karongkong - Frontend Developer &amp; Pixel Enthusiast
            </div>

            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">ls -la skills/</span>
            </div>
            <div className="terminal-output">
              drwxr-xr-x HTML5
              <br />
              drwxr-xr-x CSS3
              <br />
              drwxr-xr-x JavaScript
              <br />
              drwxr-xr-x React & NextJS
              <br />
              drwxr-xr-x TailwindCSS
              <br />
              drwxr-xr-x Flutter
            </div>

            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">cat about.txt</span>
            </div>
            <div className="terminal-output">
              I create retro-inspired portfolio websites and digital experiences
              that combine nostalgic aesthetics with modern functionality.
              <br />
              Let's build something awesome together!
            </div>

            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">./start_project.sh</span>
            </div>
            <div className="terminal-output">
              Initializing new project...
              <br />
              Loading creative ideas...
              <br />
              Ready to collaborate!
            </div>

            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command"></span>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  </div>
);

const AboutMe = () => {
  return (
    <section id="about" className="py-16 mb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center">
            <Image
              src="/about-me-retro.webp"
              alt="about me"
              width={720}
              height={960}
              quality={100}
              className="rounded-2xl"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 ">
            {/* <div className="relative">
              <div className="pixel-avatar">
                <div className="pixel-avatar-head">
                  <div className="pixel-avatar-eye left"></div>
                  <div className="pixel-avatar-eye right"></div>
                  <div className="pixel-avatar-mouth"></div>
                </div>
                <div className="pixel-avatar-body"></div>
              </div>
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple opacity-20 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-salmon opacity-20 rounded-full"></div>
            </div> */}

            <h2 className="text-3xl font-retro text-darkPurple section-title">
              ABOUT ME
            </h2>
            <p className="section-subtitle">
              Frontend developer with a passion for creating digital
              experiences.
            </p>
            <div className="font-pixel text-xl text-darkPurple space-y-4 mb-8">
              <p>
                Hello world! I'm a frontend developer with a passion for
                creating all digital experiences. With over 2 years of
                experience in web development, I specialize in crafting
                nostalgic interfaces that combine modern functionality with
                classNameic aesthetics.
              </p>
              <p>
                My journey began in the early 2020 when I discovered the joy of
                programming. This eventually led me to web development, where I
                found my true calling in building interactive experiences in web
                and mobile view.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="pixel-btn">
                VIEW MY WORK
              </a>
              <a href="#" className="pixel-btn secondary">
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 mb-16 bg-darkPurple text-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-retro text-cream section-title mb-12 text-center">
          MY SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <div className="flex justify-between font-mono text-cream mb-2">
                <span>HTML/CSS</span>
                <span>95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "95%" }}></div>
                <div className="skill-text">EXPERT</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between font-mono text-cream mb-2">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "90%" }}></div>
                <div className="skill-text">EXPERT</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between font-mono text-cream mb-2">
                <span>React</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "85%" }}></div>
                <div className="skill-text">ADVANCED</div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="flex justify-between font-mono text-cream mb-2">
                <span>TailwindCSS</span>
                <span>92%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "92%" }}></div>
                <div className="skill-text">EXPERT</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between font-mono text-cream mb-2">
                <span>Python</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "80%" }}></div>
                <div className="skill-text">ADVANCED</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between font-mono text-cream mb-2">
                <span>Mobile Development - Flutter</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: "75%" }}></div>
                <div className="skill-text">ADVANCED</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-retro mb-8">TECHNOLOGIES I WORK WITH</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div>
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="#E34F26"
                >
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                </svg>
              </div>
              <div className="tech-name">HTML5</div>
            </div>

            <div>
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="#1572B6"
                >
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"></path>
                </svg>
              </div>
              <div className="tech-name">CSS3</div>
            </div>

            <div>
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="#F7DF1E"
                >
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                </svg>
              </div>
              <div className="tech-name">JavaScript</div>
            </div>

            <div>
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3776AB"
                    d="M11.94,0.01c-1.71,0.01-3.35,0.15-4.79,0.4c-4.24,0.73-5.01,2.25-5.01,5.06v3.71h10.02v1.24H2.14 c-2.83,0-5.3,1.7-6.07,4.93c-0.89,3.7-0.93,6.01,0,9.87c0.69,2.88,2.34,4.93,5.17,4.93h3.34v-4.44c0-3.21,2.78-6.03,6.07-6.03 h9.71c2.7,0,4.79-2.22,4.79-4.93V5.46c0-2.63-2.22-4.6-4.79-5.04C18.01,0.05,15.65-0.01,11.94,0.01z M7.37,2.9 c1.04,0,1.89,0.86,1.89,1.91c0,1.05-0.85,1.9-1.89,1.9c-1.04,0-1.89-0.85-1.89-1.9C5.48,3.76,6.33,2.9,7.37,2.9z"
                  ></path>
                  <path
                    fill="#FFC331"
                    d="M23.11,5.42v4.31c0,3.34-2.83,6.16-6.07,6.16h-9.71c-2.66,0-4.79,2.27-4.79,4.93v9.24 c0,2.63,2.29,4.18,4.79,4.93c3,0.9,5.88,1.06,9.71,0c2.55-0.71,4.79-2.13,4.79-4.93v-3.71H11.83v-1.24h14.5 c2.83,0,3.88-1.97,4.79-4.93c0.94-3.04,0.9-5.97,0-9.87c-0.65-2.81-1.89-4.93-4.79-4.93H23.11z M16.63,21.15 c1.04,0,1.89,0.85,1.89,1.9c0,1.05-0.85,1.91-1.89,1.91c-1.04,0-1.89-0.86-1.89-1.91C14.74,22,15.59,21.15,16.63,21.15z"
                  ></path>
                </svg>
              </div>
              <div className="tech-name">Python</div>
            </div>

            <div>
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="#61DAFB"
                >
                  <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"></path>
                </svg>
              </div>
              <div className="tech-name">React</div>
            </div>

            <div>
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="#38B2AC"
                >
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                </svg>
              </div>
              <div className="tech-name">Tailwind</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LatestProjects = () => {
  return (
    <div className="container mx-auto px-4 mb-16">
      <h2 className="text-3xl font-retro text-darkPurple section-title mb-12 text-center">
        Latest Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Project 1 --> */}
        <div className="bg-cream retro-border retro-shadow p-4">
          <div className="bg-salmon h-48 mb-4 retro-border flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-20 h-20"
            >
              <rect
                width="90"
                height="90"
                x="5"
                y="5"
                fill="#FFEAD8"
                rx="5"
              ></rect>
              <rect
                width="70"
                height="10"
                x="15"
                y="20"
                fill="#9B177E"
                rx="2"
              ></rect>
              <rect
                width="50"
                height="10"
                x="15"
                y="40"
                fill="#9B177E"
                rx="2"
              ></rect>
              <rect
                width="60"
                height="10"
                x="15"
                y="60"
                fill="#9B177E"
                rx="2"
              ></rect>
              <circle cx="80" cy="70" r="15" fill="#2A1458"></circle>
            </svg>
          </div>
          <h3 className="font-mono font-bold text-xl text-purple mb-2">
            Retro Blog Platform
          </h3>
          <p className="font-pixel text-darkPurple mb-4">
            A nostalgic blogging platform with 80s-inspired design elements.
          </p>
          <a
            href="#"
            className="retro-btn inline-block bg-purple text-cream font-mono font-bold py-2 px-4 retro-shadow retro-border text-sm"
          >
            VIEW PROJECT
          </a>
        </div>

        {/* <!-- Project 2 --> */}
        <div className="bg-cream retro-border retro-shadow p-4">
          <div className="bg-purple h-48 mb-4 retro-border flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-20 h-20"
            >
              <rect
                width="90"
                height="90"
                x="5"
                y="5"
                fill="#FFEAD8"
                rx="5"
              ></rect>
              <circle cx="30" cy="30" r="15" fill="#E8988A"></circle>
              <rect width="30" height="30" x="55" y="15" fill="#9B177E"></rect>
              <rect
                width="70"
                height="20"
                x="15"
                y="60"
                fill="#2A1458"
                rx="2"
              ></rect>
            </svg>
          </div>
          <h3 className="font-mono font-bold text-xl text-purple mb-2">
            Arcade Game Collection
          </h3>
          <p className="font-pixel text-darkPurple mb-4">
            ClassNameic arcade games reimagined with modern web technologies.
          </p>
          <a
            href="#"
            className="retro-btn inline-block bg-purple text-cream font-mono font-bold py-2 px-4 retro-shadow retro-border text-sm"
          >
            VIEW PROJECT
          </a>
        </div>

        {/* <!-- Project 3 --> */}
        <div className="bg-cream retro-border retro-shadow p-4">
          <div className="bg-darkPurple h-48 mb-4 retro-border flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-20 h-20"
            >
              <rect
                width="90"
                height="90"
                x="5"
                y="5"
                fill="#FFEAD8"
                rx="5"
              ></rect>
              <circle cx="50" cy="30" r="15" fill="#E8988A"></circle>
              <path
                d="M30 60 L50 40 L70 60 L80 50 L80 80 L20 80 L20 50 L30 60"
                fill="#9B177E"
              ></path>
            </svg>
          </div>
          <h3 className="font-mono font-bold text-xl text-purple mb-2">
            Retro Photo Gallery
          </h3>
          <p className="font-pixel text-darkPurple mb-4">
            A vintage-styled photo gallery with polaroid-like effects.
          </p>
          <a
            href="#"
            className="retro-btn inline-block bg-purple text-cream font-mono font-bold py-2 px-4 retro-shadow retro-border text-sm"
          >
            VIEW PROJECT
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="retro-btn inline-block bg-salmon text-darkPurple font-mono font-bold py-3 px-6 retro-shadow retro-border"
        >
          VIEW ALL PROJECTS
        </a>
      </div>
    </div>
  );
};

const LatestBlogPosts = () => {
  return (
    <div className="container mx-auto px-4 mb-16">
      <h2 className="text-3xl font-retro text-darkPurple mb-8 text-center">
        LATEST BLOG POSTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* <!-- Blog Post 1 --> */}
        <div className="bg-cream retro-border retro-shadow p-4">
          <h3 className="font-mono font-bold text-xl text-purple mb-2">
            The Revival of Retro Web Design
          </h3>
          <div className="flex items-center mb-4">
            <div className="font-pixel text-darkPurple text-sm">
              June 15, 2023
            </div>
            <div className="mx-2 text-salmon">•</div>
            <div className="font-pixel text-purple text-sm">Design</div>
          </div>
          <p className="font-pixel text-darkPurple mb-4">
            Exploring how nostalgic design elements are making a comeback in
            modern web development...
          </p>
          <a
            href="#"
            className="retro-btn inline-block bg-purple text-cream font-mono font-bold py-2 px-4 retro-shadow retro-border text-sm"
          >
            READ MORE
          </a>
        </div>

        {/* <!-- Blog Post 2 --> */}
        <div className="bg-cream retro-border retro-shadow p-4">
          <h3 className="font-mono font-bold text-xl text-purple mb-2">
            Creating Pixel Art with CSS
          </h3>
          <div className="flex items-center mb-4">
            <div className="font-pixel text-darkPurple text-sm">
              May 28, 2023
            </div>
            <div className="mx-2 text-salmon">•</div>
            <div className="font-pixel text-purple text-sm">Tutorial</div>
          </div>
          <p className="font-pixel text-darkPurple mb-4">
            A step-by-step guide to creating beautiful pixel art illustrations
            using only CSS...
          </p>
          <a
            href="#"
            className="retro-btn inline-block bg-purple text-cream font-mono font-bold py-2 px-4 retro-shadow retro-border text-sm"
          >
            READ MORE
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="retro-btn inline-block bg-salmon text-darkPurple font-mono font-bold py-3 px-6 retro-shadow retro-border"
        >
          VIEW ALL POSTS
        </a>
      </div>
    </div>
  );
};

const ContactCTA = () => {
  return (
    <div className="container mx-auto px-4 mb-16">
      <div className="bg-purple text-cream p-8 retro-border retro-shadow text-center">
        <h2 className="text-3xl font-retro mb-4">LET'S WORK TOGETHER</h2>
        <p className="font-pixel text-xl mb-6">
          Have a project in mind? Let's create something awesome!
        </p>
        <a
          href="#"
          className="retro-btn inline-block bg-salmon text-darkPurple font-mono font-bold py-3 px-6 retro-shadow retro-border"
        >
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
};
