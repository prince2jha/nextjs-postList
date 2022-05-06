import React from 'react'
import Link from "next/link";

const index = ({posts}) => {
  return (
    <div>
      <h1>
        List of posts
      </h1>
      <div>
        {posts.map((post, index) =>{
          return (
            <Link href={`/${post.id}`} key={index} passHref>
              <div key={index}>
                <h2
                  style={{
                    border: "1px solid #555",
                    padding: ".5rem 1rem",
                    cursor: "pointer",
                    width: "90%",
                    margin: "0 auto"
                  }}
                >
                  {post.id}. {post.title}
                </h2>
              </div>
            </Link>
          );
        } )}
      </div>
    </div>
  )
}
export async function getStaticProps(context) {
  // const res = await fetch(
  //   "https://jsonplaceholder.typicode.com/posts?_limit=10"
  // ); // fetch data from API
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ); // fetch data from API
  const posts = await res.json(); // parse data to JSON
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
export default index