<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <div id="mobile-menu">
                    <div class="left-nav-toggle">
                        <a href="#navbar-main" class="collapsed" data-toggle="collapse" role="button" target="#navbar-main">
                            <i class="stroke-hamburgermenu"></i>
                        </a>
                    </div>
                </div>
                <a class="navbar-brand" href="/">
                    LBT WALLET
                </a>
            </div>
            <div class="navbar navbar-collapse collapse" id="navbar-main">
                <ul class="nav navbar-nav">
                    <router-link to="/new-wallet" tag="li" active-class="active">
                        <a>New wallet</a>
                    </router-link>
                    <router-link to="/send-lbt" tag="li" active-class="active">
                        <a>Send LBT</a>
                    </router-link>
                    <router-link to="/wallet-info" tag="li" active-class="active">
                        <a>Wallet Info</a>
                    </router-link>
                    <router-link to="/check-balance" tag="li" active-class="active">
                        <a>Check Balance</a>
                    </router-link>
                    <router-link to="/check-transaction" tag="li" active-class="active">
                        <a>Check Transaction</a>
                    </router-link>
                    <router-link to="/faq" tag="li" active-class="active">
                        <a>FAQ</a>
                    </router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a>v.0.1-beta</a>
                    </li>
                    <li>
                        <a class="active" href="https://github.com/letbetcoin/lbtwallet" target="_blank">Source code</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-header #mobile-menu {
    height: 40px;
}
.navbar-header #mobile-menu a,
.navbar-header #mobile-menu a i {
    line-height: 25px;
}
.navbar-default .navbar-brand, .navbar-default .navbar-brand:focus {
    height: 43px;
    padding-top: 13px;
    padding-bottom: 13px;
}
.navbar {
  margin-bottom: 0;
  border: none;
  min-height: 0;
}

.navbar-nav > li:last-child > a,
.navbar-nav > li > a {
    padding-top: 10px;
    padding-bottom: 10px;
}
.navbar-nav > li:first-child > a {
    padding-left: 15px;
}
@media screen and (min-width: 1119px){
    .navbar-nav > li:first-child > a {
        padding-left: 20px;
    }
}
.navbar-right {
    font-size: 0.9em;
}
.nav > li.active a:hover,
.nav > li.active a:focus,
.nav > li.active {
    background: transparent;
}
.nav > li:after {
    content: '';
    display: block;
    height: 2px;
    background-color: transparent;
}
.nav > li.active > a {
    background: transparent;
    color: #f6a821;
}
.nav > li.active a:focus,
.nav > li.active a:hover {
    color: #f6a821;
}
.nav > li.active:after {
    background-color: #f6a821;
}
.navbar-default .navbar-brand, .navbar-default .navbar-brand:focus {
    letter-spacing: 4px;
}
@media (max-width: 1118px) {
    .navbar-header,
    .navbar-nav,
    .navbar-nav > li {
        float: none !important;
    }
    .navbar-collapse.collapse:not(.in) {
        display: none !important;
    }
}
@media (min-width: 1119px) {
    .navbar-header {
        float: left;
    }
    .navbar-collapse.collapse {
        display: block;
    }
    .navbar-nav > li {
        float: left;
    }
}
</style>
