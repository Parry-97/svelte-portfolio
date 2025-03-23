import { getBlogInfos } from "$lib/server/database.js";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  const queryParams = url.searchParams;
  return json(await getBlogInfos(queryParams.get("tag")), { status: 200 });
}
