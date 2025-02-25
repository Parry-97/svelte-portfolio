<script lang="ts">
  import { SeparatorHorizontal } from "lucide-svelte";
  import { Separator } from "./ui/separator";

  let { info }: { info: ProjectInfo } = $props();
</script>

<div>
  <h3 class="text-3xl font-body font-bold">{info.title}</h3>
  <p class="font-body mt-3 text-gray-500">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis minus
    culpa debitis minima, illum dignissimos quasi similique sapiente iusto,
    {info.description}
  </p>

  <div class="flex gap-5 mt-2">
    {#each info.tags.slice(0, info.tags.length - 1) as tag}
      <a
        href={`/tags/${tag.toLowerCase()}`}
        class="text-gray-500 font-body text-xs hover:text-white"
        >{tag.toUpperCase()}</a
      >
    {/each}

    <a
      href={`/tags/${info.tags[info.tags.length - 1].toLowerCase()}`}
      class="text-gray-500 font-body text-xs hover:text-white"
      >{info.tags[info.tags.length - 1].toUpperCase()}</a
    >
  </div>

  <Separator class="mt-3"></Separator>
</div>
