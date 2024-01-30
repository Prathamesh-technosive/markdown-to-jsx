import { getPostMetadata } from "@/lib/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import React from "react";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const fileContent = fs.readFileSync(file, "utf8");
  const matterResult = matter(fileContent);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const page = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <div className="mx-auto max-w-3xl">
        <span>{post.data.date}</span>
        <article className="prose lg:prose-lg">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </>
  );
};

export default page;
