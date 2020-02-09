<template functional>
    <button v-on="listeners"
            v-bind="data.attrs"
            :class="['button', data.staticClass, data.class]">
        {{ props.label }}
    </button>
</template>

<script>
    export default {
        name: 'MyButtonFunctional',
        props: {
            label: {
                required: false,
                default: 'Button',
                type: String

            }
        }
    }
</script>

<style scoped lang="scss">
    .button {
        padding: 10px 20px;

        &-uppercase {
            text-transform: uppercase;
        }

        &-disabled {
            cursor: no-drop;
            opacity: 0.5;
        }
    }
</style>
