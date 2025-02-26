export async function load({ params, fetch }) {
  let { id } = params;
  let response = await fetch(`/api/blogs/${id}`);
  if (response.ok) {
    let blog = await response.json();
    return { blog: blog };
  } else {
    return { status: response.status };
  }
}
