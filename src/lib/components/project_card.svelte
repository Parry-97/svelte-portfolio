<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  let { info }: { info: ProjectInfo } = $props();
</script>

<Card.Root>
  <Card.Header>
    <Card.Title
      >{info.title}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati architecto
      modi sapiente voluptatibus quisquam vel ducimus fugiat quam unde tempora ipsam
      aperiam, rem minus accusamus nulla a temporibus quia?
    </Card.Title>
  </Card.Header>
  <Card.Content>
    <p>{info.description}</p>
  </Card.Content>
</Card.Root>
