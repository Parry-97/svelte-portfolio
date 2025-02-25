<script>
  import BlogCard from "$lib/components/blog_card.svelte";
  import { Button } from "$lib/components/ui/button";
  import Input from "$lib/components/ui/input/input.svelte";
  import { fly } from "svelte/transition";
  let { data } = $props();
</script>

<div
  in:fly={{ x: -200, duration: 300, delay: 300 }}
  out:fly={{ x: 200, duration: 300 }}
  class="col-span-1 col-start-2 flex flex-col gap-8"
>
  <h1 class="text-5xl font-bold font-body">Blog</h1>
  <p class="font-body text-gray-500">
    There are {data.blog_infos.length} articles on this site. Use tags to get articles
    based on different tags. Use the search below to filter by title. >
  </p>

  <form class="flex w-full max-w-sm items-center space-x-2">
    <Input type="email" placeholder="email" />
    <Button type="submit">Subscribe</Button>
  </form>

  <div>
    <h2 class="text-4xl font-bold font-body">Most Recent</h2>
    <div class="mt-6 flex flex-col gap-8">
      {#each data.blog_infos as info}
        <BlogCard {info}></BlogCard>
      {/each}
    </div>
  </div>
</div>
