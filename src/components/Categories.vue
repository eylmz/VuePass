<template>
  <div id="categories" class="h-100">
    <h4>Categories</h4>
    <div v-if="categories.length">
      Kategoriler
    </div>
    <div v-else>
      <b-alert show>You have not added any categories yet</b-alert>
    </div>
    <b-button variant="success" class="w-100">
      Add Category
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data: () => ({
    categories: [],
  }),
};
</script>
