import { getTags } from "$lib/server/database";
import { json } from "@sveltejs/kit";

export function GET() {
  return json(getTags(), { status: 200 });
}
