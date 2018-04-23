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

export default {
  name: 'App',
  components: {
    SideNav
  },
  created() {
    this.initialiseInterceptor();
  },
  methods: {
    initialiseInterceptor() {
      this.httpInterceptor.request().addInterceptor((req, method) => {

        let requestOption = getHttpOptionsAndIdx(req, method);
        requestOption.options.withCredentials = true;
        req[requestOption.idx] = requestOption.options;

        // Setting header?
        if (this.appService.token) {
          let requestHeaders = getHttpHeadersOrInit(req, method);
          requestHeaders.set('Authorization', 'Bearer ' + this.appService.token);
          requestOption.options.headers = requestHeaders;
        }

        return req;
      });

      this.httpInterceptor.response().addInterceptor((res, method) => {
        return res
          .map(res => {
            if (res._body)
              return res.json();
            return res;
          })
          .catch((err) => {
            // if (err.status === 403 || err.status === 401) {
            if (err.status === 401) {
              this.appService.user = null;
              this.appService.token = null;
              this.router.navigateByUrl('before-login/intro');

              throw err;
            } else {
              throw err;
            }
          });
      });
    }
  }
}
</script>

<style lang="scss">
  @import 'theme/global';
</style>
