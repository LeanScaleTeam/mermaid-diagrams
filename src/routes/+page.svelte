<script lang="ts">
  import { goto } from '$app/navigation';
  import { buildRedirectUrl } from '$lib/util/redirect';
  import { onMount } from 'svelte';

  onMount(async () => {
    // If there's a hash (legacy link), redirect to editor with the diagram
    if (window.location.hash) {
      await goto(buildRedirectUrl(window.location), {
        replaceState: true
      });
    } else {
      // Otherwise show the diagram index
      await goto('/diagrams', { replaceState: true });
    }
  });
</script>
