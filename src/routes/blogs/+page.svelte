<script lang="ts">
  import BlogCard from "$lib/components/blog_card.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { SearchIcon } from "lucide-svelte";
  import { fly } from "svelte/transition";

  let value = $state<string>("");
  let { data } = $props();
</script>

<div
  in:fly={{ x: -200, duration: 300, delay: 300 }}
  out:fly={{ x: 200, duration: 300 }}
  class="col-span-1 col-start-2 flex flex-col gap-y-14"
>
  <h1 class="text-5xl font-bold font-body">Blogs</h1>
  <p class="font-body text-gray-500">
    There are {data.blog_infos.length} articles on this site. Use
    <a class="text-blue-400 underline" href="/tags">tags</a> to get articles based
    on different tags. Use the search below to filter by title.
  </p>

  <div class="flex w-full items-center space-x-2">
    <Input bind:value type="email" placeholder="Search articles" />
    <Button disabled={true} variant="outline" type="submit" size="icon"
      ><SearchIcon /></Button
    >
  </div>

  {#if !value}
    <div>
      <h2 class="text-4xl font-bold font-body">Most Recent</h2>
      <div class="mt-6 flex flex-col gap-8">
        {#each data.blog_infos as info}
          <BlogCard {info}></BlogCard>
        {/each}
      </div>
    </div>
  {/if}

  <div>
    <h2 class="text-4xl font-bold font-body">All Posts</h2>
    <div class="mt-6 flex flex-col gap-8">
      {#each value ? data.blog_infos.filter((bi) => bi.title
              .toLowerCase()
              .includes(value.toLowerCase())) : data.blog_infos as info}
        <BlogCard {info}></BlogCard>
      {/each}
    </div>
  </div>
</div>
