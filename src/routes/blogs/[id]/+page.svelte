<script lang="ts">
  import { fly } from "svelte/transition";

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
  in:fly={{ x: -200, duration: 300, delay: 300 }}
  out:fly={{ x: 200, duration: 300 }}
  class="font-body dark:prose-invert col-span-4 col-start-4 flex flex-col gap-y-14"
>
  <!-- <hgroup> -->
  <h1 class="text-5xl font-bold font-body">{data.meta.title}</h1>
  <!-- </hgroup> -->

  <!-- <div class=""> -->
  <data.content />
  <!-- </div> -->
</article>
