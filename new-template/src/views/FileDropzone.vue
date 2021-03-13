<template>
    <Card>
        <template #header>
            File drag and drop uploader
        </template>
        <div>
            <Dropzone v-slot:default="{files, removeFileByIndex, active, browse}" ref="dropzone" @change="dropzoneFiles = $event"></Dropzone>
        </div>

        <div v-if="dropzoneFiles.length > 0">
        <div class="mt-4">These are the files that you have added:</div>
        <ul>
            <li v-for="file in dropzoneFiles">{{file.name}}</li>
        </ul>
        </div>
    </Card>
</template>

<script>
export default {
    name: "FileDropzone",

    data(){
        return {
            dropzoneFiles:[],
        }
    },
}
</script>

<style scoped>

</style>