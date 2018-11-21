<template>
  <div id="accounts" class="h-100">
    <h4>Accounts</h4>
    <div v-if="accounts.length">
      Kategoriler
    </div>
    <div v-else>
      <b-alert show>You have not created any account yet</b-alert>
    </div>
    <b-button variant="success" class="w-100" @click="show">
      Create Account
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Accounts',
  data: () => ({
    accounts: [],
  }),
  methods: {
    show() {
      this.$swal('Hello Vue world!!!');
    },
  },
};
</script>
