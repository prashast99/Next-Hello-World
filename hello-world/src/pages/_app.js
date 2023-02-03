import '../styles/globals.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../styles/layout.css'
import Navbar from '../../components/Navbar'
import '../../components/navbar.css'
import { SessionProvider } from "next-auth/react"; 

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<Navbar />
			<Component {...pageProps} />
      <Footer />
		</SessionProvider>
	);
}

export default MyApp;