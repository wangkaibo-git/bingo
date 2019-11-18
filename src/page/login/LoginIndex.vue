<template>
    <div class="loginIndex">
        <div class="mid-content">
            <div class="logo-block">
                <img  class="logo" src="../../assets/bingo-logo.png">
            </div>
            <div class="form-block">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AccountLoginIndex"
    }
</script>

<style scoped>
    .loginIndex{
        height: inherit;

    }
    .mid-content{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .logo-block{
        height: 160px;
    }
    .logo{
        object-fit: cover;
        width: inherit;
        height: inherit;
    }


</style>
