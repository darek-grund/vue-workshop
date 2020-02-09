<template>
    <span @click="$emit('click', text)">
        {{ text }}, kliknięć: {{ count }}
    </span>
</template>

<script>
    export default {
        name: "MyLabel",

        props: {
            text: {
                type: String,
                default: ''
            },
            count: {
                type: Number,
                default: 0
            }
        },

        methods: {
            handleClick() {
                //this.$emit
            }
        }
    }
</script>
