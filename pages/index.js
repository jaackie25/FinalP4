
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/client'

export default function Home() {
  const[session, loading] = useSession()
  return (
    <div className="container">
       <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
      </>}
      {session && <>
      Signed in as {session.user.name} <br/>
      <Link href="/products">
        <a>Shop our whole collection</a>
      </Link>
      <button onClick={() => signOut()}>Sign out</button>
      </>}

      {/* <Link href="/products">
        <a>Shop our whole collection</a>
      </Link> */}
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const { client } = await connectToDatabase()

//   const isConnected = await client.isConnected()

//   return {
//     props: { isConnected },
//   }
// }
