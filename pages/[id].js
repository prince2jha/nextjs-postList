import React from 'react'

const PostDetails = ({post}) => {
  return (
    <div>
        <h1>{post.id} {post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ); // fetch data from API
  const posts = await res.json(); // parse data to JSON
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  ); // fetch data from API
  const post = await res.json(); // parse data to JSON
  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
}
export default PostDetails