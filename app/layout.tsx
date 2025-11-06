import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'INSIDERS × LINER — Landing',
  description: 'Segmented links with simple analytics dashboard'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="app-container page-root">
          {children}
        </div>
      </body>
    </html>
  );
}


