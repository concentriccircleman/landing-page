import Link from "next/link";
import {
  BLOG_FILTER_CATEGORIES,
  getAllPosts,
  getBlogCategorySlug,
  isBlogCategory,
} from "@/lib/blog";

interface BlogIndexProps {
  category?: string;
}

const formatBlogDate = (value: string) => {
  const parsedDate = new Date(value);
  if (Number.isNaN(parsedDate.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
};

const BlogIndex = async ({ category }: BlogIndexProps) => {
  const posts = await getAllPosts();
  const selectedCategory = isBlogCategory(category) ? category : undefined;
  const filteredPosts = selectedCategory
    ? posts.filter((p) => p.metadata.category === selectedCategory)
    : posts;

  return (
    <div className="w-full px-4">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#1a1a1f] mb-10">
        Blog
        <sup className="ml-1 align-super text-lg font-medium leading-none text-[#a1a1aa]">
          {filteredPosts.length}
        </sup>
      </h1>

      <div className="mt-6 space-y-10 md:relative">
        <nav aria-label="Blog filters" className="md:absolute md:left-0 md:top-0">
          <ul className="space-y-2">
            {BLOG_FILTER_CATEGORIES.map((c) => (
              <li key={c}>
                <Link
                  href={
                    c === "All" || !isBlogCategory(c)
                      ? "/blog"
                      : `/blog/category/${getBlogCategorySlug(c)}`
                  }
                  aria-current={selectedCategory === c ? "page" : undefined}
                  className={
                    selectedCategory === c
                      ? "block text-[13px] font-semibold text-[#2595ee]"
                      : "block text-[13px] font-semibold text-[#a1a1aa] hover:text-[#1a1a1f] duration-200"
                  }
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-w-3xl mx-auto">
          <ul className="divide-y divide-[#e8e8ec]">
            {filteredPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block px-4 py-5 hover:bg-[#f0f0f2] duration-200 md:-mx-4 transition-colors"
                >
                  <div className="text-[16px] font-semibold text-[#1a1a1f]">
                    {p.metadata.title}
                  </div>
                  {p.metadata.description ? (
                    <p className="mt-1.5 text-[14px] text-[#52525b] leading-relaxed">
                      {p.metadata.description}
                    </p>
                  ) : null}
                  {p.metadata.category || p.metadata.date ? (
                    <div className="mt-2 text-[13px] text-[#a1a1aa]">
                      {p.metadata.category ? (
                        <span>{p.metadata.category}</span>
                      ) : null}
                      {p.metadata.category && p.metadata.date ? (
                        <span aria-hidden="true"> · </span>
                      ) : null}
                      {p.metadata.date ? (
                        <span>{formatBlogDate(p.metadata.date)}</span>
                      ) : null}
                    </div>
                  ) : null}
                </Link>
              </li>
            ))}

            {selectedCategory && filteredPosts.length === 0 ? (
              <li className="py-5">
                <p className="text-[14px] text-[#a1a1aa]">
                  No posts in {selectedCategory}.
                </p>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
