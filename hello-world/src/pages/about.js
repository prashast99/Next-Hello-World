import Head from 'next/head'

function About() {
  return (
    <>
      <Head>
        { <title>About</title> }
        <meta name='description' content='First Next App' />
      </Head>
      <h1 className='content'>About</h1>
    </>
  )
}

export default About

About.getLayout = page => (
  <>
    {page}
  </>
)