<template>
  <div class="o-nav">
    <span class="o-nav__title"><b>iTunes</b>Free</span>
    <NuxtLink
      class="o-nav__search-link"
      to="/search"
    >
      <i class="icon-search" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss">
.o-nav {
  display: flex;
  padding: 40px 20px;
  justify-content: space-between;
  &__title {
    font-size: 28px;
  }
  &__search-link {
    font-size: 24px;
    color: black;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
}
</style>
