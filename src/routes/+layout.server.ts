import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
  let resBlogs = fetch("/api/blogs");
  let resProjects = fetch("/api/projects");
  let res = await Promise.all([resBlogs, resProjects]);
  if (res.every((p) => p.ok)) {
    const blogs_infos = (await res[0].json()) as Blog[];
    const projectInfos = (await res[1].json()) as ProjectInfo[];
    return {
      blog_infos: blogs_infos,
      project_infos: projectInfos,
    };
  } else {
    error(404, { message: "Tags not found" });
  }
}
