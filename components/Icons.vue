<script setup lang="ts">
    defineProps<{
        linkIcon: string;
        title: string;
        linkSite: string;
    }>();
</script>

<template>
    <a :href="linkSite" target="_blank">
        <img :title="title" class="w-10" :src="linkIcon" />
    </a>
</template>
