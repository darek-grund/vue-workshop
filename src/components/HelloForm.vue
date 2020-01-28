<template>
    <form>
        <p class="message" v-if="!isFormFilled">
            Please fill Name and Surname
        </p>
        <p>
            <label>Name</label>
            <input v-model="name"
                   type="text"
                   placeholder="e.g. John">
        </p>
        <p>
            <label>Surname</label>
            <input v-model="surname"
                   type="text"
                   placeholder="e.g. Doe">
        </p>
        <p>
            <button @click.prevent="clearForm">Clear</button>
        </p>
    </form>
</template>

<script>
    export default {
        name: 'HelloForm',
        data: () => ({
            name: 'John',
            surname: 'Doe'
        }),
        methods: {
            clearForm() {
                this.name = '';
                this.surname = '';
            }
        },
        computed: {
            isFormFilled() {
                return this.name && this.surname;
            }
        }
    }
</script>

<style scoped>
    .message {
        color: #f33;
    }

    p {
        margin: 0 0 20px 0;
    }

    label {
        display: block;
        margin: 0 0 5px 0;
    }

    input,
    button {
        padding: 10px 20px;
        font-size: inherit;
    }
</style>
