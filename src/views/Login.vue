<template>
    <div class="page-container">
        <div class="login-container">
            <div class="left">
                <div class="head">
                    <div class="logo"></div>
                </div>
                <div class="form-container">
                    <h1>Welcome back!</h1>
                    <form>
                        <input class="auth-input" type="text" placeholder="Email"><br>
                        <input class="auth-input" type="password" placeholder="Password"><br>
                        <div class="button continue">Sign in</div>
                        <div class="button sign-up-google"><div class="google-logo"></div>Sign in with Google</div>
                    </form>
                    <p>First time here? <router-link class="signin-link" to="/signup">Create an account</router-link></p>
                </div>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
import store from '../store'
//import firebase from 'firebase'

export default {
    name: 'Login',
    data() {
        return {
            modalActive: store.state.modalActive
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';

.google-logo {
    background-image: url('../assets/icons/google.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 12px;
    height: 18px;
    width: 18px;
}

h4 {
    opacity: 0.3;
    font-size: 12px;
}

.auth-input {
    background: #eee;
    border: none;
}

.continue {
    background: $main !important;
    color: white !important;
}

.form-container {
    width: 400px;
    opacity: 0;
    transform: translateX(32px);
    animation: flyin ease forwards 1s;
}

.signin-link {
    text-decoration: none;
    font-weight: bold;
    color: $main;
    transition: $quick;

    &:hover {
        color: black;
    }
}

.continue {
    //border: 1px solid $main;
}

.sign-up-google {
    background: white;
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: $rad; 
    margin-bottom: 6px;
    background: white;
    border: 1px #bdbdbd solid;
}

.button {
    padding: 12px;
    width: 100%;
    border-radius: $rad; 
    margin-bottom: 6px;
    //background: #eee;
    text-align: center;
    cursor: pointer;
    font-weight: normal;
    transition: $quick;

    &:hover {
        transform: scale(0.95);
    }
}

.login-container {
    height: 100vh;
    width: 100vw;
    margin: 0px;
    display: flex;
}

.left {
    width: 100%;
    height: 100vh;
    background: white;
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    color: black;
}

.right {
    width: 150%;
    height: 100vh;
    background: $main;
    margin: 0px;
    //animation: expand 2s ease forwards;
}

</style>