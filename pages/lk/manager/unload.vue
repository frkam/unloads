<template>
    <main class="unload-page">
        <div class="unload-page__title">
            <PageTitle :title="page.title" :tasks="page.tasks" />
        </div>
        <div class="unload-page__orders">
            <div v-if="pending">Загрузка...</div>
            <ul v-else-if="orders" class="orders">
                <li v-for="order in orders" :key="order.id">
                    <OrderCard :order="order" />
                </li>
            </ul>
            <div v-else-if="error">{{ error.message }}</div>
        </div>
        <UnloadOrder />
    </main>
</template>

<script setup lang="ts">
import "~/assets/styles/pages/unload/unload-page.scss";
import "~/assets/styles/pages/unload/orders.scss";
import PageTitle from "~/ui/PageTitle.vue";
import type { Order } from '~/types/order'

const page = {
    title: "Выгрузка",
    tasks: ["Собирает фотографии из заказов пользователей.", "Выгружает по папкам."]
};

type OrdersListResponse = {
    response: {
        status: number
        data: Order[]
        count: number
        function: unknown
    }
}

const { data: orders, error, pending } = await useAPIFetch("/e.scripts?page=pages:unload&event=get", {
    parseResponse: (response) => JSON.parse(response),
    transform: (response: OrdersListResponse): Order[] => response.response.data,
});
</script>