<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Listagem de Tratamentos</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <div class="table">
                                 <thead class=" text-primary">
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Nome
                                    </th>
                                    <th>
                                        Tipo de Tratamento
                                    </th>
                                    <th>
                                        Categoria
                                    </th>
                                    <th>
                                        descrição
                                    </th>
                                </thead>
                                <tbody>
                                    <tr v-for="treatment in treatments" :key="treatment">
                                        <td>
                                            {{treatment}}
                                        </td>
                                        <td>
                                            <button class="btn btn-success mr-3" @click="editar(treatment)">Editar</button>
                                            <button class="btn btn-danger" @click="excluir(treatment.id)">Excluir</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "listagem-tratamentos",
    created(){
        this.listar()
    },
    methods: {
        ...mapActions(["listar", "excluir"]),
        /* editar(treatment){
            this.$router.push({
                name: "editar",
                params: {
                    id: treatment.id
                }
            });
        } */
    },
    computed: {
        ...mapGetters(["treatments"])
    }
}
</script>
