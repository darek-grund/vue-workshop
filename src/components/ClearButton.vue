<template>
    <button @click="$emit('doClear')">Wyczyść</button>
</template>

<script>
    export default {
        name: "ClearButton"
    }
</script>

<style scoped>
    button {
        padding: 10px 20px;
    }
</style>
