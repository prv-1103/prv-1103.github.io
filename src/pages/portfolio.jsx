'use client'

import { useState } from 'react'
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <header className="fixed w-full bg-white dark:bg-gray-900 z-10 shadow-md">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Pranav Sawale</h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </nav>
        </header>

        <main className="container mx-auto px-6 pt-20">
          <section className="py-20 text-center">
            <h2 className="text-4xl font-bold mb-4">Hello, I'm Pranav Sawale</h2>
            <p className="text-xl mb-8">A passionate Software Developer</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Get in touch
            </button>
          </section>

          <section className="py-20">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg">
              I'm a software developer with a passion for creating efficient and scalable solutions. 
              With a strong foundation in various programming languages and frameworks, I enjoy tackling 
              complex problems and turning ideas into reality through code.
            </p>
          </section>

          <section className="py-20">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'SQL', 'Git', 'AWS'].map((skill) => (
                <div key={skill} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                  <p className="text-lg font-semibold">{skill}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'E-commerce Platform',
                  description: 'A full-stack e-commerce solution with React and Node.js',
                  link: '#'
                },
                {
                  title: 'Task Management App',
                  description: 'A React Native mobile app for managing daily tasks',
                  link: '#'
                },
                {
                  title: 'Data Visualization Dashboard',
                  description: 'An interactive dashboard using D3.js and Vue.js',
                  link: '#'
                },
                {
                  title: 'Machine Learning Model',
                  description: 'A predictive model for stock prices using Python and TensorFlow',
                  link: '#'
                }
              ].map((project, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/prv-1103"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/pranavssawale"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:pranav.sawale@example.com"
                aria-label="Email"
                className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </section>
        </main>

        <footer className="bg-gray-200 dark:bg-gray-800 py-6 text-center">
          <p>&copy; 2023 Pranav Sawale. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}