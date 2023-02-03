import Link from "next/link"
import { useRouter } from "next/router"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSession} from 'next-auth/react'
import styles from '../styles/About.module.css'


function Home(){
  const router = useRouter()

  const handleClick = () => {
    console.log("Placing Order")
    router.push('/products')
  }

  const session = useSession()
  console.log('Session',session)

  return(
    <div>
           

      <h1 className={styles.h1}> This is the Home Page</h1>

      <Link href='/blog' className="footerlinks">Blog</Link><br />
      <Link href='/about' className="footerlinks">About</Link><br />
      <Link href='/profile' className="footerlinks">Profile</Link><br />
      <Link href='/posts'>Posts</Link><br />
      <Link href='/news'>News</Link><br />
      
    <button onClick={handleClick}> Place Order </button>
    </div>
  )
}

export default Home