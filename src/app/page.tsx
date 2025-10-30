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

            <nav className="relative group">
              <button
                className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                aria-haspopup="true"
              >
                Projects
              </button>
              <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-2 bg-white dark:bg-neutral-900 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-800">
                  <a
                    href="https://docs.google.com/presentation/d/1Ww185rw_FaBdVdC410-aKdALeOdAaIYYEUbxkYjwA-s/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    CoinStructive Redesign
                  </a>
                  <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    Chef
                  </a>
                </div>
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