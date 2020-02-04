<template>
    <button @click="showConsoleLogMessage">MyButton</button>
</template>

<script>
    export default {
        name: "MyButton",

        props: ['message'],

        methods: {
            showConsoleLogMessage() {
                console.log(this.message);
            }
        }
    }
</script>

<style scoped>
    button {
        padding: 10px 20px;
    }
</style>
