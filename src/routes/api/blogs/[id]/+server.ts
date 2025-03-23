import { getBlog } from "$lib/server/database.js";
import { error, json } from "@sveltejs/kit";

export function GET({ params, url }) {
  let { id } = params;
  let query = url.searchParams;

  let single_blog = getBlog(id);
  if (single_blog) {
    return json(single_blog, { status: 200 });
  } else {
    return error(404, "Not found");
  }
}
