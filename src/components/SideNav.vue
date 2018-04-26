<template>
  <div>
    <div class="wela-sidenav">
      <div class="logo-wrapper">
        <img src="../assets/img/logo.png">
      </div>

      <div class="beforelogin-sidenav-container"
           v-if="!user">
        <form v-on:submit.prevent="submit">
          <div class="input-wrapper">
            <input type="text"
                   v-model="identifier"
                   placeholder="아이디">
            <input type="password"
                   v-model="password"
                   placeholder="비밀번호">
          </div>

          <div class="login-btn-wrapper">
            <button class="icon-btn">
              <span>로그인하기</span>
            </button>
          </div>
        </form>


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
            <div v-on:click="gotoRoute('/before-login/user-find')">아이디 / 비밀번호 찾기</div>
          </div>

          <div class="login-last-panel"
               v-on:click="gotoRoute('/before-login/register-user')">
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
            <img src="../assets/img/ic_student.png">
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
                     :class="{'closed': !menuItem.children || !isActiveUrl('/student/' + menuItem.path) || menuItem.closed}"
                     :style="{ height : getSubMenuHeight(menuItem) }">
                  <div v-for="(childMenu, j) in menuItem.children"
                       v-bind:class="{'last-item' : j == (menuItem.children.length -1)}">
                    <div class="nav-sub-items-header"
                         v-if="childMenu.headerText">
                      {{childMenu.headerText}}
                    </div>
                    <div class="nav-sub-item"
                         v-if="childMenu.path">
                      <router-link class="nav-sub-label"
                                   v-bind:class="{'last-label' : j == (menuItem.children.length -1)}"
                                   v-bind:to="{path: '/'+currentSideMenuItems.path+'/'+menuItem.path+'/' + childMenu.path}">
                        <div>{{childMenu.label}}</div>
                      </router-link>
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

      <!--선생님 sidenav container 시작-->
      <div class="sidenav-container teacher"
           v-else-if="user && (user.role == '원장님' || user.role == '정회원 선생님' || user.role == '준회원 원장님' || user.role == '준회원 선생님')">
        <div class="info-wrapper">
          <div class="left-panel">
            <img src="../assets/img/ic_teacher.png">
          </div>
          <div class="right-panel">
            <div>{{user.campus.campusName}}</div>
            <div>
              <span>{{user.name}}</span>
              <span>님</span>
            </div>
          </div>
        </div>

        <div class="btn-group">
          <div class="logout-btn"
               v-on:click="logOut()">
            로그아웃
          </div>
          <router-link class="modify-info-btn"
                       :to="{ path: '/before-login/register-user', query: { isEditMode: true }}">
            내 정보 수정
          </router-link>
        </div>

        <!--선생님 nav-list 시작-->
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
                     v-bind:class="{'closed': !menuItem.children || !(isActiveUrl('/regular-academy/' + menuItem.path) || isActiveUrl('/associate-academy/' + menuItem.path)) || menuItem.closed}"
                     v-bind:style="{ height: getSubMenuHeight(menuItem) }">
                  <div v-for="(childMenu, j) in menuItem.children"
                       v-bind:class="{'last-item' : j == (menuItem.children.length -1)}">
                    <div class="nav-sub-items-header"
                         v-if="childMenu.headerText">
                      {{childMenu.headerText}}
                    </div>
                    <div class="nav-sub-item"
                         v-if="childMenu.path">
                      <router-link class="nav-sub-label"
                                   v-bind:class="{'last-label' : j == (menuItem.children.length -1)}"
                                   v-bind:to="{path: '/'+currentSideMenuItems.path+'/'+menuItem.path+'/' + childMenu.path}">
                        <div>{{childMenu.label}}</div>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--선생님 nav-list 종료-->
      </div>
      <!--선생님 sidenav container 종료-->

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
  //third parth libary
  import axios from 'axios';
  import _ from 'lodash'
  import {Observable, from, of, range} from 'rxjs';
  import moment from 'moment'

  //Vue.js module
  import {routes} from '../router/index'
  import { EventBus } from '@/main';

  //System config
  import {API_URL} from '@/common/config'

  //Vue.js Services
  import AppService from '@/common/app.service'
  import AuthService from '@/common/auth.service'
  import BannerService from '@/common/banner.service'
  import CampusService from '@/common/campus.service'
  import PointService from '@/common/point.service'

  export default {
    name: "SideNav",
    mixins: [
      AppService,
      AuthService,
      BannerService,
      CampusService,
      PointService
    ],
    data() {
      return {
        //for Login
        identifier: null,
        password: null,

        //for user info in localStorage
        user: null,
        token: '',
        isKeepLogin: null,

        //for util variable
        currentSideMenuItems: [],
        sideMenuType: '',

        //for point
        pointers: [],
        totalScore: 0,

        //for admin
        selectedCampus: {},
        campuses: []
      }
    },
    created() {

      EventBus.$on('logout', this.logOut);

      this.isKeepLogin = !!AppService.getKeepLogin();

      if (!this.isKeepLogin) {
        this.$router.push({path: '/before-login/intro'});
        this.logOut();

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

        switch (this.sideMenuType) {
          case "student":
            this.currentSideMenuItems = _.find(routes[0].children, {path: "student"});
            break;
          case "admin":
            this.currentSideMenuItems = _.find(routes[0].children, {path: "admin"});
            break;
          case "regular-academy":
            this.currentSideMenuItems = _.find(routes[0].children, {path: "regular-academy"});
            break;
          case "associate-academy":
            this.currentSideMenuItems = _.find(routes[0].children, {path: "associate-academy"});
            break;
          default:
            this.currentSideMenuItems = _.find(routes[0].children, {path: "before-login"});
            break;
        }
      },

      isValid() {
        if (!this.identifier) return false;
        else if (this.identifier === '') return false;
        else if (!this.password) return false;
        else if (this.password === '') return false;

        return true;
      },

      menuToggle(item) {
        let url = '/' + this.sideMenuType + '/' + item.path;
        if (!this.isActiveUrl(url)) {
          item.closed = false;
        } else {
          item.closed = !item.closed;
        }

        this.$router.push({path: url})
      },

      gotoRoute(path, params) {
        if (!params) {
          this.$router.push({path: path});
        } else {
          this.$router.push({path: path, query: params});
        }
      },

      isActiveUrl(url) {
        return this.$router.history.current.path.indexOf(url) >= 0;
      },

      updateUser() {
        this.user = AppService.getUser();
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
            .finally(() => {
              if (this.user && this.user.role !== '관리자')
                this.loadBanner();
            })
            .subscribe(result => {
              AppService.setToken(result.token);
              AppService.setUser(result.user);
              this.user = result.user;
              this.token = result.token;

              if (this.user.role === "학생") {
                this.$router.push({path: '/student/campus-intro/intro'})
                this.pointCreate();
              }
              else if (this.user.role === "관리자") {
                this.$router.push({path: '/admin/teacher-group/welanews'})
                this.loadCampuses();
              }
              else if (this.user.role === "원장님") {
                this.$router.push({path: '/regular-academy/wela-english/intro'})
              }
              else if (this.user.role === "정회원 선생님") {
                this.$router.push({path: '/regular-academy/wela-english/intro'})
              }
              else if (this.user.role === "준회원 원장님") {
                this.$router.push({path: '/associate-academy/wela-english/intro'})
              }
              else if (this.user.role === "준회원 선생님") {
                this.$router.push({path: '/associate-academy/wela-english/intro'})
              }
              this.initCurrentSideMenu();
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

      loadBanner() {
        let params = {
          query: {
            campus: this.user.campus._id,
            checkShow: true,
            isDeleted: false
          },
          limit: 1,
          sort: {createdAt: -1},
        };

        BannerService.find(params)
          .subscribe(result => {
              // if (data && data.banners.length > 0) {
              //TODO: make custom dialog
              // let dialogConfig: MdDialogConfig = new MdDialogConfig();
              // dialogConfig.width = '360px';
              // dialogConfig.height = '540px';
              // dialogConfig.position = {top: '60px', left: '400px'};
              //
              // let dialogRef = this.mdDialog.open(Banner, dialogConfig);
              //
              // dialogRef.componentInstance.banner = data.banners[0];
              // }
            }, error => {
              console.log("error :::\n", error);
              // this.dialogService.message("알림", "잘못된 요청입니다.")
              //   .subscribe(() => {});
            },
          );
      },

      loadCampuses() {
        CampusService.find({})
          .subscribe((result) => {
            this.campuses = result.campuses;
            this.selectedCampus = this.campuses[0];

            this.user.campus = this.selectedCampus;
            AppService.setUser(this.user);

          }, error => {
            console.log("error :::\n", error);
            this.showModal("에러", "서버와의 통신 중 에러가 발생하였습니다.");
          });
      },

      pointCreate() {
        let point = {
          student: this.user._id,
          class: this.user.class,
          action: 'Attendance'
        };

        PointService.createAttendancePoint(point)
          .finally(() => {
            this.getTotalPoint();
          })
          .subscribe((result) => {
            if (result.point && result.point.score === 5) {
              this.showModal("알림", "오늘의 출석 포인트가 지급되었습니다.");
            }
          }, (error) => {
            console.log(error);
            this.showModal("알림", "잘못된 요청입니다.");
          });
      },

      getTotalPoint() {
        this.totalScore = 0;

        PointService.find({
          query: {
            student: AppService.getUser()._id,
            createdAt: {
              $gte: moment().startOf('month').toDate(),
              $lt: moment().endOf('month').toDate()
            }
          }
        })
          .subscribe((result) => {
            this.pointers = result.pointers;

            _.forEach(this.pointers, (point) => {
              this.totalScore += point.score;
            });

            AppService.setMyScore(this.totalScore);
          }, error => {
            console.log("error:::\n", error);
            this.showModal("에러", "서버와의 통신중 에러가 발생하였습니다");
          });
      },

      logOut() {
        AuthService.logout()
          .subscribe((result) => {
            AppService.setUser(null);
            AppService.setToken(null);
            AppService.setMyScore(null);
            this.user = null;

            this.$router.push({path: '/before-login/intro'});

          }, (err) => {
            this.showModal("에러", "에러가 발생하였습니다.");
          });
      }
    }
  }
</script>

<style scoped>

</style>
