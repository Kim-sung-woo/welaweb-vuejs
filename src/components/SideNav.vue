<template>
  <div>
    <div class="wela-sidenav">
      <div class="logo-wrapper">
        <img src="../assets/img/logo.png">
      </div>

      <div class="beforelogin-sidenav-container"
           v-if="!user">
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


        <div class="login-text-wrapper">
          <div class="login-first-panel">
            <div class="connect-login"
                 v-on:click="toggleKeepLogin">
              <img src="../assets/img/ic_check_box.png"
                   v-if="!isKeepLogin">
              <img src="../assets/img/ic_check_on.png"
                   v-if="isKeepLogin">
              <span>로그인 상태 유지</span>
            </div>
            <!--<div v-on:click="gotoRoute('before-login/user-find')">아이디 / 비밀번호 찾기</div>-->
            <div>아이디 / 비밀번호 찾기</div>
          </div>
          <!--<div class="login-last-panel"-->
          <!--v-on:click="gotoRoute('before-login/register-user')">-->
          <div class="login-last-panel">
            아직 회원이 아니신가요? <span>회원가입</span>
          </div>
        </div>

        <div class="nav-list-wrapper">
          <div class="nav-header">
            웰라잉글리쉬
          </div>
          <div class="nav-items">
            <router-link class="nav-item"
                         :to="{ path: '/before-login/intro'}">
              웰라 소개
            </router-link>
            <router-link class="nav-item"
                         :to="{ path: '/before-login/wela-brand'}">
              BI
            </router-link>
          </div>
          <div class="nav-header">
            캠퍼스 지원
          </div>
          <div class="nav-items">
            <router-link class="nav-item"
                         :to="{ path: '/before-login/book-info'}">
              교재 안내
            </router-link>
            <router-link class="nav-item"
                         :to="{ path: '/before-login/priodical-education'}">
              정기 교육
            </router-link>
            <router-link class="nav-item"
                         :to="{ path: '/before-login/join-member'}">
              가맹 문의
            </router-link>
          </div>
        </div>
      </div>

      <!--학생 sidenav container 시작-->
      <div class="sidenav-container"
           v-else-if="user && user.role == '학생'">
        <div class="info-wrapper">
          <div class="left-panel">
            <img src="assets/img/ic_student.png">
            <div>
              <span>현재 성적</span>
              <span>{{totalScore}}점</span>
            </div>
          </div>
          <div class="right-panel">
            <div>{{user && user.campus ? user.campus.campusName : ''}}</div>
            <div>
              <span>{{user && user.name ? user.name : ''}}</span>
              <span>님</span>
            </div>
            <router-link class="icon-btn"
                         :to="{ path: 'student-grade'}">
              성적보기
            </router-link>
          </div>
        </div>

        <div class="btn-group">
          <div class="logout-btn"
               v-on:click="logOut()">
            로그아웃
          </div>
          <router-link class="modify-info-btn"
                       :to="{ path: '/before-login/register-user', params: {'isEditMode':true} }">
            성적보기
          </router-link>
        </div>

        <!--학생 nav-list 시작-->
        <div class="nav-list-wrapper">
          <div class="nav-items"
               v-if="currentSideMenuItems">
            <div v-for="(menuItem, i) in currentSideMenuItems.children">
              <div class="nav-item"
                   v-if="menuItem.path">
                <div class="nav-item-label"
                     v-on:click="menuToggle(menuItem)"
                     v-bind:class="{'active': isActiveUrl(menuItem.path)}">
                  {{menuItem.label}}
                </div>
                <div class="nav-sub-items"
                     v-bind:class="{'closed': !menuItem.children || !isActiveUrl('/student/' + menuItem.path) || menuItem.closed}"
                     v-bind:style.height="getSubMenuHeight(menuItem)">
                  <div v-for="(childMenu, j) in menuItem.children"
                       v-bind:class="{'last-item' : j == (menuItem.children.length -1)}">
                    <div class="nav-sub-items-header"
                         v-if="childMenu.headerText">
                      {{childMenu.headerText}}
                    </div>
                    <div class="nav-sub-item"
                         v-if="childMenu.path">
                      <div class="nav-sub-label"
                           v-bind:class="{'last-label' : j == (menuItem.children.length -1)}"
                           [routerLink]="['/'+currentSideMenuItems.path+'/'+menuItem.path+'/' + childMenu.path]"
                           [routerLinkActive]="['active']">
                        <div>{{childMenu.label}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--학생 nav-list 종료-->
      </div>
      <!--학생 sidenav container 종료-->

      <div class="contact-wrapper">
        <div>
          <span>상담문의</span>
        </div>
        <div>02-805-1652</div>
        <div>AM 10:00 - 12:00</div>
        <div>PM 1:00 - 6:00</div>
      </div>
    </div>

    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {Observable, from, of, range} from 'rxjs';
  import _ from 'lodash'
  import {API_URL} from '@/common/config'
  import AppService from '@/common/app.service'
  import {routes} from '../router/index'

  export default {
    name: "SideNav",
    mixins: [AppService],
    data() {
      return {
        //for Login
        identifier: null,
        password: null,

        //for LocalStorage
        user: null,
        token: '',
        isKeepLogin: null,
        totalScore: 0,

        //for util variable
        currentSideMenuItems: [],
        sideMenuType: '',
      }
    },
    created() {
      this.isKeepLogin = !!AppService.getKeepLogin();

      if (!this.isKeepLogin) {
        //TODO: 자동로그인 설정이 안되어 있을 때
        // this.router.navigateByUrl('before-login/intro');
        // this.logOut();
        this.$router.push({ path: '/before-login/intro'});

      } else {
        //TODO: 자동로그인 설정되어 true 일 때
        this.user = AppService.getUser();
        this.totalScore = AppService.getMyScore();
      }

      this.initCurrentSideMenu();
    },
    methods: {

      /*****************************
       *        util functions
       *****************************/

      initCurrentSideMenu() {
        if (this.user && this.token) {
          switch (this.user.role) {
            case "학생" :
              this.sideMenuType = "student";
              break;
            case "관리자" :
              this.sideMenuType = "admin";
              break;
            case "원장님" :
              this.sideMenuType = "regular-academy";
              break;
            case "정회원 선생님" :
              this.sideMenuType = "regular-academy";
              break;
            case "준회원 원장님" :
              this.sideMenuType = "associate-academy";
              break;
            case "준회원 선생님" :
              this.sideMenuType = "associate-academy";
              break;
          }
        } else {
          this.sideMenuType = "";
        }

        console.log("routes:::\n", routes)

        // switch (this.sideMenuType) {
        //   case "student":
        //     this.currentSideMenuItems = _.find(routes, {path: "student"});
        //     break;
        //   case "admin":
        //     this.currentSideMenuItems = _.find(routes, {path: "admin"});
        //     break;
        //   case "regular-academy":
        //     this.currentSideMenuItems = _.find(routes, {path: "regular-academy"});
        //     break;
        //   case "associate-academy":
        //     this.currentSideMenuItems = _.find(routes, {path: "associate-academy"});
        //     break;
        //   default:
        //     this.currentSideMenuItems = _.find(routes, {path: "before-login"});
        //     break;
        // }
      },

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

      isActiveUrl(url) {
        return this.$router.fullPath.indexOf(url) >= 0;
      },

      gotoRoute(path, params) {
        //TODO: 새 페이지 진입 시 스크롤 top으로 설정
        // this.navContent.nativeElement.scrollTop = 0;
        // if (!params) {
        //   this.router.navigateByUrl(path);
        // } else {
        //   this.router.navigate([path], {queryParams: params})
        // }

        this.$router.push({path: path});
      },

      menuToggle(item) {
        // this.navContent.nativeElement.scrollTop = 0;

        let url = '/' + this.sideMenuType + '/' + item.path;
        if (!this.isActiveUrl(url)) {
          item.closed = false;
        } else {
          item.closed = !item.closed;
        }

        this.router.navigateByUrl(url);
      },

      getSubMenuHeight(item) {
        if (!item.children || !Array.isArray(item.children))
          return '0px';

        let childCount = item.children.length;

        _.forEach(item.children, (child) => {
          if (child.headerText) {
            childCount = childCount + 2;
          }
        });

        if (childCount != item.children.length)
          return (childCount * 45) - 20 + "px";

        return (childCount * 45) + 15 + "px";
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
              console.log("this.user.role:::\n", this.user.role)
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
      },

      logOut() {
        //TODO: make logout request by axios
        // this.authService.logout()
        //   .subscribe((result) => {
        //     this.appService.user = null;
        //     this.appService.token = null;
        //     this.user = null;
        //     this.appService.myScore = null;
        //
        //     this.gotoRoute('before-login/intro');
        //
        //   }, (err) => {
        //     this.dialogService.message("에러", "에러가 발생하였습니다.");
        //   });
      }

    }
  }
</script>

<style scoped>

</style>
