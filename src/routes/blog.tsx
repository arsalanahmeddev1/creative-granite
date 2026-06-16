import { createFileRoute } from "@tanstack/react-router";
import { BlogCard, SectionLabel, SplitTextReveal } from "@/components/luxury-site";
import { blogPosts } from "@/lib/site-data";
export const Route = createFileRoute("/blog")({ head: () => ({ meta: [{ title: "Blog | Creative Granite & Design" }, { name: "description", content: "Stone care, design inspiration, and countertop trends from Creative Granite & Design." }, { property: "og:title", content: "Creative Granite Blog" }, { property: "og:description", content: "Latest news, countertop trends, and natural stone care guidance." }] }), component: BlogPage });
function BlogPage() { return <section className="px-5 pb-24 pt-40 md:px-10"><div className="mx-auto max-w-7xl"><SectionLabel>Latest News</SectionLabel><SplitTextReveal text="Follow The Latest News" className="text-7xl md:text-9xl" /><div className="mt-12 grid gap-5 md:grid-cols-3">{blogPosts.map((post) => <BlogCard key={post.title} post={post} />)}</div></div></section>; }
