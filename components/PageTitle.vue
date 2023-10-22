<template>
    <div class="page-title block color gray">
        <h1 class="page-title__header text-bold">{{ title }}</h1>
        <p class="text-14 text-bold">Выполняет работу:</p>
        <ul class="page-title__list">
            <li v-for="task in tasks" :key="task"><span class="text-bold">-</span> {{ task }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
type Props = {
    title: string
    tasks: string[]
}

const { title, tasks } = defineProps<Props>();
</script>