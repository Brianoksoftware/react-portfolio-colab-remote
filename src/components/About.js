import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 flex-shrink-0 mb-16 md:mb-0">
          <img
            className="object-cover object-center rounded w-full"
            alt="hero"
            src="./space0.svg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 flex flex-col items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Brian
            <br className="" /> I am a Full-stack engineer.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            I am skilled in various languages, frameworks & tools.
            Including React, Python, Javascript, Mojo, Html, CSS, Tailwind CSS, Mongo DB,
            Express, Node.js, React Native, Git, Flask, Postgresql, Linux, Ionic, Data structures, Algorithms, heroku, Angular and Capacitor
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg mr-4">
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
