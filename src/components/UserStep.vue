<template>
  <div class="form-user-data w-100 mx-auto">
    <h5>Paso 1 de 4 - Datos personales</h5>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="name" v-model="store.userData.name" maxlength="15" required />
      <label for="name">Nombre</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="lastName" v-model="store.userData.lastName" maxlength="20" required />
      <label for="lastName">Apellidos</label>
    </div>
    <div class="mb-3">
      <label for="comment" class="form-label">Observaciones:</label>
      <textarea class="form-control" id="comment" v-model="store.userData.comment" rows="4" maxlength="280"></textarea>
      <p class="textarea-info">Máximo 280 caracteres</p>
    </div>
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

<style lang="scss" scoped>
.textarea-info {
  color: rgb(168, 167, 167);
  font-size: 12px;
}

@media (min-width: 700px) {
  .form-user-data div,
  h5 {
    width: 50vw !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }
}
</style>
