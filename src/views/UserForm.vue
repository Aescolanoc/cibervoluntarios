<template>
  <div>USER FORM</div>
  <UserStep v-if="store.step === 1"></UserStep>
  <OdsStep v-if="store.step === 2"></OdsStep>
  <BooksStep v-if="store.step === 3"></BooksStep>
  <ResumeStep v-if="store.step === 4"></ResumeStep>
  <div v-if="error" class="alert alert-danger" role="alert">
    {{ errorMessage }}
  </div>
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
  data() {
    return {
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    prev() {
      this.store.step--;
    },
    next() {
      if (this.store.step === 1) {
        if (this.store.userData.name === "" || this.store.userData.lastName === "") {
          this.errorMessage = "Debe rellenar los campos obligatorios";
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 2000);
        } else {
          this.store.step++;
        }
      } else if (this.store.step === 2) {
        if (this.store.userData.ods.length < 3) {
          this.errorMessage = "Seleccione 3 elementos";
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 2000);
        } else {
          this.store.step++;
        }
      } else {
        this.store.step++;
      }
    },
    submit() {
      console.log(this.store.userData);
    },
  },
});
</script>

<style lang="scss" scoped></style>
