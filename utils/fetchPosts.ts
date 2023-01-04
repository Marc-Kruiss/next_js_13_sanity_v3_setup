import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

export const query = groq`
*[_type=="post"]{
    _id,
      title,
      description,
      mainImage,
      publishedAt,
      slug,
      author->{
        name,
        image
      },
      categories[]->{
        _id,
        description,
        title
      }
  } | order(_createdAt asc)
`;

export const fetchPosts = async () => {
  const posts = await client.fetch(query);
  return posts;
};

export const fetchPost = async (querySlug: string) => {
  const query = groq`
    *[_type=="post" && slug.current == "${querySlug}"][0]{
    _id,
      title,
      description,
      mainImage,
      publishedAt,
      slug,
      author->{
        name,
        image
      },
      categories[]->{
        _id,
        description,
        title
      },
      body
  }
`;

  const post = await client.fetch(query);
  return post;
};
