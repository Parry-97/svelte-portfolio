<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  let { info }: { info: ProjectInfo } = $props();
</script>

<Card.Root class="font-body dark:hover:border-white hover:border-gray-900">
  <Card.Header>
    <Card.Title tag="h4" class="font-bold">{info.title}</Card.Title>
  </Card.Header>
  <Card.Content>
    <p class="text-gray-600 dark:text-gray-300">
      {info.description}
    </p>
  </Card.Content>
</Card.Root>
