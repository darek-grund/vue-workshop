<template>
    <div id="app">
        <HelloForm/>
    </div>
</template>

<script>
    import HelloForm from './components/HelloForm.vue'

    export default {
        name: 'app',
        components: {
            HelloForm
        }
    }
</script>

<style lang="scss">
    body {
        background: #f1f1f1;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
