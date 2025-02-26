import { getBlogInfos } from "$lib/server/database.js";
import { json } from "@sveltejs/kit";

export function GET() {
  return json(getBlogInfos(), { status: 200 });
}
