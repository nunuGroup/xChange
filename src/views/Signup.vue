<template>
  <transition name="slide-fade">
    <div class="page-container">
        <div class="login-container">
            <div class="left">
                <div class="head">
                    <div class="logo"></div>
                </div>
                <div class="form-container">
                    <h4>START FOR FREE</h4>
                    <h1>Create an account</h1>
                    <form>
                        <input type="text" placeholder="email"><br>
                        <input type="password" placeholder="password"><br>
                        <div class="button continue">Sign up</div>
                        <div class="button sign-up-google">Sign up with Google</div>
                    </form>
                    <p>Already have an account? <router-link to="/login">Sign in</router-link></p>
                </div>
            </div>
            <div class="right"></div>
        </div>
    </div>
  </transition>
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

.continue {
    background: $main !important;
    color: white !important;
}

.form-container {
    width: 400px;
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
    background: #eee;
    text-align: center;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        filter: brightness(0.6);
    }
}

.login-container {
    height: 100vh;
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
    width: 0%;
    height: 100vh;
    background: $main;
    margin: 0px;
    animation: expand 2s $ezpz forwards;
}

</style>