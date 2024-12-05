import { motion } from "framer-motion";
import MatrixBackground from "./MatrixBackground";
import { ReactNode } from "react";

interface CodeSnippetProps {
  children: ReactNode;
  className?: string;
}

const CodeSnippet = ({ children, className }: CodeSnippetProps) => {
    return (
      <motion.div
        className={`relative bg-[#1E1E3F] rounded-lg shadow-xl p-4 overflow-hidden ${className}`}
      >
        <MatrixBackground />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <pre className="text-xs md:text-sm text-gray-300">
            <code>{children}</code>
          </pre>
        </div>
      </motion.div>
    );
  };

export default CodeSnippet;