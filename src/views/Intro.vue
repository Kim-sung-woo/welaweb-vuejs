<template>
  <div id="intro">
    <div class="header-container">
      <div v-if="!user"
           class="user-action-wrapper">
        <span v-on:click="gotoUserFind">아이디 찾기 / 비밀번호 찾기</span>
        <span>|</span>
        <span v-on:click="gotoRegisterUser">회원가입</span>
      </div>
      <div v-if="user"
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
             v-if="campus['linkUrl'] && campus['linkUrl'] !== 'http://'"
             v-on:click="gotoExternalLink('campus-link')">
      </div>
    </div>

    <div class="intro-container">
      <div class="center-wrapper">
        <div class="center-desc-panel">
          <div>유명 어학원보다 더 좋은이유?</div>
          <div>정성껏 가르치는 제대로된 영어학습</div>
        </div>

        <div class="center-first-panel">
          <img class="left-image"
               src="../assets/img/intro_01.png">
          <div class="first-right-area">
            <img src="../assets/img/intro_1.png">
            <div>온라인 학습센터를 통한</div>
            <div>철저한 온/오프라인 통합 학습관리</div>
            <div>캠퍼스에서 배운 내용을 온라인으로 복습, 예습하고</div>
            <div>추가 학습이 가능한 시스템</div>
          </div>
        </div>

        <div class="center-second-panel">
          <div class="second-left-area">
            <img src="../assets/img/intro_2.png">
            <div>기초부터 꼼꼼하게!</div>
            <div>다양한 수업형태 (주1회 ~ 5회),</div>
            <div>수준별 반편성</div>
            <div>듣고 말하고 읽고 쓰기의 통합 교육</div>
          </div>
          <img class="right-image"
               src="../assets/img/intro_02.png">
        </div>

        <div class="center-third-panel">
          <img class="left-image"
               src="../assets/img/intro_03.png">
          <div class="third-right-area">
            <img src="../assets/img/intro_3.png">
            <div>영어를 즐겁고 재미있게!</div>
            <div>게임과 챈트를 통한 즐겁고 쉬운 영어/</div>
            <div>자신감과 재미를 느낄 수 있는 영어/</div>
            <div>전과목 영어 교육을 통한 재미있는 영어/</div>
            <div>온라인 학습을 통한 즐거운 영어</div>
          </div>
        </div>

        <div class="center-fourth-panel">
          <div class="fourth-left-area">
            <img src="../assets/img/intro_4.png">
            <div>조기 영어 교육에</div>
            <div>필요한 다양한 컨텐츠</div>
            <div>파닉스, 집중회화, 영자신문, 스토리텔링,</div>
            <div>TOPEL, TOSEL, 문법클리닉, 화상영어, 테마학습등</div>
            <div>다양한 컨텐츠</div>
          </div>
          <img class="right-image"
               src="../assets/img/intro_04.png">
        </div>

        <div class="center-fifth-panel">
          <img class="left-image"
               src="../assets/img/intro_05.png">
          <div class="fifth-right-area">
            <img src="../assets/img/intro_5.png">
            <div>인성파악에 의한 교육</div>
            <div>인성 파악을 통한 호기심 유도, 자신감 성취/</div>
            <div>학습 성취도 및 인성지도 교육</div>
          </div>
        </div>

        <div class="center-sixth-panel">
          <div class="sixth-left-area">
            <img src="../assets/img/intro_6.png">
            <div>철저한 학습관리</div>
            <div>개인별 맟줌형 학습관리</div>
            <div>클리닉을 통한 원인 분석 및 개별 집중 교육</div>
          </div>
          <img class="right-image"
               src="../assets/img/intro_06.png">
        </div>
      </div>

      <div class="footer-wrapper">
        <div class="footer-item">
          <div>Vocabulary</div>
          <div>발음 / 어휘</div>
          <div>영어 철자의</div>
          <div>음가를 이해하고</div>
          <div>단어를 암기하는</div>
          <div>효과적인 학습</div>
        </div>

        <div class="footer-item">
          <div>Reading</div>
          <div>읽기 / 쓰기</div>
          <div>다양한 영역별</div>
          <div>스토리를 통한</div>
          <div>Reading 학습</div>
        </div>

        <div class="footer-item">
          <div>Conversation</div>
          <div>일상생활 속에서</div>
          <div>사용할 수 있는</div>
          <div>다양한 상황별</div>
          <div>회화 학습</div>
        </div>

        <div class="footer-item">
          <div>Listening</div>
          <div>듣기/말하기</div>
          <div>반복듣기훈련,</div>
          <div>자연스러운</div>
          <div>말하기 학습</div>
        </div>

        <div class="footer-item">
          <div>Grammar</div>
          <div>영문법</div>
          <div>영문법의 모든 것을</div>
          <div>기초부터 다지는</div>
          <div>문법학습</div>
        </div>
      </div>
    </div>

    <!--<footer></footer>-->
  </div>
</template>

<script>
  import AppService from '@/common/app.service'

  export default {
    name: "Intro",
    mixins: [AppService],
    data() {
      return {
        token: '',
        user: {},
        campus: {}
      }
    },
    created() {
      this.user = AppService.getUser();
      this.token = AppService.getToken();

      if(this.user && this.token) {
        if(this.user.role !== '관리자') {
          this.loadCampus();
        }
      }
    },
    methods: {
      /*****************************
       *        util functions
       *****************************/

      gotoUserFind() {
        // this.router.navigate(['/before-login/user-find']);
      },

      gotoRegisterUser() {
        // this.router.navigate(['/before-login/register-user']);
      },

      gotoUpdateMyinfo() {
        // this.router.navigate(['/before-login/register-user'],{queryParams: {'isEditMode':true}});
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

      logOut() {
        // this.appService.sendEvent('logout');
      },

      loadCampus() {
        // this.campusService.findOne({
        //   query: {
        //     _id: this.campusServiceappService.user.campus._id
        //   }
        // })
        //   .subscribe((result) => {
        //     this.campus = result.campus;
        //   }, error => {
        //     console.log("error :::\n", error);
        //     // this.dialogService.message("에러", "서버와의 통신중 에러가 발생하였습니다.\n" + error);
        //   });
      }

    }
  }
</script>
