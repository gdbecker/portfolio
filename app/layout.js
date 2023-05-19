import './styles/globals.css'
import Navigation from './components/Navigation';
import {Providers} from './providers';

export const metadata = {
  title: "Garrett Becker - Developer",
  description: "Garrett Becker's portfolio!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css" ></link>

        <Providers>
          <Navigation />
          {children}
        </Providers>

        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"></script>
      </body>
    </html>
  )
}
