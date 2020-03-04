<template>
    <div class="input">
        <label>MyInput</label>
        <input type="text"
               :value="value"
               @input="$emit('input', $event.target.value)"
               v-bind="$attrs"
        >
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        props: ['value'],
        inheritAttrs: false
    }
</script>

<style scoped lang="scss">
    .input {
        border: 1px solid #333;
        padding: 10px;

        label {
            display: block;
            margin-bottom: 5px;
        }

        input {
            padding: 10px 20px;
        }
    }
</style>