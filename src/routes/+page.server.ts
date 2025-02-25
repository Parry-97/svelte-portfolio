let project_infos: ProjectInfo[] = [
  {
    title: "Yet another article",
    description: "This is a description of the article",
    tags: ["Frontend", "Svelte", "Typescript"],
  },
  {
    title: "Rust article",
    description: "This is a description of the article",
    tags: ["Rust", "Backend"],
  },
];
export function load() {
  return {
    infos: project_infos,
  };
}
