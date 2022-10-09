<template>

    <div class="w-screen h-screen-navbar flex justify-center items-center flex-col">

        <h1 class="md:text-8xl text-5xl mb-10 text-center">Xander Vos Development</h1>

        <div class="flex flex-row gap-10 md:gap-20">
            <n-button text type="primary" class="z-10" size="large" href="https://www.linkedin.com/in/xander-vos/"
                tag="a" target="_blank">
                <n-icon size="35">
                    <linkedin-icon />
                </n-icon>
            </n-button>
            <n-button secondary type="primary" class="z-10" size="large" @click="scrollToProjects">
                See projects
            </n-button>
            <n-button text type="primary" class="z-10" size="large" href="https://github.com/xanderv2001" tag="a"
                target="_blank">
                <n-icon size="35">
                    <github-icon />
                </n-icon>
            </n-button>
        </div>
    </div>

</template>


<script>
import { defineComponent } from "vue";
import { Github as GithubIcon, LinkedinIn as LinkedinIcon } from '@vicons/fa';


export default defineComponent({
    components: {
        GithubIcon,
        LinkedinIcon
    },

    methods: {
        scrollToProjects(e) {
            document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
        }
    }
})

</script>