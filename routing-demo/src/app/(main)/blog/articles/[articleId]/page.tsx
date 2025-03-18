"use client";
import { use } from 'react';

import Link from 'next/link';

export default function NewsArticle({ // removed async when converting to use client
  params, 
  searchParams,
 }: {
    params: Promise<{ articleId: string }>, 
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
  }) {

  //const { articleId } = await params;
  //const { lang="en" } = await searchParams;

  const { articleId } = use(params);
  const { lang="en" } = use(searchParams);

  return (
    <div className='p-4'>
      <Link href="../articles">Back to Articles</Link>
      <h1>News Article {articleId}</h1>
      <p>Yor are reading this article in {lang}.</p>
      <div>
        <Link className='mr-2' href={`${articleId}?lang=en`}>English</Link>
        <Link className='mr-2' href={`${articleId}?lang=fr`}>French</Link>
        <Link className='mr-2' href={`${articleId}?lang=es`}>Spanish</Link>
      </div>
    </div>
  );
}