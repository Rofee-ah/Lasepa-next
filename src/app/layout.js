import { Rubik } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '@/component/Header';
import Footer from '@/component/Footer';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Lasera Website',
  description: 'Developed by Rofiat',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        {/* <Header /> */}
        <Toaster/>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
