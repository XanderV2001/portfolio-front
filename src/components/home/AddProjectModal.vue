<template>
    <div class="mx-4 sm:mx-0">

        <n-card class="max-w-lg" :segmented="{ content: 'soft' }">
            <template #cover>
                <n-upload @before-upload="showImage" :show-file-list="false">
                    <n-upload-dragger class="relative !p-0">

                        <img :src="banner_image" class="w-fit h-fit" />

                        <div class="absolute top-0 w-full h-full">
                            <div class="flex justify-center h-full">
                                <n-icon size="48" class="self-center">
                                    <archive-icon />
                                </n-icon>
                            </div>
                        </div>
                    </n-upload-dragger>
                </n-upload>
            </template>

            <template #header>
                <div class="flex flex-col gap-3">
                    <n-input v-model:value="project_name" type="text" clearable autofocus placeholder="Project Name" />
                    <n-input v-model:value="project_description" type="textarea" clearable placeholder="Description" />
                </div>
            </template>

            <div class="flex flex-col gap-3">
                <n-input v-model:value="github_url" type="text" clearable autofocus placeholder="Github URL" />
                <n-input v-model:value="website_url" type="text" clearable placeholder="Website URL" />
                <n-date-picker v-model:value="project_start_date" type="datetime" clearable placeholder="Start date" />
                <n-date-picker v-model:value="project_end_date" type="datetime" clearable placeholder="End date" />
            </div>

            <template #action>
                <div class="flex flex-row place-content-between ">
                    <n-switch size="large" class="self-center" v-model:value="is_featured">
                        <template #checked>
                            Show
                        </template>
                        <template #unchecked>
                            Hide
                        </template>
                    </n-switch>

                    <div class="flex gap-3">
                        <n-button text type="error" @click="$emit('closeModal')">
                            Cancel
                        </n-button>
                        <n-button type="success" @click="saveProject()">
                            Save
                        </n-button>
                    </div>
                </div>



            </template>
        </n-card>

    </div>
</template>


<script>
import { defineComponent } from "vue";
import { Github as GithubIcon, LinkedinIn as LinkedinIcon, ExternalLinkAlt as OpenExternallyIcon, PlusCircle as PlusIcon, Upload as ArchiveIcon } from '@vicons/fa';
import { Databases, Storage } from "appwrite";
import { useMessage } from "naive-ui";


export default defineComponent({
    components: {
        GithubIcon,
        LinkedinIcon,
        OpenExternallyIcon,
        PlusIcon,
        ArchiveIcon
    },

    data() {
        return {
            github_url: null,
            website_url: null,
            project_end_date: null,
            project_name: "New Project",
            project_description: null,
            is_featured: false,
            project_start_date: null,
            banner_image: "https://via.placeholder.com/450x250",
            raw_banner_image_file: null,

            message: useMessage(),
        }
    },

    methods: {
        async saveProject() {
            const database = new Databases(this.appwrite);
            const storage = new Storage(this.appwrite);

            let storedFileMetaData, storedFile = null;

            if (this.raw_banner_image_file !== null) {
                storedFileMetaData = await storage.createFile("63435e2242450d79564a", "unique()", this.raw_banner_image_file);
                storedFile = await storage.getFileView("63435e2242450d79564a", storedFileMetaData.$id);
            }

            if (this.project_end_date !== null) {
                this.project_end_date = new Date(this.project_end_date).toISOString()
            }

            if (this.project_start_date !== null) {
                this.project_start_date = new Date(this.project_start_date).toISOString()
            }

            database.createDocument("634358a1a37903a67ee0", "634358a8383af6216985", 'unique()', {
                github_url: this.github_url,
                website_url: this.website_url,
                project_end_date: this.project_end_date,
                project_name: this.project_name,
                project_description: this.project_description,
                is_featured: this.is_featured,
                project_start_date: this.project_start_date,
                banner_image: storedFile !== null ? storedFile.href : this.banner_image
            }).then(() => {
                this.message.success("Succesfully added project");
            }).catch(() => {
                this.message.error("Message couldn't be added, try again later");
                storage.deleteFile("63435e2242450d79564a", storedFileMetaData.$id);
            });
        },

        showImage(data) {
            this.toBase64(data.file.file).then(base64Image => {
                this.banner_image = base64Image;
                this.raw_banner_image_file = data.file.file;
            }).catch(_error => {
                console.error(_error);
                this.message.error("Error uploading image, please try again.");
            })
        },

        toBase64(file) {

            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            })
        }
    }
})
</script>