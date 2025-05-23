import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
 
export default async function HomePage() {
  const t = await getTranslations('Home');
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-xl text-center mb-8">{t('description')}</p>

      <Link
        href="/play"
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
      >
        {t('playButton')}
      </Link>

      <footer className="mt-12">
        <Link href="/en" className="mr-2 underline">
          English
        </Link>
        |
        <Link href="/es" className="ml-2 underline">
          Español
        </Link>
      </footer>
    </main>
  )
}