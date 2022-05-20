<template>
  <div>Paso 1 - Datos personales</div>
  <div class="form-floating mb-3">
    <input type="text" class="form-control w-50" id="name" v-model="store.userData.name" required />
    <label for="name">Nombre</label>
  </div>
  <div class="form-floating mb-3">
    <input type="text" class="form-control w-50" id="lastName" v-model="store.userData.lastName" required />
    <label for="lastName">Apellidos</label>
  </div>
  <div class="mb-3">
    <label for="comment" class="form-label">Observaciones</label>
    <textarea class="form-control w-50" id="comment" v-model="store.userData.comment" rows="3"></textarea>
  </div>
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
