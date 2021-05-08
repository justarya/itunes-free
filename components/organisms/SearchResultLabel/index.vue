<template>
  <div
    v-if="$route.query.term"
    class="o-search-result-label"
  >
    Search result for <b>{{ $route.query.term }}</b>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.o-search-result-label {
  padding: 0 20px;
  margin-bottom: 20px;
}
</style>
