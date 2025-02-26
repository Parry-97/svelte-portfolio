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

export function getProjectInfos(): ProjectInfo[] {
  return project_infos;
}

export function getBlogInfos(): BlogInfo[] {
  return blog_infos;
}

export function getBlogInfo(id: string): BlogInfo | undefined {
  return blog_infos.find((blog) => blog.id === id);
}
