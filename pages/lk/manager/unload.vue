<template>
    <main class="unload-page">
        <div class="unload-page__title">
            <PageTitle :title="page.title" :tasks="page.tasks" />
        </div>
        <div class="unload-page__orders">
            <UnloadOrders />
        </div>
        <div class="unload-page__unload">
            <UnloadOrder />
        </div>
    </main>
</template>

<script setup lang="ts">
import "~/assets/styles/pages/unload/unload-page.scss";

import PageTitle from "~/ui/PageTitle.vue";

const page = {
    title: "Выгрузка",
    tasks: ["Собирает фотографии из заказов пользователей.", "Выгружает по папкам."]
};
</script>