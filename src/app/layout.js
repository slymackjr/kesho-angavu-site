import Head from 'next/head';
import './globals.css';


export const metadata = {
  title: 'Kesho Angavu – Empowering Tanzanian Youth',
  description:
    'Kesho Angavu is a youth-led empowerment initiative by TUCASA MUHAS focused on equipping out-of-school Tanzanian youth with life skills, health education, and sustainable economic opportunities.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Kesho Angavu – Brighter Futures for Tanzanian Youth" />
        <meta
          property="og:description"
          content="Join Kesho Angavu in transforming the lives of youth through entrepreneurship, mentorship, digital literacy, and health education."
        />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://keshoangavu.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kesho Angavu – Brighter Futures for Tanzanian Youth" />
        <meta
          name="twitter:description"
          content="Empowering out-of-school youth in Tanzania through skills, values, and community support."
        />
        <meta name="twitter:image" content="/assets/twitter-card.jpg" />
        <meta name="author" content="TUCASA MUHAS – Kesho Angavu Initiative" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>{children}</body>
    </html>
  );
}