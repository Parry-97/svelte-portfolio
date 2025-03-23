// export async function load({ params, fetch }) {
//   let { id } = params;
//   let response = await fetch(`/api/blogs/${id}`);
//   if (response.ok) {
//     let blog = await response.json();
//     return { blog: blog as Blog };
//   } else {
//     return { status: response.status };
//   }
// }

import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const post = await import(`../../../blogs/${params.id}.md`);

    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch (e) {
    error(404, `Could not find ${params.id}`);
  }
}
