<template>
  <b-container fluid class="h-100">
    <b-row>
      <b-col cols="12">
        <Header></Header>
      </b-col>
    </b-row>
    <b-row class="h-100 no-margin">
      <b-col cols="2">
        <Categories></Categories>
      </b-col>
      <b-col cols="2">
        <Accounts></Accounts>
      </b-col>
      <b-col>
        <Form></Form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Categories from '@/components/Categories';
import Header from '@/components/Header';
import Accounts from '@/components/Accounts';
import Form from '@/components/Form';

export default {
  name: 'Home',
  components: { Categories, Header, Accounts, Form },
  created() {
    if (localStorage.getItem('') !== null) {
      console.log('Giriş yapıldı');
    } // else this.$router.push({ name: 'Login' });
  },
};
</script>
