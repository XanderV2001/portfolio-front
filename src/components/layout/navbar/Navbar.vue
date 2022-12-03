<template>
    <div class="flex flex-row py-3 px-4 items-center gap-2">
        <router-link to="/" class="flex-none text-2xl">&lt;Xander /&gt;</router-link>
        <div class="flex-1 ml-4">

            <router-link to="/" class="mr-4 link-underline link-underline-black ">Home</router-link>
            <router-link to="/about" class="mr-4 link-underline link-underline-black ">About</router-link>

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

<style>
.link-underline {
    border-bottom-width: 0;
    padding-bottom: 2px;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 2px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size .25s ease-in-out;
}

.link-underline-black {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#36ad6a, #36ad6a)
}

.link-underline:hover {
    background-size: 100% 2px;
    background-position: 0 100%
}
</style>

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

            menuOptions: [
                {}
            ]

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