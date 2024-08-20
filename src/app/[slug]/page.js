import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Header from '../components/Header';  // Sesuaikan jalur impor
import Footer from '../components/Footer';  // Sesuaikan jalur impor

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/app/posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace('.md', '');
    return { slug };
  });
}

async function getPostData(slug) {
  const postsDirectory = path.join(process.cwd(), 'src/app/posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  return { data, content };
}

export default async function BlogDetail({ params }) {
  const { slug } = params;
  const { data, content } = await getPostData(slug);

  return (
    <>
      <Header />
      <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-24">
        <article className="bg-white dark:bg-gray-900 p-6 sm:p-8 md:p-12 rounded-lg shadow-lg max-w-3xl mx-auto lg:max-w-4xl">
          <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 sm:pb-6 md:pb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 sm:mb-4 md:mb-6">
              {data.title}
            </h1>
            <div className="text-xs sm:text-sm md:text-base">
              <p className="font-medium text-gray-700 dark:text-gray-300">By {data.author}</p>
              <p className="text-gray-500 dark:text-gray-400">{data.date}</p>
            </div>
          </header>
          <div className="prose prose-sm sm:prose lg:prose-lg prose-indigo dark:prose-dark max-w-none w-full">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {content}
            </ReactMarkdown>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}
