<template>
  <header class="header mb-5">
    <a href="https://www.cibervoluntarios.org/" target="_blank">
      <img class="logo" src="/assets/img/logo-header-white-2021.png" alt="Cibervoluntarios logo" />
    </a>
  </header>
  <main class="container d-flex flex-column justify-content-center flex-nowrap">
    <h1 class="title text-center mb-4">Formulario Cibervoluntarios</h1>
    <section class="form-step">
      <UserStep v-if="store.step === 1"></UserStep>
      <OdsStep v-if="store.step === 2"></OdsStep>
      <BooksStep v-if="store.step === 3"></BooksStep>
      <ResumeStep v-if="store.step === 4 && isSent === false"></ResumeStep>

      <div v-if="isSent" class="text-center m-5">Datos enviados correctamente</div>
      <div class="text-center">
        <button v-if="isSent" class="btn btn-primary mx-3" type="button" @click="newForm">
          Enviar otro formulario
        </button>
      </div>

      <div v-if="error" class="alert alert-danger text-center w-50 mx-auto" role="alert">
        {{ errorMessage }}
      </div>
    </section>
    <div v-if="isSent === false" class="mx-auto">
      <button v-if="store.step != 1" class="btn btn-primary" type="button" @click="prev">{{ "<" }} Volver</button>
      <button v-if="store.step != 4" class="btn btn-primary mx-3" type="button" @click="next">
        Siguiente {{ ">" }}
      </button>
      <button v-if="store.step === 4" class="btn btn-primary mx-3" type="button" @click="submit">Finalizar</button>
    </div>
  </main>
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
      isSent: false,
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
      this.isSent = true;
      console.log(this.store.userData);
    },

    newForm() {
      location.reload();
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  width: 100vw;
  background-color: #ef3e34;

  .logo {
    height: 50px;
    margin-top: 15px;
  }
}
</style>
