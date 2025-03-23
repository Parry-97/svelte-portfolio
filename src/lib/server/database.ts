let blogs: Blog[] = [
  {
    title: "Yet another article",
    description: "This is a description of the article",
    tags: ["Frontend", "Svelte", "Typescript", "Programming"],
    id: "other-article",
    content: "content",
    date: new Date(Date.now()),
  },
  {
    title: "Rust article",
    description: "This is a description of the article",
    tags: ["Rust", "Backend", "Programmming"],
    id: "rust-article",
    content: "other content",
    date: new Date(Date.now()),
  },
];

let project_infos: ProjectInfo[] = [
  {
    title: "Rusty Leetcode",
    description: "This is a description of the article",
    link: "https://github.com/Parry-97/rusty-neetcode",
  },
  {
    title: "Simpla",
    description: "This is a description of the article",
    link: "https://github.com/Parry-97/SimpLA",
  },
  {
    title: "Fintech in Rust",
    description: "This is a description of the article",
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
  "Microsoft Azure",
  "IaC",
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

export function getBlogInfos(tag: string | null): BlogInfo[] {
  return tag ? blogs.filter((blog) => blog.tags.includes(tag)) : blogs;
}

export function getBlog(
  id: string,
  content: boolean = false,
): Blog | BlogInfo | undefined {
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
