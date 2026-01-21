<template>
  <div id="app-layout">
    <header class="header-area">
      <div class="container">
        <nav class="main-nav">
          <router-link to="/" class="logo">
            <h4 style="color: #fff; font-weight: 900; margin: 0;">
              MEX<span style="color: #22b3c1;">ANT</span>
            </h4>
          </router-link>

          <ul class="nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><router-link to="/book">Book Consultation</router-link></li>
            <li><router-link to="/consultations">My Consultations</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer-section">
      <div class="container">
        <p>Copyright © 2026 Mexant Co., Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header-area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #1f272b;
  display: flex;
  align-items: center;
  z-index: 1000;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
}

.main-content {
  flex: 1;
  padding-top: 80px;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav li {
  margin-left: 30px;
}

.nav li a {
  color: #ffffff !important;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;
}

.nav li a.router-link-active,
.nav li a:hover {
  color: #ff511a !important;
}

.footer-section {
  background-color: #1f272b;
  color: #fff;
  padding: 40px 0;
  text-align: center;
}
</style>
