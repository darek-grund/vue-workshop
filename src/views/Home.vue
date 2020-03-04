<template>
    <div>
        <p>Home Page</p>
        <p><MyButton message="Hello From MyButton component" /></p>

        <ul>
            <li v-for="employee in employees"
                 :key="employee.id"
            >
                <router-link :to="{ name: 'employees_id', params: { id: employee.id } }">
                    {{ employee.name }} {{ employee.surname }}
                </router-link>
            </li>
        </ul>

        <div>
            <MyInput v-model="myInputModel"
                     placeholder="This is placeholder"
            ></MyInput>
            <p>{{ myInputModel }}</p>
        </div>
    </div>
</template>

<script>
    import employees from "@/data/employees";
    import MyButton from "@/components/MyButton";
    import MyInput from "@/components/MyInput";

    export default {
        name: "Home",
        components: {
            MyButton,
            MyInput
        },
        data: () => ({
            employees,
            myInputModel: ''
        })
    }
</script>

<style scoped>

</style>
