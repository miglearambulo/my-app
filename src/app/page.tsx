import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-8 flex flex-col min-h-screen">
        <header className="mb-8">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Migle Arambulo
            </h1>

            <nav className="flex flex-row items-center gap-4 sm:gap-6">
              <div>
                <a
                  className="inline-flex items-center justify-center font-medium text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                  href="https://docs.google.com/presentation/d/1Ww185rw_FaBdVdC410-aKdALeOdAaIYYEUbxkYjwA-s/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CoinStructive Redesign
                </a>
              </div>

              <div>
                <a
                  className="inline-flex items-center justify-center font-medium text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chef
                </a>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1" />

        <footer className="mt-auto pt-8 sm:pt-12 flex gap-6 sm:gap-8 flex-wrap items-center justify-center text-sm text-neutral-600 dark:text-neutral-400">
          <a
            className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
            href="https://www.linkedin.com/in/miglearambulo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} priority />
            LinkedIn
          </a>

          <a
            className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} priority />
            Examples
          </a>

          <a
            className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} priority />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
  );
}