// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()
  res.send(posts)
}
