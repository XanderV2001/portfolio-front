<template>
    <div class="flex flex-row py-3 px-4 items-center gap-2">
        <div class="flex-none text-2xl">&lt;Xander /&gt;</div>
        <div class="flex-1">

            <n-menu :value="activeKey" mode="horizontal" :options="menuOptions" />

        </div>
        <div class="flex-none cursor-pointer mt-2 mr-1" @click="emitChangeTheme">
            <n-icon :component="currentTheme == 'dark' ? LightModeIcon : DarkModeIcon" size="25" />
        </div>
        <div class="flex-none">
            <n-button secondary type="primary">
                Login
            </n-button>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import {
    DarkModeOutlined as DarkModeIcon,
    LightModeOutlined as LightModeIcon
} from "@vicons/material";

var currentTheme = ref(String);

export default defineComponent({

    props: [
        "theme"
    ],

    watch: {
        "theme": (val, _oldVal) => {
            currentTheme.value = val === null ? "" : val.name;
        }
    },

    emits: ["changeTheme"],

    setup(props, { emit }) {
        currentTheme.value = props.theme.name || "";

        const emitChangeTheme = () => {
            emit("changeTheme");
        }

        return {
            emitChangeTheme,
            currentTheme,
            DarkModeIcon,
            LightModeIcon
        }
    }

});
</script>