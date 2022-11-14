<template>
  <div class="m-4">
    <div v-if="submitted">
      <div class="alert alert-success">Tratamento Adicionado com sucesso</div>
    </div>
    <div v-if="error">
      <div class="alert alert-danger">
        {{ errorMessage }}
      </div>
    </div>
    <div>
      <div class="form-group">
        <label for="name">Nome do Tratamento</label>
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
        <label for="treatmentType">Tipo de Tratamento</label>
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
        <label for="autor">Descrição</label>
        <input
          type="text"
          class="form-control"
          id="autor"
          required
          v-model="treatment.description"
          placeholder="Descrição"
        />
      </div>
      <br />
      <button @click="submit" class="btn btn-success">Adicionar</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "adicionar-tratamento",
  data() {
    return {
      treatment: {
        name: "",
        treatmentType: "",
        description: "",
      },
      submitted: false,
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["adicionar", "verifiacarUnico"]),
    async submit() {
      const data = {
        name: this.treatment.name,
        treatmentType: this.treatment.treatmentType,
        description: this.treatment.description,
      };
      const response = await this.adicionar(data);
      if (!response) {
        this.submitted = false;
        this.error = true;
        this.errorMessage = "Não foi possível realizar o cadastro!";
      } else {
        this.submitted = true;
        this.error = false;
      }
    },
  },
};
</script>
