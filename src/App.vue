<template>
  <div id="app">
    <side-nav>
      <router-view></router-view>
    </side-nav>
    <v-dialog/>
  </div>
</template>

<script>
  import SideNav from "./components/SideNav";
  import axios from 'axios';

  //Vue.js Services
  import AppService from '@/common/app.service'

  export default {
    name: 'App',
    mixins: [
      AppService
    ],
    components: {
      SideNav
    },
    created() {
      this.initialiseInterceptor();
    },
    methods: {
      initialiseInterceptor() {
        axios.interceptors.request.use(function (config) {
          const token = AppService.getToken();
          if(token) {
            config.headers.Authorization = `Bearer ${token}`;
          }

          return config;
        }, function (error) {
          // Do something with request error
          return Promise.reject(error);
        });

        // Add a response interceptor
        axios.interceptors.response.use(function (response) {
          return response.data;
        }, function (error) {
          // Do something with response error
          if (error.status === 401) {
            AppService.setUser(null);
            AppService.setToken(null);
            this.$router.push({path: '/before-login/intro'});

            throw error;
          } else {
            throw error;
          }
          // return Promise.reject(error);
        });
      }
    }
  }
</script>

<style lang="scss">
  @import 'theme/global';
</style>
