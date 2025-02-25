let blog_infos: BlogInfo[] = [
  {
    title: "Yet another article",
    description: "This is a description of the article",
    tags: ["Frontend", "Svelte", "Typescript", "Programming"],
  },
  {
    title: "Rust article",
    description: "This is a description of the article",
    tags: ["Rust", "Backend", "Programmming"],
  },
];

let project_infos: ProjectInfo[] = [
  // {
  //   title: "Rusty Leetcode",
  //   description: "This is a description of the article",
  //   link: "/",
  // },
  //
  {
    title: "Simpla",
    description: "This is a description of the article",
    link: "/",
  },
  {
    title: "ClusterRecommend",
    description: "This is a description of the article",
    link: "/",
  },
];
export function load() {
  return {
    blog_infos: blog_infos,
    project_infos: project_infos,
  };
}
