import { fail } from "@sveltejs/kit";

export async function load({ params, fetch }) {
  const res = await fetch(`/api/blogs?tag=${params.id}`);

  if (res.ok) {
    const blogs = await res.json();
    return { blogs: blogs };
  } else {
    return fail(404, { message: "Tag related blogs not found" });
  }
}
