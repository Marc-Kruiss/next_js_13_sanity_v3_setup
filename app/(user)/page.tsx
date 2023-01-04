import { previewData } from "next/headers";
import PreviewBlogList from "../../components/PreviewBlogList";
import PreviewSuspense from "../../components/PreviewSuspense";
import { client } from "../../lib/sanity.client";
import { fetchPosts, query } from "../../utils/fetchPosts";

export default async function Homepage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading preview...
            </p>
          </div>
        }
      >
        <h1>Preview Mode</h1>
        {/* Preview Data */}
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  {
    /* Production Data */
  }
  const posts: any[] = await fetchPosts();
  return (
    <div>
      <h1>Not in Preview Mode</h1>
      {posts.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
}
