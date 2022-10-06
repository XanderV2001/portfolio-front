<template>
    <div class="fixed flex justify-center items-center inset-0 z-20">

        <!-- Blur background of modal and close modal when other content is clicked -->
        <div class="inset-0 fixed backdrop-blur-sm" @click="closeLoginModal"></div>

        <n-form ref="loginFormRef" :model="formValue" class="w-2/3 sm:w-96 drop-shadow"
            @keydown.enter="(e) => e.preventDefault()" @keyup.enter="loginUser">

            <n-card title="Login" closable :on-close="closeLoginModal">

                <n-form-item label="Email" path="email" :rule="emailRule">
                    <n-input v-model:value="formValue.email" placeholder="Email" />
                </n-form-item>

                <n-form-item label="Password" path="password" :rule="passwordRule">
                    <n-input v-model:value="formValue.password" placeholder="Password" type="password" />
                </n-form-item>

                <template #action>
                    <div class="float-right">

                        <n-button type="primary" @click="loginUser" :loading="loginLoading">
                            Login
                        </n-button>

                    </div>
                </template>

            </n-card>

        </n-form>

    </div>
</template>

<script>
import { defineComponent } from "vue";
import { useMessage } from "naive-ui";
import { Account } from 'appwrite';

export default defineComponent({

    emits: ["closeLoginModal", "loggedInSuccesfully"],

    data() {
        return {
            formValue: {
                email: '',
                password: '',
            },
            loginLoading: false,
            message: useMessage(),

            emailRule: {
                required: true,
                message: "Please input a valid email address",
                trigger: ['input', 'blur']
            },
            passwordRule: {
                required: true,
                message: "Please input a valid password",
                trigger: ['input', 'blur']
            }
        }
    },

    methods: {

        async loginUser() {

            this.$refs.loginFormRef.validate(async (errors) => {

                if (errors) {
                    this.message.error("Please input valid data");
                    return false;
                }

                this.loginLoading = true;
                const account = new Account(this.appwrite);

                try {
                    await account.createEmailSession(this.formValue.email, this.formValue.password);
                    this.$emit("loggedInSuccesfully");
                } catch {
                    this.message.error("Login failed, try a different email and/or password!")
                } finally {
                    this.loginLoading = false;
                }

            });

        },

        closeLoginModal() {
            this.$emit("closeLoginModal");
        }

    },

});
</script>