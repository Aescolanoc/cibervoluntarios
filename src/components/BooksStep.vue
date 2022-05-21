<template>
  <h5>Paso 3 de 4 - Selecciona tus libros favoritos</h5>

  <Multiselect
    mode="tags"
    v-model="store.userData.books"
    :searchable="true"
    :close-on-select="false"
    :options="store.allBooks"
    valueProp="id"
    label="title"
    class="mb-5"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserFormStore } from "@/stores/store";
import Multiselect from "@vueform/multiselect";

export default defineComponent({
  setup() {
    const store = useUserFormStore();
    return { store };
  },
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [],
    };
  },

  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      await this.store.getAllBooks();
    },
  },
});
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
