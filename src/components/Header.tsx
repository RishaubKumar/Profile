import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Header() {
  return (
    <header className="w-full py-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Rishaub Kumar</h1>
        <div className="flex items-center gap-4 text-secondary text-sm mt-1">
          <span className="flex items-center gap-1"><MdPhone className="inline" /> +91-9058286673</span>
          <span className="flex items-center gap-1"><MdEmail className="inline" /> rishaubkumar534@gmail.com</span>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/rishaubkumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary text-xl"><FaGithub /></a>
          <a href="https://www.hackerrank.com/rishaubkumar534" target="_blank" rel="noopener noreferrer" aria-label="HackerRank" className="hover:text-primary text-xl"><FaHackerrank /></a>
          <a href="https://auth.geeksforgeeks.org/user/rishaubkumar534" target="_blank" rel="noopener noreferrer" aria-label="GFG" className="hover:text-primary text-xl"><SiGeeksforgeeks /></a>
          <a href="https://www.linkedin.com/in/rishaubkumar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary text-xl"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
} 