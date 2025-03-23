import { getProjectInfos } from "$lib/server/database";
import { json } from "@sveltejs/kit";

export function GET() {
  return json(getProjectInfos(), { status: 200 });
}
