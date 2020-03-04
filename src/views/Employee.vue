<template>
    <div class="employees">
        <div class="header">Id</div>
        <div class="header">Name</div>
        <div class="header">Position</div>
        <div>{{ employee.id }}</div>
        <div>{{ employee.name }} {{ employee.surname }}</div>
        <div>{{ employee.position }}</div>
    </div>
</template>

<script>
    import employees from "@/data/employees";

    export default {
        name: "Employee",
        props: ['id'],
        data: () => ({
            employees
        }),
        computed: {
            employee() {
                return this.employees.find(employee => {
                    console.log(employee.id, this.id);
                    return employee.id === +this.id
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .employees {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-column-gap: 20px;
        grid-row-gap: 10px;

        .header {
            font-weight: 700;
        }
    }
</style>