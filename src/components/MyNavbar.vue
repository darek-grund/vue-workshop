<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/employee">Employee form</router-link>
    </div>
</template>

<script>
    export default {
        name: "MyNavbar"
    }
</script>

<style scoped lang="scss">
    .nav {
        margin-bottom: 20px;

        * {
            margin: 0 10px;
        }
    }
</style>