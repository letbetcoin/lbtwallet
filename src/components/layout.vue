<template>
    <div>
        <!-- Header-->
        <v-header></v-header>
        <!-- End header-->

        <!-- Main content-->
        <section class="content">
            <div class="container">
                <b-row>
                    <b-col lg="12">
                        <div class="view-header text-center">
                          <h2>{{this.$route.meta.title}}</h2>
                        </div>
                    </b-col>
                </b-row>

                <router-view></router-view>
            </div>
        </section>
        <!-- End main content-->
        <div class="clearfix"></div>
        <div class="footer">
            <div class="panel panel-filled">
                <div class="panel-body">
                    <p>We don't hold your keys. We also can't recover your keys. Please do
                        <span class="text-warning">BACKUP</span>
                    </p>
                    <p>LBTWallet is free &amp; open-sourced. It's a client-side to connect to LBT Blockchain. You could download all source code and run it locally.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "../vendor/jquery/dist/jquery.min";
import VHeader from "./layout/header.vue";
const layout = {
  components: { VHeader },
  mounted: () => {
    $(document).ready(function() {});
  }
};
export default layout;
</script>
<style scoped>
.view-header {
  min-height: 0;
  margin: 0;
  margin-bottom: 20px;
  margin-top: 30px;
  padding: 0;
}
.content {
  margin-left: 0 !important;
  margin-top: 0;
  padding-top: 10px;
}
.footer {
  margin-top: 30px;
  font-size: 0.85em;
}
.footer .panel {
margin-bottom: 0;
}
@media screen and (min-width: 768px) {
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 0;
  }
}
hr {
  margin-top: 0;
}
.navbar {
  margin-bottom: 0;
  border: none;
  min-height: 0;
}
.navbar-default .navbar-brand,
.navbar-default .navbar-brand:focus {
  height: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.navbar-nav > li:first-child > a {
  padding-left: 20px;
}
.navbar-nav > li:last-child > a {
  padding: 20px 15px;
}
.nav > li.active {
  background: transparent;
}
.nav > li:after {
  content: "";
  display: block;
  height: 2px;
  background-color: transparent;
}
.nav > li.active > a {
  background: transparent;
  color: #f6a821;
}
.nav > li.active:after {
  background-color: #f6a821;
}
</style>