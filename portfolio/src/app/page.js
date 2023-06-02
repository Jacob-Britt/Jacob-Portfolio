import React from 'react';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import me from '../../public/me.jpg';
import backgroundImage from '../../public/backgroundImage.jpg';

function Skills() {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "Kotlin", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "C", level: "Intermediate" },
    { name: "Android Dev", level: "Intermediate" }
  ];

  return (
    <section id="skills" className="py-10 bg-purple-900">
      <h2 className="text-3xl font-bold mb-5 text-white text-center">Skills</h2>
      <ul className="flex flex-wrap justify-center gap-8 ml-8 mr-8">
        {skills.map((skill) => (
          <li key={skill.name} className="bg-purple-800 px-8 py-4 rounded-full flex flex-col justify-center">
            <span className="font-bold text-xl mb-2 text-white">{skill.name}</span>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
              </div>
            </div>
            <p className="text-md text-white">{skill.level}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jacob Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10">
        <section className="bg-cover flex flex-col justify-start bg-[url(../../public/backgroundImage.jpg)]">
          <nav className="py-10 flex justify-between">
            <h1 className="text-2xl font-bold text-center text-white ml-8">Jacob&apos;s Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <a className="bg-purple-300 text-white px-4 rounded ml-8 mr-8" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center mx-auto mb-12">
            <div className="w-1/2">
              <div className="relative mx-auto mb-6">
                <Image
                  src={me}
                  width={200}
                  height={200}
                  alt="Picture of Jacob"
                  className="rounded-full border-purple-700 border-8"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </div>
              <div className="flex justify-center gap-16 py-3">
                <a href="https://github.com/your-github-link">
                  <AiFillGithub size={25} color="white" />
                </a>
                <a href="https://www.linkedin.com/your-linkedin-link">
                  <AiFillLinkedin size={25} color="blue" />
                </a>
              </div>
            </div>
            <div className="text-center py-10 px-5">
              <h2 className="text-5xl py-2 font-medium text-white">Hello, I&apos;m Jacob</h2>
              <h3 className="text-2xl py-2 text-white">
                And I&apos;m a{" "}
                <span className="text-yellow-400 text-3xl ">Developer</span>
              </h3>
            </div>
          </div>
        </section>

        <section>
          <div className='bg-purple-500'>
            <h2 className="text-3xl mb-5 text-center bg-purple-600 font-black tracking-wide">
              About Me
            </h2>
            <p className='text-center py-2 px-20 indent-5px'>
              Welcome! I&apos;m a second-year IT Programming student at COGS, specializing in web development and Android application programming.

              I&apos;m passionate about creating exceptional websites and crafting innovative Android apps. From designing user-friendly interfaces to writing efficient code, I strive for excellence in every project I undertake.

              With a strong foundation in HTML, CSS, JavaScript, and Java, I&apos;m well-equipped to bring your ideas to life. Whether you need a stunning website or a powerful mobile application, I&apos;m here to deliver results that exceed expectations.

              Let&apos;s collaborate and embark on this coding journey together!  </p>
          </div>
        </section>

        <section>
          <Skills />
        </section>

      </main>
    </div>
  );
}