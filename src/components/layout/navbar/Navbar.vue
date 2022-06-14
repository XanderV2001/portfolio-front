<template>
    <div class="flex flex-row py-3 px-4 items-center gap-2">
        <div class="flex-none text-2xl">&lt;Xander /&gt;</div>
        <div class="flex-1">

            <n-menu :value="activeKey" mode="horizontal" :options="menuOptions" />

        </div>
        <div class="flex-none">
            <n-button quaternary @click="emitChangeTheme">
                Change theme
            </n-button>
        </div>
        <div class="flex-none">
            <n-button secondary type="primary">
                Login
            </n-button>
        </div>
    </div>
</template>

<script>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import {
    BookOutline as BookIcon,
} from "@vicons/ionicons5";
import { RouterLink } from "vue-router";

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
];

export default defineComponent({

    emits: ["changeTheme"],

    setup(props, { emit }) {
        const activeKey = ref(null);

        const emitChangeTheme = () => {
            emit("changeTheme");
        }

        return {
            emitChangeTheme,
            menuOptions,
            activeKey
        }
    }

});
</script>