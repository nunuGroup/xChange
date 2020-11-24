<template>
<div class="navbar">
    <div class="nav-left">
        <div class="logo-container"></div>
        <ul class="links">
            <router-link to="/"><li>Home</li><div class="indicator"></div></router-link>
            <router-link to="/products"><li>All Products</li><div class="indicator"></div></router-link>
            <router-link to="/about"><li>About</li><div class="indicator"></div></router-link>
            <router-link to="/signup"><li>Login</li><div class="indicator"></div></router-link>
        </ul>
    </div>
    <div class="nav-right">
        <input type="text" class="search" aria-label="Search" placeholder="Search">
        <div @click="search()" class="button search-button"></div>
    </div>
</div>  
</template>

<script>
import store from '../store'

export default {
    name: "Navbar",
    methods: {
        toggleModal() {
            console.log('toggling modal', store.state.modalActive);
            store.commit('toggleModal');
        },
        search() {
            console.log('searching...');
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';

$indicatorHeight: 1px;

.nav-left {
    display: flex;
    align-items: center;

    .logo-container {
        //background: green;
        height: 36px;
        width: 36px;
        margin-left: 24px;
        background-image: url('../assets/logo-emblem.svg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
    }
}

a {
    text-decoration: none;
    
    .indicator {
        background: black;
        height: $indicatorHeight;
        width: 50%;
        opacity: 0;
        margin-left: auto;
        margin-right: auto;
        transition: $quick;
        border-radius: 12px 12px 0px 0px;
        transform: translateY(0px);
    }
}

.navbar {
    background: white;
    border-bottom: 1px #e0e0e0 solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $navHeight;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 999;

    li {
        opacity: 0.4;
    }

    a.router-link-exact-active {
        .indicator {
            width: 100%;
            opacity: 1;
        }
        
        li {
            //border-bottom: 1px solid black;
             opacity: 1 !important;
        }
    }
}

.nav-right {
    margin-right: 24px;
    display: flex;
    align-items: center;

    .search {
        border: none;
        background: #eee;
        border-radius: 36px;
        height: 36px;
        padding-left: 12px;
        padding-right: 36px;
    }

    .search-button {
        background: white;
        margin-left: -30px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 50%;
        background-image: url('../assets/icons/search.svg');
        width: 24px;
        height: 24px;
        border-radius: 100%;
        cursor: pointer;
        transition: 200ms;

        &:hover {
            filter: brightness(0.7);
        }
    }
}

.links {
    display: flex;
    padding-left: 24px;

    li {
        list-style: none;
        color: black;
        text-decoration: none;
        height: $navHeight;
        padding-left: 12px;
        padding-right: 12px;
        line-height: $navHeight;
        cursor: pointer;
        transition: $quick;

        &:hover {
            //background: rgba(0,0,0,0.1);
            opacity: 1;
        }
    }
}
</style>