<template>
  <div id="form">
    <h4>Create Account</h4>

    <b-form-group label="Account Name:">
      <b-form-input type="text" v-model="item.name" required></b-form-input>
    </b-form-group>

    <b-form-group label="Account Category:">
      <b-form-select v-model="item.category_id" :options="categories" class="mb-3" />
    </b-form-group>

    <b-form-group label="Email address:">
      <b-form-input type="email" v-model="item.email" required></b-form-input>
    </b-form-group>

    <b-form-group label="Username:">
      <b-form-input type="text" v-model="item.username" required></b-form-input>
    </b-form-group>


    <b-form-group label="Password:" >
      <b-input-group>
        <b-form-input :type="showPassword" v-model="item.password"></b-form-input>
        <b-input-group-append>
          <b-btn variant="outline-secondary" @click="showPwd"><v-icon name="eye" /></b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: 'password',
      categories: [],
      item: {
        email: 'asdasd',
      },
    };
  },
  methods: {
    showPwd() {
      if (this.showPassword === 'password') this.showPassword = 'text';
      else this.showPassword = 'password';
    },
  },
};
</script>
