import './globals.css'
import NavigationBar from "../components/ui/NavigationBar";

export default function RootLayout({children}: { children: React.ReactNode }) {
  /* Children here is the content of the page
   and is placed where it should be rendered */
  return (
    <html lang="en">
    <head/>
    <body>
      <header>
        <NavigationBar/>
      </header>
      <main>
        {children}
      </main>
    </body>
    </html>
  )
}
