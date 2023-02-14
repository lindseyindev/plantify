// Global app layout
import "./globals.css";
import Header from "./Header.js"

export default function RootLayout({ children }) {

  // const [posts, setPosts] = useState([])
  // const [post, setPost] = useState({})



  // useEffect(() => {

  // })
  return (
    <html lang="en">
      <head>
        <title>Plant Journal</title>
        <meta
          name="description"
          content="Stop the guesswork in caring for your plants and start tracking with this app."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer>
          TODO: Footer
        </footer>
      </body>
    </html>
  );
}
