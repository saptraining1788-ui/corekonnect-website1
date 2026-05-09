export const metadata = { title: 'CoreKonnect', description: 'AI Services' };
import './globals.css';

export default function RootLayout({ children }) {
 return (
   <html>
     <body>{children}</body>
   </html>
 );
}
