<template>
  <div id="book-info">
    <div class="header-container">
      <div v-if="!user"
           class="user-action-wrapper">
        <span v-on:click="gotoUserFind()">아이디 찾기 / 비밀번호 찾기</span>
        <span>|</span>
        <span v-on:click="gotoRegisterUser()">회원가입</span>
      </div>
      <div v-else-if="user"
           v-on:click="logOut()"
           class="user-action-wrapper">
        <span v-on:click="gotoUpdateMyinfo()">내 정보 수정</span>
        <span>|</span>
        <span>로그아웃</span>
      </div>
      <div class="title-wrapper">
        <div>Say Together !</div>
        <div>WeLA English Class</div>
      </div>
    </div>

    <div class="wela-system-container">
      <div class="system-title-wrapper">
        <div class="dummy">
          <div></div>
          <div></div>
        </div>
        <div class="system-title">
          WeLA System
        </div>
        <div class="dummy">
          <div></div>
          <div></div>
        </div>
      </div>

      <div class="book-intro-wrapper">
        <div class="book-intro-label">
          교재소개
        </div>
        <div class="book-intro-panel">
          <div></div>
          <div>
            <div class="book">Conversation Course Book</div>
            <div class="book">Reading Book</div>
            <div class="book">Writing Book</div>
            <div class="book">Newspaper</div>
            <div class="book">Story Book</div>
            <div class="book">Phonics & Vocabulary Book</div>
            <div class="book">Grammar Book</div>
            <div class="book">다양한 게임 자료 및 교구 지원</div>
          </div>
        </div>
      </div>

      <div class="book-struct-wrapper">
        <div class="book-struct-label">
          <img src="../assets/img/img_textbook_2.png">
          <span>웰라 교재 구성</span>
        </div>
        <div class="book-struct-panel">
          <div class="book-struct-area">
            <div class="struct">
              <p><span>&#9679;</span> 각 레벨별 교재</p>
              <p><span>&#9679;</span> 교사용지침서</p>
              <p><span>&#9679;</span> Audio CD - mp3 음원 홈페이지에 탑재</p>
              <p><span>&#9679;</span> Writing Book</p>
              <p><span>&#9679;</span> Star Game</p>
            </div>
            <img src="../assets/img/ic_arrow_right.png">
            <div class="struct">
              <p><span>&#9679;</span> Semimonthly Evaluation Test</p>
              <p><span>&#9679;</span> Monthly Evaluation Test</p>
              <p><span>&#9679;</span> Placement Test</p>
            </div>
          </div>

          <div class="book-struct-area">
            <div class="struct">
              <p><span>&#9679;</span> Reading Book</p>
              <p><span>&#9679;</span> 빙고게임</p>
              <p><span>&#9679;</span> 문장카드</p>
            </div>
            <img src="../assets/img/ic_arrow_right.png">
            <div class="struct">
              <p><span>&#9679;</span> 홈페이지 자료실에 탑재</p>
            </div>
          </div>
        </div>
      </div>

      <div class="book-table-wrapper">
        <div class="table-header-row">
          <div class="table-header-column">
            STEP
          </div>
          <div class="table-header-column">
            A Type - Communicative
          </div>
          <div class="table-header-column">
            B Type - Subject
          </div>
        </div>

        <div class="table-first-row">
          <div class="table-first-column">
            <span>S</span>tarter
          </div>
          <div class="table-first-column">
            <p><span>&#9679;</span> 일상생활에서 표현이 담긴 동화로 구성</p>
            <p><span>&#9679;</span> 유치부 ~ 초등 저학년</p>
            <p><span>&#9679;</span> 영어에 처음 노출된 어린이를 위한 알파벳 공부</p>
          </div>
          <div class="table-first-column">
            <p><span>&#9679;</span> Phonics, Song & Chant</p>
          </div>
        </div>

        <div class="table-second-row">
          <div class="table-second-column">
            <div>
              <span>E</span>lementary
            </div>
            <div>
              <span>I</span>ntermediate
            </div>
            <div>
              <span>A</span>dvanced
            </div>
          </div>
          <div class="table-second-column">
            <p><span>&#9679;</span> Reading comprehension, Words,
              Sentence structure and
              Communicative English 등을 다룸
            </p>
            <p><span>&#9679;</span> 실용회화 중심의 Topic으로 구성</p>
            <p><span>&#9679;</span> 각 주제를 초, 중, 고급 수준으로
              표현 제시 - 반복 - 심화 반복 - 활용 학습
            </p>
            <p><span>&#9679;</span> 입력과정(Input) = L/C, R/C
              출력과정(Ouput) = Speaking, Writing
            </p>
          </div>
          <div class="table-second-column">
            <p><span>&#9679;</span> Math, Language Arts, Science,
              Social Studies 등을 다룸
            </p>
            <p><span>&#9679;</span> 과목별 Activity를 많이 다룬다.
              (만들기, 계산하기, 그리기, 실험 등)
            </p>
            <p><span>&#9679;</span> 미국 아이비리그 공교육 프로그램을
              근거로 EFL 환경에 적합하게 재구성
            </p>
            <p><span>&#9679;</span> 이중언어를 사용하게 하여
              지적성장과 사고력을 향상시킴
            </p>
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
    name: "BookInfo",
    mixins: [
      AppService
    ],
    components: {
      WelaFooter
    },
    data() {
      return {
        token: '',
        user: {}
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

      /*****************************
       *       helper functions
       *****************************/
    }
  }
</script>
