import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'src/app/posts');

async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
    };
  });

  // Mengurutkan postingan berdasarkan tanggal terbaru
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-20 mt-16 space-y-12 mb-20 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date} - By {post.author}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.excerpt}</p>
              <Link href={`/${post.slug}`} className="text-blue-600 dark:text-blue-300 font-medium hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 mt-4 block">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
