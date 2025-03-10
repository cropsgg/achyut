import Head from 'next/head';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta = ({ 
  title = 'Achyut Mukund - Portfolio',
  description = 'Personal portfolio website of Achyut Mukund, a student developer showcasing projects and skills.',
  keywords = 'portfolio, web development, react, next.js, developer'
}: MetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta; 