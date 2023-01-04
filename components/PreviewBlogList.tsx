"use client";

import { usePreview } from "../lib/sanity.preview";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const posts: any[] = usePreview(null, query);
  console.log("LOADING posts...", posts);
  return (
    <div>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
}
