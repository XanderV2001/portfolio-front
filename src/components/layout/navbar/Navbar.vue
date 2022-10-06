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
                Logout | {{ user.name || "..." }}
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
import { Account } from "appwrite";

export default defineComponent({

    props: [
        "theme",
        "loggedIn"
    ],

    emits: ["changeTheme", "showLoginModal"],

    computed: {
        currentTheme() { return this.theme !== null ? this.theme.name : "" },
        loggedIn() { return this.loggedIn },
    },

    created() {
        if (this.loggedIn) {
            const account = new Account(this.appwrite);
            account.get().then(result => {
                this.user = result;
            })
        }
    },

    watch: {
        loggedIn: function (newVal, _oldVal) {
            if (newVal === true) {
                const account = new Account(this.appwrite);
                account.get().then(result => {
                    this.user = result;
                })
            }
        }
    },

    data() {
        return {

            DarkModeIcon,
            LightModeIcon,

            user: {},

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
            const account = new Account(this.appwrite);
            account.deleteSession('current');
            this.$emit("loggedOut")
        }

    },

});
</script>