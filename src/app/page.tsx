import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 gap-16 flex flex-col justify-between">
      <header className="w-full">
        <div className="max-w-2xl w-full mx-auto grid grid-cols-3 items-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-left col-start-1">Migle Arambulo</h1>

            <nav className="col-start-2 flex gap-8 items-center justify-center">
              <a
                className="inline-flex items-center font-medium text-[var(--fg)] text-sm sm:text-base px-6 py-2.5 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
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

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/miglearambulo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          LinkedIn
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
