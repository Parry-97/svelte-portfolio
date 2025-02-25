<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  let { info }: { info: ProjectInfo } = $props();
</script>

<Card.Root class="font-body dark:hover:border-white hover:border-gray-900">
  <Card.Header>
    <Card.Title tag="h4" class="font-bold">{info.title}</Card.Title>
  </Card.Header>
  <Card.Content>
    <p>
      {info.description}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati architecto
      modi sapiente voluptatibus quisquam vel ducimus fugiat quam
    </p>
  </Card.Content>
</Card.Root>
