import React, { useRef } from 'react';

const App: React.FC = () => {
  const contactFormRef = useRef<HTMLFormElement>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
    if (email && message) {
      alert('Thank you for your message! I will get back to you soon.');
      if (contactFormRef.current) contactFormRef.current.reset();
    } else {
      alert('Please fill in all fields.');
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-teal-500 p-4 fixed w-full top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Abdul Basit Attique</div>
          <ul className="flex space-x-6">
            {['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact', 'Recommendations'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white font-semibold hover:text-teal-300 focus:outline-none"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-12 bg-gray-800 text-center">
        <div className="container mx-auto">
          <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4"></div> {/* Image Placeholder */}
          <h1 className="text-4xl font-bold text-teal-500">Abdul Basit Attique</h1>
          <p className="mt-4 max-w-2xl mx-auto">
            As a Computer Science student, I'm passionate about technology and have a solid foundation in programming, data structures, and software engineering. With hands-on experience in Python, Java, HTML5, CSS3, and C++, I've worked on projects in image processing, data manipulation, and web development. Let's connect and explore new possibilities!
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="container mx-auto py-12 space-y-12">
        {/* About */}
        <section id="about" className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-500 border-b-2 border-teal-500 pb-2">About</h2>
          <p className="mt-4">
            I am a dedicated Computer Science student with a strong passion for technology. My expertise spans programming languages like Python and Java, and I enjoy tackling challenges in web development and data manipulation. I thrive in collaborative environments and am eager to grow in the tech industry.
          </p>
        </section>

        {/* Education */}
        <section id="education" className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-500 border-b-2 border-teal-500 pb-2">Education</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Bachelor's in Computer Science</h3>
            <p className="mt-2">University of Tech Excellence, Lahore (2021 - 2025)</p>
            <ul className="list-disc ml-6 mt-2">
              <li>CGPA: 3.8/4.0</li>
              <li>Relevant Coursework: Algorithms, Web Development</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-500 border-b-2 border-teal-500 pb-2">Experience</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Software Developer at TechNova (2023 - 2024)</h3>
            <ul className="list-disc ml-6 mt-2">
              <li>Developed web apps with ReactJS, boosting engagement by 30%.</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-500 border-b-2 border-teal-500 pb-2">Skills</h2>
          <ul className="list-disc ml-6 mt-4">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Python</li>
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-500 border-b-2 border-teal-500 pb-2">Projects</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">E-Commerce Platform</h3>
            <p className="mt-2">A ReactJS-based site with product listings and payment integration.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-500 border-b-2 border-teal-500 pb-2">Contact</h2>
          <div className="mt-4 flex flex-col space-y-4">
            <div className="flex space-x-4">
              <a href="resume.pdf" download className="text-teal-400 hover:text-teal-300">Resume</a>
              <a href="https://linkedin.com/in/abdulbasitattique" className="text-teal-400 hover:text-teal-300">LinkedIn</a>
              <a href="https://github.com/abdulbasitattique" className="text-teal-400 hover:text-teal-300">GitHub</a>
            </div>
            <form id="contact-form" ref={contactFormRef} onSubmit={handleContactSubmit} className="space-y-2">
              <input type="email" id="email" placeholder="Your Email" className="p-2 bg-gray-700 rounded w-full" required />
              <textarea id="message" placeholder="Your Message" className="p-2 bg-gray-700 rounded w-full" required></textarea>
              <button type="submit" className="p-2 bg-teal-500 text-white rounded hover:bg-teal-600">Send</button>
            </form>
          </div>
        </section>

        {/* Recommendations */}
        <section id="recommendations" className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-teal-500 border-b-2 border-teal-500 pb-2">Recommendations</h2>
          <p className="mt-4">"Abdul Basit is a talented developer with excellent problem-solving skills." - Ali Khan</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-teal-500 p-4 text-center">
        <p>© 2025 Abdul Basit Attique | Email: abdul.basit@example.com | Phone: +92 321-4567890</p>
      </footer>
    </div>
  );
};

export default App;