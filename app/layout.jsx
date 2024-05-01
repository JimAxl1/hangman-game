import { Providers } from './redux/providers';
import './styles.scss'

export const metadata = {
  title: "Hangman game",
  description: "Play hangman game whit movies, Tv shows, countries, animals and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>      
  );
}