<template>
  <div id="priodical-education">
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

    <div class="title-container">
      <div class="title-wrapper">
        <div>정기 교육</div>
      </div>
    </div>

    <div class="education-container">
      <div class="education-wrapper">
        <div class="edu-left-panel">
          <img src="assets/img/education_01.png">
        </div>
        <div class="edu-right-panel">
        <span class="edu-right-title">
          월 1회 정기 교육
          <span></span>
        </span>
          <p class="edu-right-desc">
            매월 셋째 주 토요일에 진행되는 정기 교육은 원장님들이 직접
            참여하셔서 캠퍼스 운영과 수업에 관한 KNOW-HOW를 배우고
            나누는 시간입니다. 캠퍼스 운영에 꼭 필요한 정보를 공유하면서
            원장님들의 사업 성공에 든든한 길잡이가 됩니다.
          </p>
        </div>
      </div>

      <div class="education-wrapper">
        <div class="edu-left-panel">
          <img src="assets/img/education_02.png">
        </div>
        <div class="edu-right-panel">
        <span class="edu-right-title">
          월 1회 지역 모임
          <span></span>
        </span>
          <p class="edu-right-desc">
            각 지역별로 같은 지역에서 캠퍼스를 운영하고 계시는 원장님들과 월
            1회 정기적인 모임을 개최합니다.
            우리 지역의 공통 관심사에 대해서 소수 인원이 모여 깊이 있는
            대화를 나누고 해결 방안을 찾는 알찬 모임입니다.
          </p>
        </div>
      </div>

      <div class="education-wrapper">
        <div class="edu-left-panel">
          <img src="assets/img/education_03.png">
        </div>
        <div class="edu-right-panel">
        <span class="edu-right-title">
          연 1회 국내 워크샵
          <span></span>
        </span>
          <p class="edu-right-desc">
            여행은 어디로 가느냐가 중요한 것이 아니라, 누구와 함께 가느냐가
            중요합니다. 함께하면 즐거운 원장님들과 1박 2일의 국내 워크샵을
            통해서 공감대를 형성하고 에너지를 재충전하는 발전적인 시간을
            나눕니다.
          </p>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
    export default {
        name: "PriodicalEducation"
    }
</script>

<style scoped>

</style>
