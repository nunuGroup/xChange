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
                        <input type="text" placeholder="email"><br>
                        <input type="password" placeholder="password"><br>
                        <div class="button continue">Continue</div>
                        <div class="button sign-up-google">Login with Google</div>
                    </form>
                    <p>Here for the first time? </p><router-link to="/signup">Create a new account</router-link>
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
@import '../assets/global_styles/variables';

.continue {
    background: $main !important;
}

.sign-up {
    background: $main;
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
    border: 1px gray solid;
}

.button {
    padding: 12px;
    width: 100%;
    border-radius: $rad; 
    margin-bottom: 6px;
    background: #eee;
    text-align: center;
    color: blue;
    cursor: pointer;

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
    width: 35%;
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
    width: 65%;
    height: 100vh;
    background: $main;
    margin: 0px;
}

</style>