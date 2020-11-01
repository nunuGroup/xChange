<template>
<div class="navbar">
    <div class="nav-left">
        <ul class="links">
            <router-link to="/"><li>Home</li></router-link>
            <router-link to="/products"><li>Products</li></router-link>
            <router-link to="/about"><li>About</li></router-link>
            <router-link to="/signup"><li>Login</li></router-link>
        </ul>
    </div>
    <div class="nav-right">
        <form>
            <input type="search" class="search" aria-label="Search">
            <button class="button search-button" type="submit">Search</button>
        </form>
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
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../assets/global_styles/variables';

a {
    text-decoration: none;
    color: black;
}

.navbar {
    background: rgba(0,0,0,0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $navHeight;
    position: fixed;
    top: 0px;
    width: 100%;
}

.nav-right {
    margin-right: 24px;
}

.links {
    display: flex;

    li {
        list-style: none;
        color: black;
        text-decoration: none;
        height: $navHeight;
        padding-left: 12px;
        padding-right: 12px;
        line-height: $navHeight;
        cursor: pointer;

        &:hover {
            background: rgba(0,0,0,0.3);
        }
    }
}
</style>