<template>

    <div class="w-screen h-screen-navbar flex justify-center items-center flex-row gap-32">




        <n-card :title="project.project_name" class="max-w-sm max-h-96" hoverable v-for="project in projects"
            :key="project.$id">
            <template #cover>
                <img :src="project.banner_image">
            </template>

            <template #header-extra>
                <div class="flex gap-3">
                    <n-button text tag="a" :href="project.github_url" target="_blank" v-if="project.github_url != null">
                        <n-icon size="20">
                            <github-icon />
                        </n-icon>
                    </n-button>

                    <n-button text tag="a" :href="project.website_url" target="_blank"
                        v-if="project.website_url != null">
                        <n-icon size="20">
                            <open-externally-icon />
                        </n-icon>
                    </n-button>
                </div>
            </template>

            {{project.project_description}}
        </n-card>

    </div>

</template>


<script>
import { defineComponent } from "vue";
import { Github as GithubIcon, LinkedinIn as LinkedinIcon, ExternalLinkAlt as OpenExternallyIcon } from '@vicons/fa';
import { Account, Databases, Query } from "appwrite";


export default defineComponent({
    components: {
        GithubIcon,
        LinkedinIcon,
        OpenExternallyIcon
    },

    methods: {
        scrollToProjects() {
            document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
        }
    },

    data() {
        return {
            projects: [],
            user: {}
        }
    },

    async created() {
        const database = new Databases(this.appwrite);
        const user = new Account(this.appwrite);

        user.get().then(user => {
            this.user = user;
        }).catch(_e => {
            this.user = {};
        });

        const result = await database.listDocuments("634358a1a37903a67ee0", "634358a8383af6216985", [Query.equal('is_featured', true)]);

        this.projects = result.documents;
    }
})

</script>