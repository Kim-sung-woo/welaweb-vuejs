<template>
  <div class="wela-sidenav">
    <div class="logo-wrapper">
      <img src="../assets/img/logo.png">
    </div>

    <div class="beforelogin-sidenav-container">
      <form>
        <div class="input-wrapper">
          <input type="text"
                 v-model="identifier"
                 placeholder="아이디">
          <input type="password"
                 v-model="password"
                 placeholder="비밀번호">
        </div>

        <div class="login-btn-wrapper">
          <button class="icon-btn"
                  v-on:click="submit">
            <span>로그인하기</span>
          </button>
        </div>
      </form>

      <div class="login-text-wrapper">
        <div class="login-first-panel">
          <div class="connect-login"
               v-on:click="toggleKeepLogin">
            <img src="../assets/img/ic_check_box.png"
                 v-show="!isKeepLogin">
            <img src="../assets/img/ic_check_on.png"
                 v-show="isKeepLogin">
            <span>로그인 상태 유지</span>
          </div>
          <!--<div (click)="gotoRoute('before-login/user-find')">아이디 / 비밀번호 찾기</div>-->
          <div>아이디 / 비밀번호 찾기</div>
        </div>
        <!--<div class="login-last-panel"-->
             <!--(click)="gotoRoute('before-login/register-user')">-->
        <div class="login-last-panel">
          아직 회원이 아니신가요? <span>회원가입</span>
        </div>
      </div>

      <div class="nav-list-wrapper">
        <div class="nav-header">
          웰라잉글리쉬
        </div>
        <div class="nav-items">
          <div class="nav-item">
          <!--<div class="nav-item"-->
               <!--(click)="gotoRoute('before-login/intro')">-->
            웰라 소개
          </div>
          <div class="nav-item">
          <!--<div class="nav-item"-->
               <!--(click)="gotoRoute('before-login/wela-brand')">-->
            BI
          </div>
        </div>
        <div class="nav-header">
          캠퍼스 지원
        </div>
        <div class="nav-items">
          <div class="nav-item">
          <!--<div class="nav-item"-->
               <!--(click)="gotoRoute('before-login/book-info')">-->
            교재 안내
          </div>
          <div class="nav-item">
          <!--<div class="nav-item"-->
               <!--(click)="gotoRoute('before-login/priodical-education')">-->
            정기 교육
          </div>
          <div class="nav-item">
          <!--<div class="nav-item"-->
               <!--(click)="gotoRoute('before-login/join-member')">-->
            가맹 문의
          </div>
        </div>
      </div>
    </div>

    <div class="contact-wrapper">
      <div>
        <span>상담문의</span>
      </div>
      <div>02-805-1652</div>
      <div>AM 10:00 - 12:00</div>
      <div>PM 1:00 - 6:00</div>
    </div>

  </div>

</template>

<script>
  import axios from 'axios';
  import {Observable, from, of, range} from 'rxjs';
  import {API_URL} from '@/common/config'
  import AppService from '@/common/app.service'

  export default {
    name: "SideNav",
    mixins: [AppService],
    data() {
      return {
        user: {},
        identifier: null,
        password: null,
        isKeepLogin : null,
        totalScore: 0
      }
    },
    created() {
      this.isKeepLogin = !!AppService.getKeepLogin();

      if (this.isKeepLogin == null) {
        //TODO: 자동로그인 설정이 안되어 있을 때
        // this.router.navigateByUrl('before-login/intro');
        // this.logOut();
      } else {
        //TODO: 자동로그인 설정되어 true 일 때
        this.user = AppService.getUser();
        this.totalScore = AppService.getMyScore();
      }

      // this.initCurrentSideMenu();
    },
    methods: {
      /*****************************
       *        util functions
       *****************************/

      isValid() {
        if (!this.identifier) return false;
        else if (this.identifier === '') return false;
        else if (!this.password) return false;
        else if (this.password === '') return false;

        return true;
      },
      showModal(title, message) {
        this.$modal.show('dialog', {
          title: title,
          text: message,
          buttons: [
            {
              title: '확인'
            }
          ]
        })
      },

      toggleKeepLogin() {
        this.isKeepLogin = !this.isKeepLogin;
        AppService.setKeepLogin(this.isKeepLogin);
      },

      /*****************************
       *       helper functions
       *****************************/

      submit() {
        if (this.isValid()) {
          return Observable.fromPromise(axios.post(API_URL + '/login',
            {identifier: this.identifier, password: this.password}))
            .subscribe(result => {
              AppService.setToken(result.data.token);
              AppService.setUser(result.data.user);
              this.user = result.data.user;
            }, error => {
              switch (error.response.status) {
                case 401:
                  this.showModal("에러", "탈퇴한 회원이거나, 아이디 또는 패스워드가 일치하지 않습니다. 정확하게 입력해 주시기 바랍니다");
                  break;
                case 402: {
                  if (JSON.parse(error.response._body).type == 'disapproval') {
                    this.showModal("에러", "현재 승인 대기중입니다. 승인 절차가 완료되면 웰라 홈페이지를 이용 하실 수 있습니다.");
                    break;
                  } else if (JSON.parse(error.response._body).type == 'hasNotClass') {
                    this.showModal("에러", "아직 클래스에 배정되지 않았습니다. 캠퍼스 원장님께 클래스 배정 문의 바랍니다.");
                    break;
                  }
                }
                case 404:
                  if (error.response.statusText == "Not Found") {
                    this.showModal("에러", "탈퇴한 회원이거나, 아이디 또는 패스워드가 일치하지 않습니다. 정확하게 입력해 주시기 바랍니다");
                  } else {
                    this.showModal("에러", "서버와의 통신 중 에러가 발생하였습니다.");
                  }
                  break;
                default:
                  this.showModal("에러", "서버와의 통신 중 에러가 발생하였습니다.");
                  break;
              }
            });
        } else {
          this.showModal("알림", "아이디 또는 패스워드를 정확히 입력해주세요");
        }
      }
    }
  }
</script>

<style scoped>

</style>
