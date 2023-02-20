<template>
  <div class="footerbar">
    <div class="footer-left">
      <div class="footer-left-title">
        <span>my</span>
        <span class="title-empha">daein</span>
        <span>trip</span>
      </div>
      <div class="footer-left-content">
        최고의 여행 플랫폼, 마이대인트립에 오신 여러분들 환영합니다. <br />
        좋은 장소, 좋은 사람들과 함께 좋은 시간을 보내시길 바라며 많은 이용
        부탁드립니다.
      </div>
    </div>
    <div class="footer-right">
      <div class="footer-right-title">소개</div>
      <div class="footer-right-content">
        <span>회사소개</span> <br />
        <span>채용</span> <br />
        <span>공고</span> <br />
      </div>
    </div>
  </div>
</template>
<script></script>

<style lang="scss" scoped>
.footerbar {
  display: flex;
  max-width: 1080px;
  margin: 20px auto;

  & .footer-left {
    width: 50%;
    & .footer-left-title {
      font-size: 16px;
      font-weight: 800;
      margin-bottom: 10px;

      & .title-empha {
        color: #3593da;
      }
    }

    & .footer-left-content {
      font-size: 12px;
      color: #6a6c70;
    }
  }

  & .footer-right {
    width: 50%;

    & .footer-right-title {
      font-size: 14px;
      font-weight: 500;
    }

    & .footer-right-content {
      font-size: 12px;
      color: #6a6c70;
    }
  }
}
</style>
