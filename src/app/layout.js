import { Rubik } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Lasera Website',
  description: 'Developed by Rofiat',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
