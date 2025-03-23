import { fail } from "@sveltejs/kit";

export async function load({ fetch }) {
  let resBlogs = fetch("/api/blogs");
  let resProjects = fetch("/api/projects");
  let res = await Promise.all([resBlogs, resProjects]);
  if (res.every((p) => p.ok)) {
    return {
      blog_infos: (await res[0].json()) as BlogInfo[],
      project_infos: (await res[1].json()) as ProjectInfo[],
    };
  } else {
    fail(404, { message: "Tags not found" });
  }
}
