import { PostMetadata } from "@/types/PostMetadata";
import Link from "next/link";
import React from "react";

const SingleBlogCard = ({ post }: { post: PostMetadata }) => {
  return (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-blue-800">{post.title}</h2>
      </Link>
      <span>{post.date}</span>
    </div>
  );
};

export default SingleBlogCard;
