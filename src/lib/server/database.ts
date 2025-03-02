let blog_infos: BlogInfo[] = [
  {
    title: "Yet another article",
    description: "This is a description of the article",
    tags: ["Frontend", "Svelte", "Typescript", "Programming"],
    id: "other-article",
  },
  {
    title: "Rust article",
    description: "This is a description of the article",
    tags: ["Rust", "Backend", "Programmming"],
    id: "rust-article",
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
  return tag
    ? blog_infos.filter((blog) => blog.tags.includes(tag))
    : blog_infos;
}

export function getBlogInfo(id: string): BlogInfo | undefined {
  return blog_infos.find((blog) => blog.id === id);
}
