import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { server } from '../config'
import Link from 'next/link'
export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.header}>Blog Posts</h1>
      {data && (
        <div className={styles.container}>
          {data.slice(0, 15).map((post) => (
            <div id={post.id} className={styles.post}>
              <Link
                id={post.id + 'a'}
                href="/posts/[id]"
                as={`/posts/${post.id}`}
              >
                <a>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export async function getStaticProps(ctx) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data,
    },
  }
}
