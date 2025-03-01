import { fail } from "@sveltejs/kit";

export async function load({ fetch }) {
  let res = await fetch("/api/tags");
  if (res.ok) {
    return { tags: (await res.json()) as string[] };
  } else {
    fail(404, { message: "Tags not found" });
  }
}
