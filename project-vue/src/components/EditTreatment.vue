<template>
  <div v-if="success">
    <div class="alert alert-success">Tratamento atualizado com successo!</div>
  </div>
  <div v-if="error">
    <div class="alert alert-danger">
      {{ errorMessage }}
    </div>
  </div>
  <div v-if="treatment" class="edit-form">
    <div class="form-group">
      <label for="id">Id</label>
      <input
        type="text"
        class="form-control"
        id="id"
        disabled
        v-model="treatment.id"
      />
    </div>
    <div class="form-group">
      <label for="name">Nome</label>
      <input
        type="text"
        class="form-control"
        id="name"
        required
        v-model="treatment.name"
        placeholder="Nome do Tratamento"
      />
    </div>
    <div class="form-group">
      <label for="treatmentType">Tipo de tratamento</label>
      <select v-model="treatment.treatmentType" class="form-control">
        <option disabled value>Selecione um tipo</option>
        <option value="Cauterização">Cauterização</option>
        <option value="Umectação">Umectação</option>
        <option value="Creme">Creme</option>
        <option value="Máscara">Máscara</option>
        <option value="Queratinização">Queratinização</option>
        <option value="Alinhamento">Alinhamento</option>
      </select>
    </div>
    <div class="form-group">
      <label for="description">Descrição</label>
      <textarea
        type="text"
        class="form-control"
        id="description"
        required
        v-model="treatment.description"
        placeholder="Descrição do Tratamento"
      />
    </div>
    <button @click="edit" class="btn btn-success">Atualizar</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "editar-tratamento",
  data() {
    return {
      success: true,
      error: false,
    };
  },
  async created() {
    this.success = false;
    await this.buscar(this.$route.params.id);
  },
  methods: {
    ...mapActions(["buscar", "editar"]),
    async edit() {
      const response = await this.editar(this.treatment);
      if (!response) {
        this.success = false;
        this.error = true;
        this.errorMessage = "Não foi possível editar!";
      } else {
        this.success = true;
        this.error = false;
      }
    },
  },
  computed: {
    treatment: {
      get() {
        return this.$store.state.treatment;
      },
      set(treatment) {
        this.$store.commit("treatment", treatment);
      },
    },
  },
};
</script>
