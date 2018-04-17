<template>
  <div class="wela-sidenav">
    <div class="logo-wrapper">
      <img src="../assets/img/logo.png">
    </div>

    <!--<div class="beforelogin-sidenav-container"-->
         <!--v-if="!user">-->
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
                  v-on:click="submit()">
            <span>로그인하기</span>
          </button>
        </div>
      </form>

      <div class="login-text-wrapper">
        <div class="login-first-panel">
          <div class="connect-login">
            <img src="../assets/img/ic_check_box.png">
          <!--<div class="connect-login"-->
               <!--v-on:click="appService.keepLogin = !appService.keepLogin">-->
            <!--<img src="assets/img/ic_check_box.png"-->
                 <!--v-if="!appService.keepLogin">-->
            <!--<img src="assets/img/ic_check_on.png"-->
                 <!--v-if="appService.keepLogin">-->
            <span>로그인 상태 유지</span>
          </div>
          <div>아이디 / 비밀번호 찾기</div>
          <!--<div v-on:click="gotoRoute('before-login/user-find')">아이디 / 비밀번호 찾기</div>-->
        </div>
        <div class="login-last-panel">
          아직 회원이 아니신가요? <span>회원가입</span>
        </div>
        <!--<div class="login-last-panel"-->
             <!--v-on:click="gotoRoute('before-login/register-user')">-->
          <!--아직 회원이 아니신가요? <span>회원가입</span>-->
        <!--</div>-->
      </div>

      <div class="nav-list-wrapper">
        <div class="nav-header">
          웰라잉글리쉬
        </div>
        <div class="nav-items">
          <div class="nav-item">
            웰라 소개
          </div>
          <div class="nav-item">
            BI
          </div>
          <!--<div class="nav-item"-->
               <!--v-on:click="gotoRoute('before-login/intro')">-->
            <!--웰라 소개-->
          <!--</div>-->
          <!--<div class="nav-item"-->
               <!--v-on:click="gotoRoute('before-login/wela-brand')">-->
            <!--BI-->
          <!--</div>-->
        </div>
        <div class="nav-header">
          캠퍼스 지원
        </div>
        <div class="nav-items">
          <div class="nav-item">
            교재 안내
          </div>
          <div class="nav-item">
            정기 교육
          </div>
          <div class="nav-item">
            가맹 문의
          </div>
          <!--<div class="nav-item"-->
               <!--v-on:click="gotoRoute('before-login/book-info')">-->
            <!--교재 안내-->
          <!--</div>-->
          <!--<div class="nav-item"-->
               <!--v-on:click="gotoRoute('before-login/priodical-education')">-->
            <!--정기 교육-->
          <!--</div>-->
          <!--<div class="nav-item"-->
               <!--v-on:click="gotoRoute('before-login/join-member')">-->
            <!--가맹 문의-->
          <!--</div>-->
        </div>
      </div>
    </div>

    <!--&lt;!&ndash;학생 sidenav container 시작&ndash;&gt;-->
    <!--<div class="sidenav-container"-->
         <!--v-if="user && user.role == '학생'">-->
      <!--<div class="info-wrapper">-->
        <!--<div class="left-panel">-->
          <!--<img src="assets/img/ic_student.png">-->
          <!--<div>-->
            <!--<span>현재 성적</span>-->
            <!--<span>{{totalScore}}점</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="right-panel">-->
          <!--<div>{{user.campus.campusName}}</div>-->
          <!--<div>-->
            <!--<span>{{user.name}}</span>-->
            <!--<span>님</span>-->
          <!--</div>-->
          <!--<button md-button-->
                  <!--class="icon-btn"-->
                  <!--v-on:click="gotoRoute('student-grade')">-->
            <!--성적보기-->
          <!--</button>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div class="btn-group">-->
        <!--<div class="logout-btn"-->
             <!--v-on:click="logOut()">-->
          <!--로그아웃-->
        <!--</div>-->
        <!--<div class="modify-info-btn"-->
             <!--v-on:click="gotoRoute('/before-login/register-user',{'isEditMode':true})">-->
          <!--내 정보 수정-->
        <!--</div>-->
      <!--</div>-->

      <!--&lt;!&ndash;학생 nav-list 시작&ndash;&gt;-->
      <!--<div class="nav-list-wrapper">-->
        <!--<div class="nav-items"-->
             <!--v-if="currentSideMenuItems">-->
          <!--<div *ngFor="let menuItem of currentSideMenuItems.children;let i = index">-->
            <!--<div class="nav-item"-->
                 <!--v-if="menuItem.path">-->
              <!--<div class="nav-item-label"-->
                   <!--v-on:click="menuToggle(menuItem)"-->
                   <!--[ngClass]="{'active': isActiveUrl(menuItem.path)}">-->
                <!--{{menuItem.label}}-->
              <!--</div>-->
              <!--<div class="nav-sub-items"-->
                   <!--[ngClass]="{'closed': !menuItem.children || !isActiveUrl('/student/' + menuItem.path) || menuItem.closed}"-->
                   <!--[style.height]="getSubMenuHeight(menuItem)">-->
                <!--<div *ngFor="let childMenu of menuItem.children;let j = index"-->
                     <!--[ngClass]="{'last-item' : j == (menuItem.children.length -1)}">-->
                  <!--<div class="nav-sub-items-header"-->
                       <!--v-if="childMenu.headerText">-->
                    <!--{{childMenu.headerText}}-->
                  <!--</div>-->
                  <!--<div class="nav-sub-item"-->
                       <!--v-if="childMenu.path">-->
                    <!--<div class="nav-sub-label"-->
                         <!--[ngClass]="{'last-label' : j == (menuItem.children.length -1)}"-->
                         <!--[routerLink]="['/'+currentSideMenuItems.path+'/'+menuItem.path+'/' + childMenu.path]"-->
                         <!--[routerLinkActive]="['active']">-->
                      <!--<div>{{childMenu.label}}</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;학생 nav-list 종료&ndash;&gt;-->
    <!--</div>-->
    <!--&lt;!&ndash;학생 sidenav container 종료&ndash;&gt;-->

    <!--&lt;!&ndash;선생님 sidenav container 시작&ndash;&gt;-->
    <!--<div class="sidenav-container teacher"-->
         <!--v-if="user && (user.role == '원장님' || user.role == '정회원 선생님' || user.role == '준회원 원장님' || user.role == '준회원 선생님')">-->
      <!--<div class="info-wrapper">-->
        <!--<div class="left-panel">-->
          <!--<img src="assets/img/ic_teacher.png">-->
        <!--</div>-->
        <!--<div class="right-panel">-->
          <!--<div>{{user.campus.campusName}}</div>-->
          <!--<div>-->
            <!--<span>{{user.name}}</span>-->
            <!--<span>님</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div class="btn-group">-->
        <!--<div class="logout-btn"-->
             <!--v-on:click="logOut()">-->
          <!--로그아웃-->
        <!--</div>-->
        <!--<div class="modify-info-btn"-->
             <!--v-on:click="gotoRoute('/before-login/register-user',{'isEditMode':true})">-->
          <!--내 정보 수정-->
        <!--</div>-->
      <!--</div>-->

      <!--&lt;!&ndash;선생님 nav-list 시작&ndash;&gt;-->
      <!--<div class="nav-list-wrapper">-->
        <!--<div class="nav-items"-->
             <!--v-if="currentSideMenuItems">-->
          <!--<div *ngFor="let menuItem of currentSideMenuItems.children;let i = index">-->
            <!--<div class="nav-item"-->
                 <!--v-if="menuItem.path">-->
              <!--<div class="nav-item-label"-->
                   <!--v-on:click="menuToggle(menuItem)"-->
                   <!--[ngClass]="{'active': isActiveUrl(menuItem.path)}">-->
                <!--{{menuItem.label}}-->
              <!--</div>-->
              <!--<div class="nav-sub-items"-->
                   <!--[ngClass]="{'closed': !menuItem.children || !(isActiveUrl('/regular-academy/' + menuItem.path) || isActiveUrl('/associate-academy/' + menuItem.path)) || menuItem.closed}"-->
                   <!--[style.height]="getSubMenuHeight(menuItem)">-->
                <!--<div *ngFor="let childMenu of menuItem.children;let j = index"-->
                     <!--[ngClass]="{'last-item' : j == (menuItem.children.length -1)}">-->
                  <!--<div class="nav-sub-items-header"-->
                       <!--v-if="childMenu.headerText">-->
                    <!--{{childMenu.headerText}}-->
                  <!--</div>-->
                  <!--<div class="nav-sub-item"-->
                       <!--v-if="childMenu.path">-->
                    <!--<div class="nav-sub-label"-->
                         <!--[ngClass]="{'last-label' : j == (menuItem.children.length -1)}"-->
                         <!--[routerLink]="['/'+currentSideMenuItems.path+'/'+menuItem.path+'/' + childMenu.path]"-->
                         <!--[routerLinkActive]="['active']">-->
                      <!--<div>{{childMenu.label}}</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;선생님 nav-list 종료&ndash;&gt;-->
    <!--</div>-->
    <!--&lt;!&ndash;선생님 sidenav container 종료&ndash;&gt;-->

    <!--&lt;!&ndash;관리자 sidenav container 시작&ndash;&gt;-->
    <!--<div class="sidenav-container teacher"-->
         <!--v-if="user && user.role == '관리자'">-->
      <!--<div class="info-wrapper">-->
        <!--<div class="left-panel">-->
          <!--<img src="assets/img/ic_teacher.png">-->
        <!--</div>-->
        <!--<div class="right-panel">-->
          <!--<div>-->
            <!--<span>{{user.name}}</span>-->
            <!--<span>님</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div class="campus-select-wrapper">-->
        <!--<select v-model="selectedCampus"-->
                <!--(ngModelChange)="campusChanged($event)">-->
          <!--<option *ngFor="let campus of campuses"-->
                  <!--[selected]="campus._id == selectedCampus._id"-->
                  <!--[ngValue]="campus">-->
            <!--{{campus.campusName}}-->
          <!--</option>-->
        <!--</select>-->
      <!--</div>-->
      <!--<div class="btn-group">-->
        <!--<div class="logout-btn"-->
             <!--v-on:click="logOut()">-->
          <!--로그아웃-->
        <!--</div>-->
      <!--</div>-->

      <!--&lt;!&ndash;관리자 nav-list 시작&ndash;&gt;-->
      <!--<div class="nav-list-wrapper">-->
        <!--<div class="nav-items"-->
             <!--v-if="currentSideMenuItems">-->
          <!--<div *ngFor="let menuItem of currentSideMenuItems.children;let i = index">-->
            <!--<div class="nav-item"-->
                 <!--v-if="menuItem.path">-->
              <!--<div class="nav-item-label"-->
                   <!--v-on:click="menuToggle(menuItem)"-->
                   <!--[ngClass]="{'active': isActiveUrl(menuItem.path)}">-->
                <!--{{menuItem.label}}-->
              <!--</div>-->
              <!--<div class="nav-sub-items"-->
                   <!--[ngClass]="{'closed': !menuItem.children || !isActiveUrl('/admin/' + menuItem.path) || menuItem.closed}"-->
                   <!--[style.height]="getSubMenuHeight(menuItem)">-->
                <!--<div *ngFor="let childMenu of menuItem.children;let j = index"-->
                     <!--[ngClass]="{'last-item' : j == (menuItem.children.length -1)}">-->
                  <!--<div class="nav-sub-items-header"-->
                       <!--v-if="childMenu.headerText">-->
                    <!--{{childMenu.headerText}}-->
                  <!--</div>-->
                  <!--<div class="nav-sub-item"-->
                       <!--v-if="childMenu.path">-->
                    <!--<div class="nav-sub-label"-->
                         <!--[ngClass]="{'last-label' : j == (menuItem.children.length -1)}"-->
                         <!--[routerLink]="['/'+currentSideMenuItems.path+'/'+menuItem.path+'/' + childMenu.path]"-->
                         <!--[routerLinkActive]="['active']">-->
                      <!--<div>{{childMenu.label}}</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash;관리자 nav-list 종료&ndash;&gt;-->
    <!--</div>-->
    <!--&lt;!&ndash;관리자 sidenav container 종료&ndash;&gt;-->


    <div class="contact-wrapper">
      <div>
        <span>상담문의</span>
      </div>
      <div>02-805-1652</div>
      <div>AM 10:00 - 12:00</div>
      <div>PM 1:00 - 6:00</div>
    </div>

  </div>

  <!--<div class="content-container" #navContent>-->
    <!--<ng-content></ng-content>-->
  <!--</div>-->

</template>

<script>
  import axios from 'axios';
  import {Observable, from, of, range} from 'rxjs';
  import { API_URL } from '@/common/config'

  export default {
    name: "SideNav",
    data() {
      return {
        identifier: null,
        password: null
      }
    },
    created() {

    },
    methods: {
      isValid() {
        if (!this.identifier) return false;
        else if (this.identifier == '') return false;
        else if (!this.password) return false;
        else if (this.password == '') return false;

        return true;
      },
      submit() {
        //TODO: make login api by axios
        if (this.isValid()) {
          return Observable.fromPromise(axios.post(API_URL + '/login',
            {identifier: this.identifier, password: this.password}))
            .subscribe(list => {
              console.log("list:::\n", list);
            }, error => {
              console.log("error:::\n", error);
              alert('서버와의 통신 중 에러가 발생하였습니다.');
            });

          // this.authService.login(this.identifier, this.password)
          //   .finally(() => {
          //     if(this.appService.user && this.appService.user.role != '관리자')
          //       this.loadBanner();
          //   })
          //   .subscribe((data) => {
          //     this.appService.user = data.user;
          //     this.appService.token = data.token;
          //     this.user = data.user;
          //     if (this.appService.user.role == "학생") {
          //       this.gotoRoute('student/campus-intro/intro');
          //       this.pointCreate();
          //     }
          //     else if (this.appService.user.role == "관리자") {
          //       this.loadCampuses();
          //       this.gotoRoute('admin/teacher-group/welanews');
          //     }
          //     else if (this.appService.user.role == "원장님") {
          //       this.gotoRoute('regular-academy/wela-english/intro');
          //     }
          //     else if (this.appService.user.role == "정회원 선생님") {
          //       this.gotoRoute('regular-academy/wela-english/intro');
          //     }
          //     else if (this.appService.user.role == "준회원 원장님") {
          //       this.gotoRoute('associate-academy/wela-english/intro');
          //     }
          //     else if (this.appService.user.role == "준회원 선생님") {
          //       this.gotoRoute('associate-academy/wela-english/intro');
          //     }
          //     this.initCurrentSideMenu();
          //   }, (err) => {
          //     console.log("err :::\n", err);
          //     switch (err.status) {
          //       case 401:
          //         this.dialogService.message("에러", "탈퇴한 회원이거나, 아이디 또는 패스워드가 일치하지 않습니다. 정확하게 입력해 주시기 바랍니다");
          //         break;
          //       case 402: {
          //         if(JSON.parse(err._body).type == 'disapproval') {
          //           this.dialogService.message("에러", "현재 승인 대기중입니다. 승인 절차가 완료되면 웰라 홈페이지를 이용 하실 수 있습니다.");
          //           break;
          //         } else if(JSON.parse(err._body).type == 'hasNotClass') {
          //           this.dialogService.message("에러", "아직 클래스에 배정되지 않았습니다. 캠퍼스 원장님께 클래스 배정 문의 바랍니다.");
          //           break;
          //         }
          //       }
          //       case 404:
          //         if(err.statusText == "Not Found") {
          //           this.dialogService.message("에러", "탈퇴한 회원이거나, 아이디 또는 패스워드가 일치하지 않습니다. 정확하게 입력해 주시기 바랍니다");
          //         } else {
          //           this.dialogService.message("에러", "서버와의 통신 중 에러가 발생하였습니다.");
          //         }
          //         break;
          //       default:
          //         this.dialogService.message("에러", "서버와의 통신 중 에러가 발생하였습니다.");
          //         break;
          //     }
          //   });
        } else {
          // this.dialogService.message("알림", "아이디 또는 패스워드를 정확히 입력해주세요");
        }
      }
    }
  }
</script>

<style scoped>

</style>
