import Image from "next/image";
import * as motion from "motion/react-client";
import Typewriter from "./Typewriter.jsx";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <motion.img
          className="dark:invert max-w-full h-auto"
          src="/crane.png"
          alt="Stock crane logo"
          width={500}
          height={48}
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade to fully visible
          transition={{ duration: 10.5 }} // Smooth fade-in over 1.5s
        />
        <Typewriter />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/chrislcrain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/github-mark-white.png"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            GitHub
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.linkedin.com/in/christopher-crain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark"
              src="/LI-In-Bug.png"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            LinkedIn
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.google.com/document/d/1qRVgWSTUI2mF8hdK82br4gu1402kPgeZ/edit?usp=sharing&ouid=116214417564697981849&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Resume
        </a>
      </footer>
    </div>
  );
}
