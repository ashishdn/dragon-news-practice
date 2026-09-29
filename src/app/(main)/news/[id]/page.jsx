import { getNewsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function NewsDetailsPage({ params }) {
  const { id } = await params;
  const news = await getNewsById(id);

  if (!news) notFound();

  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-8 sm:py-16">
      <Link
        href="/"
        className="inline-flex text-sm font-semibold text-gray-600 transition-colors hover:text-red-700"
      >
        Back to headlines
      </Link>

      <header className="mx-auto max-w-4xl border-b border-gray-200 pb-8 pt-8 sm:pb-10 sm:pt-12">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
          The Daily Brief
        </p>
        <h1 className="text-3xl font-extrabold leading-tight text-gray-950 sm:text-5xl sm:leading-[1.12]">
          {news.title}
        </h1>

        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-600">
          <span className="font-semibold text-gray-900">
            {news.author?.name ?? 'News Desk'}
          </span>
          {(news.author?.publish_date ?? news.author?.published_date) && (
            <>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-red-700" />
              <time className="tabular-nums">
                {news.author.publish_date ?? news.author.published_date}
              </time>
            </>
          )}
        </div>
      </header>

      {news.thumbnail_url && (
        <figure className="relative mx-auto mt-8 aspect-[16/9] max-w-4xl overflow-hidden bg-gray-100 sm:mt-10">
          <Image
            src={news.thumbnail_url}
            alt={news.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </figure>
      )}

      <div className="mx-auto max-w-3xl py-8 sm:py-12">
        <div className="mb-8 h-1 w-14 bg-red-700" />
        <p className="whitespace-pre-line text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
          {news.details}
        </p>
      </div>
    </article>
  );
}
