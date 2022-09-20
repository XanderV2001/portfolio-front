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

            <n-button secondary type="primary" @click="emitShowLoginModal" v-if="!loggedIn">
                Login
            </n-button>

            <n-button secondary type="primary" @click="logoutUser" v-else>
                Logout | {{ user.email }}
            </n-button>

        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import {
    DarkModeOutlined as DarkModeIcon,
    LightModeOutlined as LightModeIcon
} from "@vicons/material";

export default defineComponent({

    props: [
        "theme",
        "logIn"
    ],

    emits: ["changeTheme", "showLoginModal"],

    computed: {
        currentTheme() { return this.theme !== null ? this.theme.name : "" },
        loggedIn() {
            this.loggedOutFlag;
            return this.pocketbase.authStore.isValid || this.logIn;
        },
        user() { return this.pocketbase.authStore.model }
    },

    data() {
        return {

            DarkModeIcon,
            LightModeIcon,
            loggedOutFlag: 0,

        }
    },

    methods: {

        emitChangeTheme() {
            this.$emit("changeTheme");
        },

        emitShowLoginModal() {
            this.$emit("showLoginModal");
        },

        logoutUser() {
            this.pocketbase.authStore.clear();
            document.cookie = this.pocketbase.authStore.exportToCookie({ httpOnly: false, expires: new Date(Date.now()) });
            this.loggedOutFlag++;
            this.$emit("loggedOut")
        }

    },

});
</script>