<script lang="ts">
  import BlogCard from "$lib/components/blog_card.svelte";
  import ProjectCard from "$lib/components/project_card.svelte";

  let { data } = $props();
</script>

<div class="mt-6 grid grid-cols-3 h-full align-middle">
  <div class="col-span-1 col-start-2 flex flex-col gap-14">
    <h1 class="text-5xl font-bold font-body">Hey, I'm Param</h1>
    <p class="font-body text-gray-500 mt-8">
      I'm a developer and creator. I work as the Software Developer at XYZ.
      You’ve found my personal slice of the internet – while you're here <a
        class="text-blue-400 underline"
        href="/about">learn more about me</a
      >
    </p>

    <div>
      <h2 class="text-4xl font-bold font-body">Most Recent</h2>
      <div class="mt-6 flex flex-col gap-8">
        {#each data.blog_infos as info}
          <BlogCard {info}></BlogCard>
        {/each}
      </div>
    </div>

    <div>
      <h2 class="text-4xl font-bold font-body">Top Projects</h2>
      <div class="mt-8 flex flex-col gap-8">
        {#each data.project_infos as info}
          <a href={info.link}><ProjectCard {info}></ProjectCard></a>
        {/each}
      </div>
    </div>
  </div>
</div>
