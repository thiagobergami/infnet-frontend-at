<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Página de Tratamentos</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/livros" class="nav-link">Tratamentos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/adicionar" class="nav-link">Adicionar</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>