<template>
  <div class="navigation">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav text-capitalize ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                <i class="fa fa-home"></i>
                الرئيسية
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/services">
                <i class="fa fa-server"></i>
                خدماتنا
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/contact-us">
                <i class="fa fa-envelope"></i>
                اتصل بنا
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/about-us">
                <i class="fa fa-question-circle"></i>
                من نحن
              </router-link>
            </li>
          </ul>
        </div>

        <!-- nav logo -->
        <router-link class="navbar-brand" to="/">
          <img src="../assets/logo.png" alt="" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  nav {
    border: none;
    box-shadow: none;
    padding: 20px 0;
    .navbar-brand {
      width: 230px;
      img {
        max-width: 100%;
      }
    }
    .navbar-nav {
      //   flex-direction: row-reverse;
      .nav-item {
        font-size: 18px;
        padding: 0;
        &:not(:last-of-type) {
          margin-left: 35px;
        }
        .nav-link {
          padding: 0;
          color: var(--primary);
          font-weight: bold;
          position: relative;

          &.router-link-exact-active::after {
            content: "";
            position: absolute;
            right: 0px;
            bottom: -5px;
            height: 2px;
            background: var(--primary);
            width: 100%;
          }
        }
      }
    }
  }
}
</style>