<template>
  <div>Paso 2 - Selecciona 3 Objetivos de desarrollo sostenible</div>
  <div class="ods-wrapper">
    <div
      v-for="item in (data as any)"
      :key="item.id"
      :class="item.selected ? 'ods-wrapper__imgage selected' : 'ods-wrapper__imgage'"
      @click="handlerImage(item.id)"
    >
      <img
        :src="'/assets/img/' + item.img"
        class="figure-img img-fluid rounded"
        alt="imagen de Objetivo de Desarrollo Sostenible"
      />
    </div>
  </div>
  <div v-if="error" class="alert alert-danger" role="alert">Sólo se pueden seleccionar 3 elementos</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserFormStore } from "@/stores/store";
import { ods } from "@/data/data";

export default defineComponent({
  setup() {
    const store = useUserFormStore();
    return { store };
  },
  data() {
    return {
      data: ods as any,
      error: false,
    };
  },

  methods: {
    handlerImage(id: number): any {
      let newData = this.data.find((element: any) => element.id === id);
      if (newData.selected) {
        this.store.removeOds(id);
        newData.selected = false;
      } else {
        if (this.store.userData.ods.length < 3) {
          this.store.addOds(id);
          newData.selected = true;
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 2000);
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.ods-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  &__imgage {
    cursor: pointer;
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }

  &__imgage:hover {
    opacity: 0.7;
    transition: ease-in-out;
  }
}

.selected > img {
  opacity: 0.4;
  transform: scale(0.9);
  border: 1px solid black;
  transition: ease-in-out;
}
</style>
