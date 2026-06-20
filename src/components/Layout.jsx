import Header from './Header'
import Footer from './Footer'
import ChatWidget from './ChatWidget'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </>
  )
}
