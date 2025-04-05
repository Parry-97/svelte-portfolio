<script>
  import { fly } from "svelte/transition";
</script>

<div
  in:fly={{ x: -200, duration: 300, delay: 300 }}
  out:fly={{ x: 200, duration: 300 }}
  class="col-span-4 my-20 col-start-4 flex flex-col gap-14"
>
  <h1 class="text-5xl font-bold font-body">About me</h1>
  <p class="font-body text-gray-500 mt-3">
    Hey, I'm Param. I'm a coder, blogger beginner, student, life-long learner. I
    work for Capgemini as a Software Engineer. I consider myself an amateur
    Rustacean, a not so bad Cloud and DevOps Engineer, a good full stack
    developer and aspiring Kaggle GM. I love coding, reading, and learning new
    things. I'm a big fan of Rust, AI, MLOps, Cloud Computing.
    <br />
    <br />
    Over my professional experience, I've worked on a variety of projects ranging
    from web development with Rust/Actix, Python/FastAPI, .NET Core and React, Cloud
    infrastructure provisioning with Terraform or Bicep , generative AI applications
    with Python and CrewAI. I've tried to absord as much as possible from all these
    experiences to enrich my knowledge and skills.
    <br />
    <br />
    This website, written entirely from scratch with SvelteKit, is intended as a
    portfolio website but also a blog to share my thoughts, experiences, and learnings
    I've gathered and will continue to gather along my journey. I sincerely hope
    you find something useful here.
  </p>
</div>
