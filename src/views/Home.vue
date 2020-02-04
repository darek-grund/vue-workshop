<template>
    <div>
        <p>Home Page</p>
        <p><MyButton message="Hello From MyButton component" /></p>
    </div>
</template>

<script>
    import MyButton from "@/components/MyButton";

    export default {
        name: "Home",
        components: {
            MyButton
        }
    }
</script>

<style scoped>

</style>
