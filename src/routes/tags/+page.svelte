<script>
  import { fly } from "svelte/transition";
  let { data } = $props();
</script>

<div
  in:fly={{ x: -200, duration: 300, delay: 300 }}
  out:fly={{ x: 200, duration: 300 }}
  class="col-span-1 my-20 col-start-2 flex flex-col gap-14"
>
  <h1 class="text-5xl font-bold font-body">Tags</h1>
  <p class="font-body text-gray-500 mt-3">
    There are {data.tags?.length ?? 0} different tags to which the blogs belongs
    to. These tags will help you find the articles easily if you know which tag they
    belongs to.
  </p>

  <div class="flex gap-4 mt-2 flex-wrap">
    {#each data.tags ?? [] as tag}
      <a
        href={`/tags/${tag.toLowerCase()}`}
        class="text-gray-500 font-body text-xs hover:text-white"
        >{tag.toUpperCase()}</a
      >
    {/each}
  </div>
</div>
