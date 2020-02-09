<template>
    <form>
        <h3>
            <my-label :text="formTitle"
                      :count="clickCount"
                      @click="handleClick"
            />
        </h3>
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
            <clear-button @doClear="clearForm" />
            <my-button-functional
                    label="Functional Zapisz"
                    :disabled="!isFormFilled"
                    class="button-uppercase"
                    :class="{ 'button-disabled': !isFormFilled }" />
        </p>
    </form>
</template>

<script>
    import MyButtonFunctional from "@/components/MyButtonFunctional";
    import ClearButton from "@/components/ClearButton";
    import MyLabel from "@/components/MyLabel";

    export default {
        name: 'HelloForm',
        components: {
            MyButtonFunctional,
            ClearButton,
            MyLabel
        },
        data: () => ({
            name: 'John',
            surname: 'Doe',
            formTitle: 'Jakiś tytuł formularza',
            clickCount: 0,
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
            },
            handleClick(text) {
                this.formTitle = text.split('').reverse().join('');
                this.clickCount += 1;
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
