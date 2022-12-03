<template>
  <n-config-provider :theme="theme">
    <n-layout class="h-screen" :native-scrollbar="false">
      <n-layout-header class="sticky top-0 z-10">
        <navbar v-on:changeTheme="changeTheme" :theme="theme" v-on:showLoginModal="showLoginModal" :loggedIn="loggedIn"
          v-on:loggedOut="logoutUser" />
      </n-layout-header>

      <n-layout-content>
        <n-message-provider placement="bottom">

          <n-modal closable v-model:show="loginModalVisible">
            <LoginModal v-on:loggedInSuccesfully="loggedInSuccesfully" />
          </n-modal>

          <n-notification-provider>
            <router-view :theme="theme" />
          </n-notification-provider>
        </n-message-provider>
      </n-layout-content>

      <n-layout-footer></n-layout-footer>

    </n-layout>
  </n-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import { darkTheme } from "naive-ui";
import { Account } from "appwrite";



export default defineComponent({

  data() {
    return {

      theme: darkTheme,
      loginModalVisible: false,
      loggedIn: false

    }
  },

  async created() {
    const account = new Account(this.appwrite);

    try {
      await account.get();
      this.loggedIn = true;
    } catch {
      this.loggedIn = false;
    }
  },

  methods: {

    changeTheme() {
      this.theme = this.theme == null ? darkTheme : null;
    },

    showLoginModal() {
      this.loginModalVisible = true;
    },

    loggedInSuccesfully() {
      this.loggedIn = true;
      this.loginModalVisible = false;
    },

    logoutUser() {
      this.loggedIn = false;
    }

  },
});
</script>

<style>
.n-scrollbar-rail {
  /* Force scrollbar to always be on top */
  z-index: 99999 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
</style>
