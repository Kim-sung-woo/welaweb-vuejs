<template>
  <div id="wela-brand">
    <div class="header-container">
      <div v-if="!user"
           class="user-action-wrapper">
        <span v-on:click="gotoUserFind">아이디 찾기 / 비밀번호 찾기</span>
        <span>|</span>
        <span v-on:click="gotoRegisterUser">회원가입</span>
      </div>
      <div v-else-if="user"
           v-on:click="logOut()"
           class="user-action-wrapper">
        <span v-on:click="gotoUpdateMyinfo">내 정보 수정</span>
        <span>|</span>
        <span>로그아웃</span>
      </div>
      <div class="title-wrapper">
        <div>Say Together !</div>
        <div>WeLA English Class</div>
      </div>
      <div class="link-wrapper"
           v-if="user && campus">
        <img src="../assets/img/bt_link1.png"
             v-on:click="gotoExternalLink('wela-times-academy')">
        <img src="../assets/img/bt_link2.png"
             v-on:click="gotoExternalLink('ne-times')">
        <img src="../assets/img/bt_link3.png"
             v-if="campus['linkUrl'] && campus['linkUrl'] !== ''"
             v-on:click="gotoExternalLink('campus-link')">
      </div>
    </div>

    <div class="brand-container">
      <div class="title-wrapper">
        <div>웰라 BI</div>
      </div>
      <div class="download-wrapper">
        <div class="download-desc">웰라와 함께하는 로고를 소개합니다.</div>
        <div class="download-btns">
          <a class="icon-btn"
             download="WeLA_logo_png.zip"
             :href="zipPath">
            PNG 파일 다운로드
          </a>
          <a class="icon-btn"
             download="WeLA_logo.ai"
             :href="aiPath">
            AI 파일 다운로드
          </a>
        </div>
      </div>
    </div>

    <div class="logo-container">
      <div class="logo-left-wrapper">
        <div class="logo-desc">
          <img src="../assets/img/BI_o.png">
          <span>앰블럼</span>
        </div>
        <img src="../assets/img/BI_1.png">
      </div>
      <div class="logo-right-wrapper">
        <div class="top-logo-panel">
          <div class="top-logo-desc">
            <img src="../assets/img/BI_o.png">
            <span>가로형 로고</span>
          </div>
          <img src="../assets/img/BI_2.png">
        </div>

        <div class="bottom-logo-panel">
          <div class="circle-logo">
            <div class="circle-logo-desc">
              <img src="../assets/img/BI_o.png">
              <span>원형 로고</span>
            </div>
            <img src="../assets/img/BI_3.png">
          </div>

          <div class="character-logo">
            <div class="character-logo-desc">
              <img src="../assets/img/BI_o.png">
              <span>웰라 캐릭터</span>
            </div>
            <img src="../assets/img/BI_4.png">
          </div>
        </div>
      </div>
    </div>

    <WelaFooter></WelaFooter>
  </div>
</template>

<script>
  import WelaFooter from "@/components/WelaFooter"
  import AppService from '@/common/app.service'

  export default {
    name: "WelaBrand",
    mixins: [
      AppService
    ],
    components: {
      WelaFooter
    },
    data() {
      return {
        token: '',
        user: {},
        campus: {},

        zipPath: require('../assets/img/WeLA_logo_png.zip'),
        aiPath: require('../assets/img/WeLA_logo.ai'),
      }
    },
    created() {
      this.user = AppService.getUser();
      this.token = AppService.getToken();

      if(this.user && this.token) {
        this.loadCampus();
      }
    },
    methods: {
      /*****************************
       *        util functions
       *****************************/

      gotoUserFind() {
        this.$router.push({path: '/before-login/user-find'})
      },

      gotoRegisterUser() {
        this.$router.push({path: '/before-login/register-user'})
      },

      gotoUpdateMyinfo() {
        this.$router.push({path: '/before-login/register-user', query: {'isEditMode':true}})
      },

      logOut() {
        AppService.sendEvent('logout', null);
      },

      gotoExternalLink(param) {
        switch(param) {
          case 'wela-times-academy' : {
            window.open("http://timesacademy.kr", "_blank");
            break;
          }
          case 'ne-times' : {
            window.open("http://www.netimes.co.kr", "_blank");
            break;
          }
          case 'campus-link' : {
            window.open(this.campus['linkUrl'], "_blank");
            break;
          }
        }
      },

      /*****************************
       *       helper functions
       *****************************/

      loadCampus() {
        this.campusService.findOne({
          query: {
            _id: this.campusServiceappService.user.campus._id
          }
        })
          .subscribe((result) => {
            this.campus = result.campus;
          }, error => {
            console.log("error :::\n", error);
            // this.dialogService.message("에러", "서버와의 통신중 에러가 발생하였습니다.\n" + error);
          });
      }

    }
  }
</script>

<style scoped>

</style>
