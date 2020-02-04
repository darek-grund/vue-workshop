<template>
    <div class="nav">
        <router-link v-for="(link, key) in links"
                     :key="key"
                     :to="link.path"
        >{{ link.name }}</router-link>
    </div>
</template>

<script>
    export default {
        name: "MyNavbar",

        data: () => ({
            links: [
                {
                    path: '/',
                    name: 'Home Page',
                },
                {
                    path: '/employee',
                    name: 'Employee Form',
                }
            ]
        })
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
