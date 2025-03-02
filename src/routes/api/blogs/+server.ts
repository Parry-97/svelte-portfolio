import { getBlogInfos } from "$lib/server/database.js";
import { json } from "@sveltejs/kit";

export function GET({ url }) {
  const queryParams = url.searchParams;
  return json(getBlogInfos(queryParams.get("tag")), { status: 200 });
}
