<template>
  <div class='container'>
    <div class="page-header">
      <h1>Customers</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">Sports2000 customers</div>
      <div class="panel-body">
        <form @submit.prevent="onSubmit" class="form-inline">
          <!-- <div class="form-group">
            <input type="search" v-model="query" class="form-control" placeholder="Mot(s)-clé(s)" />
          </div> -->
          <button type="submit" class="btn btn-primary">Get Customers...</button>
        </form>
      </div>
    </div>

    <div class="container customers">
      <ol>
        <li v-for='customer in customers' :key='customer'>
          {{ customer.Name }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  data: () => {
    return {
      loading: false,
      empty: false,
      query: '',
      customers: [],
      limit: 5,
      page: 1,
      total: -1,
    };
  },
  methods: {
      onSubmit: function (e) {
        console.error('onSubmit');
        this.fetchData();
      },
      fetchData: function () {
        this.loading = true;
        axios.get('/api/customers', {
          params: {
            //query: this.query,
            //limit: this.limit,
            //offset: this.page - 1
          }
        })
        .then((response) => {
          console.log('Customers:', response.data);
          this.customers = response.data
          // this.artists = response.data.artists.items;
          // this.limit = response.data.artists.limit;
          // this.page = response.data.artists.offset + 1;
          // this.total = response.data.artists.total;
          // this.empty = this.total === 0;
          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
      }
  }
}
</script>