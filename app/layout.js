import './styles/globals.css'
import Navigation from './components/Navigation'

export const metadata = {
  title: 'GB Portfolio',
  description: "Garrett Becker's portfolio!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navigation />
      
        {children}

        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      </body>
    </html>
  )
}
