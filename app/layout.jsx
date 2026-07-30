import './globals.css';

export const metadata = {
  title: 'Эльман Исламов — репетитор для студентов-медиков',
  description: 'Онлайн-занятия по медицинским дисциплинам: системное понимание, домашние задания с проверкой, конспекты, записи и сопровождение до экзамена.'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
