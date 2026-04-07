<script lang="ts">
  import { categories, diagrams, type Diagram } from '$lib/diagrams';
  import { serializeState } from '$lib/util/serde';
  import { defaultState } from '$lib/util/state';
  import MermaidIcon from '~icons/custom/mermaid';
  import EditIcon from '~icons/material-symbols/edit-outline-rounded';
  import ViewIcon from '~icons/material-symbols/visibility-outline';

  let activeCategory = $state<string | null>(null);

  const filtered = $derived(
    activeCategory ? diagrams.filter((d) => d.category === activeCategory) : diagrams
  );

  function getEditorUrl(diagram: Diagram): string {
    const state = { ...defaultState, code: diagram.code };
    return `/edit#${serializeState(state)}`;
  }

  function getViewUrl(diagram: Diagram): string {
    const state = { ...defaultState, code: diagram.code };
    return `/view#${serializeState(state)}`;
  }
</script>

<div class="flex h-full flex-col overflow-auto">
  <nav class="z-50 flex items-center gap-4 p-4 sm:p-6">
    <MermaidIcon class="size-6" />
    <a href="/diagrams" class="text-lg font-semibold text-accent">Diagram Library</a>
    <div class="flex-1"></div>
    <a
      href="/edit"
      class="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90">
      New Diagram
    </a>
  </nav>

  <div class="mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6">
    <div class="mb-8">
      <h1 class="mb-2 text-2xl font-bold text-foreground">Diagrams</h1>
      <p class="text-muted-foreground">Browse, view, and edit team diagrams.</p>
    </div>

    <div class="mb-6 flex flex-wrap gap-2">
      <button
        class="rounded-full px-3 py-1 text-sm font-medium transition-colors {activeCategory === null
          ? 'bg-accent text-accent-foreground'
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}"
        onclick={() => (activeCategory = null)}>
        All
      </button>
      {#each categories as category (category)}
        <button
          class="rounded-full px-3 py-1 text-sm font-medium transition-colors {activeCategory ===
          category
            ? 'bg-accent text-accent-foreground'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}"
          onclick={() => (activeCategory = category)}>
          {category}
        </button>
      {/each}
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each filtered as diagram (diagram.id)}
        <div
          class="group flex flex-col rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md">
          <div class="mb-1 text-xs font-medium text-muted-foreground">{diagram.category}</div>
          <h2 class="mb-1 text-base font-semibold text-card-foreground">{diagram.title}</h2>
          <p class="mb-4 flex-1 text-sm text-muted-foreground">{diagram.description}</p>
          <div class="flex gap-2">
            <a
              href={getEditorUrl(diagram)}
              class="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
              <EditIcon class="size-4" />
              Edit
            </a>
            <a
              href={getViewUrl(diagram)}
              class="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
              <ViewIcon class="size-4" />
              View
            </a>
          </div>
        </div>
      {/each}
    </div>

    {#if filtered.length === 0}
      <div class="py-12 text-center text-muted-foreground">No diagrams in this category yet.</div>
    {/if}
  </div>
</div>
