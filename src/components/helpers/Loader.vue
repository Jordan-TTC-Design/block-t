<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="loaderBg">
    <p class="fz--btn flex items-end gap-1 font-display text-light">
      Loading
      <span class="loadingDot loadingDot-1"></span>
      <span class="loadingDot loadingDot-2"></span>
      <span class="loadingDot loadingDot-3"></span>
      <!-- <span class="loadingDot-2">.</span>
      <span class="loadingDot-3">.</span> -->
    </p>
    <div class="preloader-container">
      <div class="progress-bar loading"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loaderBg {
  background: theme("colors.primary");
  position: fixed;
  z-index: 2500;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.preloader-container {
  border-radius: 0.25rem;
  margin: 24px auto;
  width: 140px;
  height: 2px;
  display: block;
  background-color: rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

  &.done-loading {
    border-radius: 0;
    height: 59px;
    box-shadow: 2px 2px 4px 0 rgba(197, 197, 197, 0.5);
  }
}

.progress-bar {
  background-color: theme("colors.gray-light");
  &.loading {
    background-color: theme("colors.white");

    &:after {
      -webkit-animation: loading 2s linear infinite;
      animation: loading 2s linear infinite;
    }
  }
}
.loadingDot {
  display: block;
  width: 2px;
  height: 2px;
  background-color: theme("colors.white");
}
.loadingDot-1 {
  -webkit-animation: loadingDot 2s linear infinite;
  animation: loadingDot 2s linear infinite;
}
.loadingDot-2 {
  -webkit-animation: loadingDot2 2s linear infinite;
  animation: loadingDot2 2s linear infinite;
}
.loadingDot-3 {
  -webkit-animation: loadingDot3 2s linear infinite;
  animation: loadingDot3 2s linear infinite;
}
.progress-bar:after {
  display: block;
  content: "";
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  background-color: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
}

@keyframes loading {
  from {
    left: -40%;
    width: 40%;
  }
  25% {
    left: 0%;
    width: 50%;
  }
  50% {
    left: 40%;
    width: 60%;
  }
  75% {
    left: 80%;
    width: 70%;
  }
  95% {
    left: 100%;
    width: 30%;
  }
  to {
    left: 120%;
    width: 0%;
  }
}
@keyframes loadingDot {
  from {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-1px);
  }
  50% {
    transform: translateY(-2px);
  }
  75% {
    transform: translateY(-0px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes loadingDot2 {
  from {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-1px);
  }
  75% {
    transform: translateY(-2px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes loadingDot3 {
  from {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(0px);
  }
  65% {
    transform: translateY(-1px);
  }
  85% {
    transform: translateY(-2px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>
