<template>
  <div class="block order-card" :data-status="order.status">
    <!-- eslint-disable-next-line vue/no-v-html Используем v-html потому что API возвращает HTML тэг -->
    <div v-html="order.task_date" />
    <div>Статус задачи: <span class="text-bold">{{ order.status_text }}</span></div>
    <div>ID загрузки: <span class="text-bold">{{ order.id }}</span></div>
    <!-- eslint-disable-next-line vue/no-v-html Используем v-html потому что API возвращает HTML тэг -->
    <div v-html="order.event" />
    <div>Размер выгрузки: <span class="text-bold">{{ order.size }}</span></div>
  </div>
</template>

<script lang="ts" setup>
import type { Order } from '~/types/order'
const { order } = defineProps<{ order: Omit<Order, "download_link" | "telegram"> }>()
</script>