<template>
  <div>Paso 2</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserFormStore } from "@/stores/store";

export default defineComponent({
  setup() {
    const store = useUserFormStore();
    return { store };
  },
});
</script>

<style scoped></style>
