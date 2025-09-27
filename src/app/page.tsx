import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center sm:text-left">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            JohnOlven
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Next.js Template
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Plantilla base profesional para proyectos Next.js
          </p>
        </div>

        <div className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={25}
            priority
          />
          <span className="text-2xl">+</span>
          <div className="text-center">
            <div className="font-bold text-lg">TypeScript</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tailwind CSS</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2 text-green-600 dark:text-green-400">✅ Incluido</h3>
            <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
              <li>• TypeScript configurado</li>
              <li>• Tailwind CSS</li>
              <li>• ESLint</li>
              <li>• Variables de entorno</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">🚀 Listo para</h3>
            <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
              <li>• Desarrollo rápido</li>
              <li>• Deploy en Vercel</li>
              <li>• Escalabilidad</li>
              <li>• Mejores prácticas</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Comenzar desarrollo
          </button>
          <a
            className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Plantilla creada por <span className="font-semibold text-blue-600 dark:text-blue-400">JohnOlven</span></p>
          <p className="mt-1">Next.js {new Date().getFullYear()} • Versión 1.0.0</p>
        </div>
      </footer>
    </div>
  );
}
