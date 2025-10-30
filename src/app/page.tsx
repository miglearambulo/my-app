import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-between bg-[var(--bg)]">
      <header className="w-full mb-8">
        <div className="max-w-3xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--fg)]">Migle Arambulo</h1>

            <nav className="flex gap-4 sm:gap-6 items-center justify-center">
              <a
                className="inline-flex items-center justify-center font-medium text-[var(--fg)] text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.1)] dark:hover:bg-[rgba(255,255,255,0.1)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                href="https://docs.google.com/presentation/d/1Ww185rw_FaBdVdC410-aKdALeOdAaIYYEUbxkYjwA-s/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                CoinStructive Redesign
              </a>

              <a
                className="inline-flex items-center font-medium text-[var(--fg)] text-sm sm:text-base px-6 py-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chef
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1" />

      <footer className="mt-auto pt-8 sm:pt-12 flex gap-6 sm:gap-8 flex-wrap items-center justify-center text-sm text-[var(--fg)] opacity-70">
        <a
          className="flex items-center gap-2 hover:opacity-100 transition-opacity"
          href="https://www.linkedin.com/in/miglearambulo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} priority />
          LinkedIn
        </a>

        <a
          className="flex items-center gap-2 hover:opacity-100 transition-opacity"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} priority />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
