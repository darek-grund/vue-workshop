<template>
    <form>
        <h3>{{ formTitleToUppercase }}</h3>
        <p class="message" v-if="!isFormFilled">
            Please fill Name and Surname
        </p>
        <p>
            <label>Name</label>
            <input v-model.trim="name"
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
            <label>Position</label>
            <select>
                <option v-for="(option, id) in developerPositionOptions" :key="id">{{ option }}</option>
            </select>
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
            surname: 'Doe',
            formTitle: 'This is form title as uppercase',
            positionOptions: [
                'Frontend developer',
                'Backend developer',
                'DevOps',
                'Solution architect',
                'QA engineer',
                'Business analytics',
                'UX designer',
                'Project manager',
            ],
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
            },
            formTitleToUppercase() {
                return this.formTitle.toUpperCase();
            },
            developerPositionOptions() {
                return this.positionOptions.filter(option => option.includes('developer'));
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
    button,
    select {
        padding: 10px 10px;
        font-size: inherit;
    }
</style>
