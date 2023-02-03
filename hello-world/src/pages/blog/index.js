import Link from "next/link"

function Blog(){
  return(
    <div>
      <h1> This is the Blog Page</h1>

      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/products'>Products</Link>
    </div>
  )
}

export default Blog