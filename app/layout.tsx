import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'INSIDERS × LINER — Academic Research Excellence',
  description: 'Elevate your research with AI-powered precision. Join 11 million scholars worldwide.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}


