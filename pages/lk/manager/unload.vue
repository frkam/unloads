<template>
    <main class="unload-page">
        <div class="unload-page__title">
            <PageTitle :title="page.title" :tasks="page.tasks" />
        </div>
        <div class="unload-page__tasks">Tasks</div>
        <div class="unload-page__unload notice" data-color="light-purple">Для того, чтобы посмотреть информацию о
            <span class="text-bold">выгрузке</span>, а также ее скачать, нажмите на требуемую выгрузку в столбце слева
        </div>
    </main>
</template>

<script setup>
import "~/assets/styles/pages/unload/unload-page.scss";
import PageTitle from "~/ui/PageTitle.vue";

const page = {
    title: "Выгрузка",
    tasks: ["Собирает фотографии из заказов пользователей.", "Выгружает по папкам."]
}
</script>