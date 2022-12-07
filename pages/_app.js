/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <nav className="border-b p-6 bg-purple-500">
        <p className="text-6xl font-bold">PeerTube</p>
        <div className="fflex mt-4 font-bold font-sans ml-8 text-left">
          <Link href="/">
            <a className="mr-4 text-yellow-300 text-2xl">
              Home
            </a>
          </Link>
          <Link href="/stream">
            <a className="mr-6 text-yellow-300 text-2xl">
               Stream Video
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-6 text-yellow-300 text-2xl">
               Create Video
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-yellow-300 text-2xl">
              My Videos
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-yellow-300 text-2xl">
              Dashboard
            </a>
          </Link>




        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp