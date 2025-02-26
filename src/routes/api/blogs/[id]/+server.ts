import { getBlogInfo } from "$lib/server/database.js";
import { error, json } from "@sveltejs/kit";

export function GET({ params }) {
  let { id } = params;
  let single_blog = getBlogInfo(id);
  if (single_blog) {
    return json(single_blog, { status: 200 });
  } else {
    return error(404, "Not found");
  }
}
