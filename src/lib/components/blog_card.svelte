<script lang="ts">
  import { invalidate } from "$app/navigation";
  import { Separator } from "./ui/separator";

  let { info }: { info: BlogInfo } = $props();
</script>

<div>
  <a href={`/blogs/${info.id}`} class="text-3xl font-body font-bold"
    >{info.title}</a
  >
  <p class="font-body mt-3 text-gray-500">
    {info.description}
  </p>

  <div class="flex gap-5 mt-2">
    {#each info.tags as tag}
      <a
        href={`/tags/${tag.toLowerCase()}`}
        class="text-gray-500 font-body text-xs hover:text-white"
        onclick={(evt) => {
          evt.stopPropagation();
          invalidate("/tags/");
        }}
      >
        {tag.toUpperCase()}
      </a>
    {/each}
  </div>

  <Separator class="mt-3"></Separator>
</div>
