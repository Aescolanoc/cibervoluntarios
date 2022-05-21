<template>
  <div id="resume" class="resume-warpper w-100 mx-auto">
    <h5 class="mb-3">Paso 4 de 4 - Resumen</h5>
    <dl class="row data-wrapper">
      <dt class="col-sm-3">Nombre:</dt>
      <dd class="col-sm-9">{{ store.userData.name }}</dd>

      <dt class="col-sm-3">Apellidos:</dt>
      <dd class="col-sm-9">
        {{ store.userData.lastName }}
      </dd>

      <dt class="col-sm-3">Observaciones:</dt>
      <dd class="mx-1">{{ store.userData.comment }}</dd>

      <dt>Objectivos de desarrollo sostenible:</dt>
      <div class="ods-wrapper">
        <div v-for="item in getUserOds()" :key="item.id" class="ods-image mb-4">
          <img
            :src="'/assets/img/' + item.img"
            class="figure-img img-fluid rounded"
            alt="imagen de Objetivo de Desarrollo Sostenible"
          />
        </div>
      </div>

      <dt class="mb-2" v-if="getUserBooks().length > 0">Libros Favoritos:</dt>
      <ul>
        <li class="mx-5" v-for="item in getUserBooks()" :key="item.id">{{ item.title }}</li>
      </ul>
    </dl>
  </div>
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
  methods: {
    getUserOds() {
      return ods.filter((element) => this.store.userData.ods.includes(element.id));
    },

    getUserBooks() {
      return this.store.allBooks.filter((element) => this.store.userData.books.includes(element.id));
    },
  },
});
</script>

<style lang="scss" scoped>
.ods-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.ods-image {
  width: 100px;
  height: 100px;
  margin: 10px;
}

@media (min-width: 700px) {
  #resume.resume-warpper {
    width: 50vw !important;
    margin-right: auto !important;
    margin-left: auto !important;
  }
}
</style>
