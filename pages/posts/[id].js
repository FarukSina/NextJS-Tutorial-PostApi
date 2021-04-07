import { useRouter } from 'next/dist/client/router'
import styles from '../../styles/Home.module.css'
import Header from '../header'
export default function Post({ post }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div className={styles.header}>
      <Header />
      <div id={post.id + 'asd'} className={styles.wrapper}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

// export const getServerSideProps = async (ctx) => {
//   const postId = ctx.params.post
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`,
//   )
//   const post = await res.json()
//   if (!post) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: { post },
//   }
// }

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export const getStaticProps = async (ctx) => {
  const postId = ctx.params.id
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  )
  const post = await res.json()
  console.log(post)
  if (!post || isEmpty(post)) {
    return {
      notFound: true,
    }
  }
  return {
    props: { post },
  }
}

export const getStaticPaths = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const posts = await res.json()
  // Get the paths we want to pre-render based on posts
  const paths = posts.slice(0, 25).map((post) => ({
    params: { id: String(post.id) },
  }))
  console.log(paths)
  return {
    paths,
    fallback: true,
  }
}
