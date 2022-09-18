<template>
  <n-config-provider :theme="theme">
    <n-layout class="h-screen">
      <n-layout-header>
        <navbar v-on:changeTheme="changeTheme" :theme="theme" />
      </n-layout-header>

      <n-layout-content>
        <n-message-provider>
          <n-notification-provider>
            <router-view />
          </n-notification-provider>
        </n-message-provider>
      </n-layout-content>

      <n-layout-footer></n-layout-footer>

    </n-layout>
  </n-config-provider>
</template>

<script>
import { defineComponent, ref } from "vue";
import { darkTheme } from "naive-ui";

export default defineComponent({
  setup() {
    var theme = ref(darkTheme);

    const changeTheme = () => {
      theme.value = theme.value == null ? darkTheme : null;
    }

    return {
      theme,
      changeTheme,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
</style>
