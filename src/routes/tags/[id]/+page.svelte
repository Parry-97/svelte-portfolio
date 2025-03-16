<script lang="ts">
  import { page } from "$app/state";
  import BlogCard from "$lib/components/blog_card.svelte";
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import { SearchIcon } from "lucide-svelte";
  import { fly } from "svelte/transition";
  let { data } = $props();
  let { id } = page.params;

  let value = $state<string>("");
</script>

<div
  in:fly={{ x: -200, duration: 300, delay: 300 }}
  out:fly={{ x: 200, duration: 300 }}
  class="col-span-1 col-start-2 flex flex-col gap-y-14"
>
  <h1 class="text-5xl font-bold font-body">{id.toUpperCase()}</h1>
  <p class="font-body text-gray-500">
    There are {data.blog_infos.length} articles that belongs to the tag
    <span class="underline text-blue-500">{id}</span>. Articles which belongs
    only to the tag <span class="underline text-blue-500">{id}</span>
    will appear here. A particular article may belong to multiple tags. Use the search
    below to filter by title.
  </p>

  <div class="flex w-full items-center space-x-2">
    <Input bind:value type="search" placeholder="Search articles" />
    <Button disabled={true} variant="outline" type="button" size="icon"
      ><SearchIcon /></Button
    >
  </div>

  <div>
    <h2 class="text-4xl font-bold font-body">All Posts</h2>
    <div class="mt-6 flex flex-col gap-8">
      {#each value ? data.blog_infos.filter((bi) => bi.title
              .toLowerCase()
              .includes(value)) : data.blog_infos as info}
        <BlogCard {info}></BlogCard>
      {/each}
    </div>
  </div>
</div>
