import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Link from 'next/link';
import '../styles/globals.css';

export default async function CreateGameLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        <footer className="mb-12 w-full text-center">
          <Link href="/en" className="mr-2 underline">
            English
          </Link>
          |
          <Link href="/es" className="ml-2 underline">
            Español
          </Link>
        </footer>
      </body>
    </html>
  );
}