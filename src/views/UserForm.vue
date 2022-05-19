<template>
  <div>USER FORM</div>
  <UserStep v-if="store.step === 1"></UserStep>
  <OdsStep v-if="store.step === 2"></OdsStep>
  <BooksStep v-if="store.step === 3"></BooksStep>
  <ResumeStep v-if="store.step === 4"></ResumeStep>
  <div class="d-grid gap-2 d-md-block">
    <button v-if="store.step != 1" class="btn btn-primary" type="button" @click="prev">Prev</button>
    <button v-if="store.step != 4" class="btn btn-primary" type="button" @click="next">Next</button>
    <button v-if="store.step === 4" class="btn btn-primary" type="button" @click="submit">Validar Formulario</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserFormStore } from "@/stores/store";
import UserStep from "../components/UserStep.vue";
import OdsStep from "../components/OdsStep.vue";
import BooksStep from "../components/BooksStep.vue";
import ResumeStep from "../components/ResumeStep.vue";

export default defineComponent({
  setup() {
    const store = useUserFormStore();
    return { store };
  },
  components: {
    UserStep,
    OdsStep,
    BooksStep,
    ResumeStep,
  },
  methods: {
    prev() {
      this.store.step--;
    },
    next() {
      console.log(this.store.userData);
      // this.store.step++;
    },
    submit() {
      console.log(this.store.userData);
    },
  },
});
</script>

<style lang="scss" scoped></style>
