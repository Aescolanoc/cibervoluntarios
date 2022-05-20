<template>
  <div>Paso 4</div>
  <dl class="row">
    <dt class="col-sm-3">Nombre:</dt>
    <dd class="col-sm-9">{{ store.userData.name }}</dd>

    <dt class="col-sm-3">Apellidos:</dt>
    <dd class="col-sm-9">
      {{ store.userData.lastName }}
    </dd>

    <dt class="col-sm-3">Observaciones:</dt>
    <dd class="col-sm-9">
      <dl class="row">
        <dd>{{ store.userData.comment }}</dd>
      </dl>
    </dd>

    <dt class="col-sm-3">ODS:</dt>
    <div class="ods-wrapper">
      <div v-for="item in getUserOds()" :key="item.id" class="ods-image">
        <img
          :src="'/assets/img/' + item.img"
          class="figure-img img-fluid rounded"
          alt="imagen de Objetivo de Desarrollo Sostenible"
        />
      </div>
    </div>

    <dt class="col-sm-3 text-truncate">Books:</dt>
    <div v-for="item in getUserBooks()" :key="item.id">
      <p>{{ item.title }}</p>
    </div>
  </dl>
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
}
.ods-image {
  width: 100px;
  height: 100px;
  margin: 10px;
}
</style>
