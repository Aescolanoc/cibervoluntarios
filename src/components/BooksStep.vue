<template>
  <div>Paso 3</div>
  <ul class="list-group">
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
      First checkbox
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserFormStore } from "@/stores/store";

export default defineComponent({
  setup() {
    const store = useUserFormStore();
    return { store };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      let data = await this.store.getAllBooks();
    },
  },
});
</script>

<style scoped></style>
