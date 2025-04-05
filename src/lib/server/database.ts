let project_infos: ProjectInfo[] = [
  {
    title: "Rusty Leetcode",
    description:
      "Collection with solutions to common Leetcode style problems in Rust. Follows the roadmap from NeetCode.io",
    link: "https://github.com/Parry-97/rusty-neetcode",
  },
  {
    title: "Simpla",
    description:
      "Project for a compiler written in C for a simple procedural, statically typed language language",
    link: "https://github.com/Parry-97/SimpLA",
  },
  {
    title: "Fintech in Rust",
    description:
      "Learning backend project developed in Rust for Manning Live Projects",
    link: "https://github.com/Parry-97/fintech-rust",
  },
];

let tags = [
  "Frontend",
  "Backend",
  "Rust",
  "Typescript",
  "Machine Learning",
  "System Design",
  "Cloud Computing",
  "SvelteKit",
  "Azure",
  "Terraform",
  "Bicep",
  "DevOps",
];

export function getTags(): string[] {
  return tags;
}

export function getProjectInfos(): ProjectInfo[] {
  return project_infos;
}

export async function getBlogInfos(tag: string | null): Promise<Blog[]> {
  const blogs = await getBlogs();
  return blogs;
}

async function getBlogs() {
  let blogs: Blog[] = [];

  const paths = import.meta.glob("/src/blogs/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const id = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && id) {
      const metadata = file.metadata as Omit<Blog, "id">;
      const blog = { ...metadata, id } satisfies Blog;
      blogs.push(blog);
    }
  }

  blogs = blogs.sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime(),
  );

  return blogs;
}

export async function getBlog(
  id: string,
  content: boolean = false,
): Promise<Blog | BlogInfo | undefined> {
  let blogs = await getBlogs();
  const blog = blogs.find((blog) => blog.id === id);
  if (!blog) return undefined;
  return content
    ? blog
    : {
        title: blog.title,
        tags: blog.tags,
        description: blog.description,
        id: blog.id,
        date: blog.date,
      };
}
