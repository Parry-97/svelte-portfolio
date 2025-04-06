<script lang="ts">
  import ProjectCard from "$lib/components/project_card.svelte";
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
  class="col-span-4 col-start-4 flex flex-col gap-y-14"
>
  <h1 class="text-5xl font-bold font-body">Projects</h1>
  <p class="font-body text-gray-500">
    Hey, I'm Param. I'm a Software Engineer, blogger and tinkerer. Here are some
    of the projects I've worked on. Most of them are hosted on Github. Feel free
    to check them out at my Github profile page <a
      class="text-blue-400 underline"
      href="https://github.com/Parry-97">here</a
    >
  </p>

  <div class="flex w-full items-center space-x-2">
    <Input bind:value type="search" placeholder="Search projects" />
    <Button disabled={true} variant="outline" type="submit" size="icon"
      ><SearchIcon /></Button
    >
  </div>

  <div>
    <div class="mt-8 flex flex-col gap-8">
      {#each value ? data.project_infos.filter((bi) => bi.title
              .toLowerCase()
              .includes(value)) : data.project_infos as info}
        <a href={info.link}><ProjectCard {info}></ProjectCard></a>
      {/each}
    </div>
  </div>
</div>
