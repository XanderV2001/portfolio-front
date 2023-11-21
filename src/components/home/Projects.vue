<template>
    <div class="w-screen relative">

        <div class="min-h-screen-navbar flex justify-center items-center flex-row gap-32 flex-wrap mx-4 sm:mx-0">
            <n-card :title="project.project_name" class="max-w-md max-h-96" hoverable v-for="project in projects"
                :key="project.$id">
                <template #cover>
                    <img :src="project.banner_image" alt="Project Banner">
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

                {{ project.project_description }}
            </n-card>
        </div>

        <div class="mx-4">
            <n-modal closable v-model:show="addProject">
                <add-project-modal @closeModal='() => addProject = false' />
            </n-modal>
        </div>

        <div v-if="user !== null" class="absolute bottom-8 right-12">
            <n-button text @click="addNewProject()">
                <n-icon size="32">
                    <plus-icon />
                </n-icon>
            </n-button>
        </div>

    </div>
</template>


<script>
import { defineComponent } from "vue";
import { Github as GithubIcon, LinkedinIn as LinkedinIcon, ExternalLinkAlt as OpenExternallyIcon, PlusCircle as PlusIcon } from '@vicons/fa';
import { Account, Databases, Query } from "appwrite";


export default defineComponent({
    components: {
        GithubIcon,
        LinkedinIcon,
        OpenExternallyIcon,
        PlusIcon,
    },

    methods: {
        scrollToProjects() {
            document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
        },

        addNewProject() {
            this.addProject = true;
        },

        closeModal() {
            this.addProject = false;
        }
    },

    data() {
        return {
            projects: [],
            user: null,
            addProject: false,
        }
    },

    async created() {
        const database = new Databases(this.appwrite);
        const user = new Account(this.appwrite);

        user.get().then(user => {
            this.user = user;
        }).catch(_e => {
            this.user = null;
        });

        const result = await database.listDocuments("634358a1a37903a67ee0", "634358a8383af6216985", [Query.equal('is_featured', true)]);

        this.projects = result.documents;
    }
})

</script>