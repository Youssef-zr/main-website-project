<template>
  <div id="app">
    <!-- navigation bar -->
    <navBar />

    <!-- content -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/css/bootswatch.min.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@500;600&display=swap");

:root {
  --primary: #0c8ce9;
}
body {
  background: #fff;
  direction: rtl;
  text-align: right;
  #app {
    font-family: "Cairo", sans-serif;
  }
  .img-responsive {
    max-width: 100%;
  }
  .blue-text {
    color: var(--primary);
  }
}
</style>

<script>
import navBar from "@/components/NavigationBar.vue";

export default {
  components: {
    navBar,
  },
};
</script>
