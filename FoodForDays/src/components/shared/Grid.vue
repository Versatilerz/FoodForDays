<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// enum GridTemplate {
//   HOME = "home",
//   MEALS = "meals",
//   SETTINGS = "settings",
//   HISTORY = "history",
//   ABOUT = "about",
// }

interface Props {
  template?: string;
  columns?: number;
  gap?: 1 | 2 | 3 | 4;
  columnGap?: 1 | 2 | 3 | 4;
  rowGap?: 1 | 2 | 3 | 4;
  direction?: "column" | "row";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end";
  mb?: 1 | 2;
}
const props = defineProps<Props>();

const classes = computed(() => {
  return [
    "grid",
    {
      [`grid--${props.template}`]: props.template,
      [`grid--gap-${props.gap}`]: props.gap,
      [`grid--columns-${props.columns}`]: props.columns,
      [`grid--columnGap-${props.columnGap}`]: props.columnGap,
      [`grid--rowGap-${props.rowGap}`]: props.rowGap,
      [`grid--align-${props.align}`]: props.align,
      [`grid--justify-${props.justify}`]: props.justify,
      [`grid--direction-${props.direction}`]: props.direction,
      [`grid--mb-${props.mb}`]: props.mb,
    },
  ];
});
</script>

<style>
.grid {
  display: grid;
  max-width: 1280px;
  margin: auto;
  grid-gap: 10px;
  grid-template-areas:
    "a b c"
    "d e f";

  /* templates */
  &--home {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "a b c"
      "d d d"
      ". e ."
      ". f f";
  }

  &--meals {
    align-items: start;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "a a b"
      "c d e"
      "f f f"
      "g g h";
  }

  &--settings {
    align-items: start;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "a a a"
      "b b ."
      "c c c"
      "d e f";
  }

  &--history {
    align-items: start;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "a a a a a"
      "b b c c c"
      "b b e e g"
      "d d . f f"
      "d d . f f";
  }

  /* flexible grid classes, add more if needed */
  &--columns-1 {
    grid-template-columns: 1fr;
  }

  &--columns-2 {
    grid-template-columns: 1fr 1fr;
  }

  &--columns-3 {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &--columns-4 {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  &--gap-1 {
    gap: 1rem;
  }

  &--gap-2 {
    gap: 1.5rem;
  }

  &--gap-3 {
    gap: 2rem;
  }

  &--gap-4 {
    gap: 2.5rem;
  }

  &--columnGap-1 {
    column-gap: 1rem;
  }

  &--columnGap-2 {
    column-gap: 1.5rem;
  }

  &--columnGap-3 {
    column-gap: 2rem;
  }

  &--columnGap-4 {
    column-gap: 2.5rem;
  }

  &--rowGap-1 {
    row-gap: 1rem;
  }

  &--rowGap-2 {
    row-gap: 1.5rem;
  }

  &--rowGap-3 {
    row-gap: 2rem;
  }

  &--rowGap-4 {
    row-gap: 2.5rem;
  }

  &--align-start {
    align-items: start;
  }

  &--align-center {
    align-items: center;
  }

  &--align-end {
    align-items: end;
  }

  &--justify-start {
    justify-items: start;
  }

  &--justify-center {
    justify-items: center;
  }

  &--justify-end {
    justify-items: end;
  }

  &&--direction-column {
    grid-auto-flow: column;
  }

  &&--direction-row {
    grid-auto-flow: row;
  }

  &&--mb-1 {
    margin-bottom: 1rem;
  }

  &&--mb-2 {
    margin-bottom: 1.5rem;
  }
}

/* grid areas, add more if needed */
.grid-area-a {
  grid-area: a;
}

.grid-area-b {
  grid-area: b;
}

.grid-area-c {
  grid-area: c;
}

.grid-area-d {
  grid-area: d;
}

.grid-area-e {
  grid-area: e;
}

.grid-area-f {
  grid-area: f;
}

.grid-area-g {
  grid-area: g;
}

.grid-area-h {
  grid-area: h;
}

/* @media (max-width: 786px) {
  .grid {
    &--home {
      grid-gap: 20px;
      padding: 100px 0.5rem;
      margin: auto;
      grid-template-columns: minmax(250px, 1fr);
    }

    &--primary,
    &--secondary {
      grid-gap: 16px;
      padding: 56px 20px 100px 20px;
      grid-template-columns: minmax(250px, 1fr);
    }

    &--primary {
      grid-template-areas:
        "navbar "
        "content1 "
        "content2 "
        "content3 "
        "content4 "
        "content5 "
        "content6 ";
    }
  }
} */
</style>
