<script lang="ts">
  import ProjectCard from "$lib/components/project_card.svelte";

  let { data } = $props();
</script>

<div class="mt-6 grid grid-cols-3 h-full align-middle">
  <div class="col-span-1 col-start-2 flex flex-col gap-10">
    <h1 class="text-5xl font-bold font-body">Hey, I'm Param</h1>
    <p class="font-body text-gray-500 mt-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
      quas soluta ipsam, fuga incidunt dolores, accusamus sed officiis
      asperiores quam laboriosam repellendus! Dolor ullam magni id praesentium
      assumenda cumque quaerat.
    </p>

    <div>
      <h2 class="text-4xl font-bold font-body">Most Recent</h2>
      <!-- <p class="font-body text-gray-500 mt-6"> -->
      <!--   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis -->
      <!--   quas soluta ipsam, fuga incidunt dolores, accusamus sed officiis -->
      <!--   asperiores quam laboriosam repellendus! Dolor ullam magni id praesentium -->
      <!--   assumenda cumque quaerat. -->
      <!-- </p> -->

      <div class="mt-6 flex flex-col gap-8">
        {#each data.infos as info}
          <ProjectCard {info}></ProjectCard>
        {/each}
      </div>
    </div>
  </div>
</div>
