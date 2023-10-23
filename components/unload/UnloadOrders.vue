<template>
  <div v-if="pending"><i class="fa-solid fa-loader fa-spin" /> Загрузка...</div>
  <ul v-else-if="orders" class="orders">
    <li v-for="order in orders" :key="order.id" @click="selectedOrderId = order.id">
      <OrderCard :order="order" />
    </li>
  </ul>
  <div v-else-if="error">{{ error.message }}</div>
</template>

<script lang="ts" setup>
import { Order } from '~/types/order';
import "~/assets/styles/pages/unload/orders.scss";

type OrdersListResponse = {
  response: {
    status: number
    data: Omit<Order, "download_link" | "telegram">[]
    count: number
    function: unknown
  }
}

const { data: orders, error, pending } = await useAPIFetch("/e.scripts?page=pages:unload&event=get", {
  parseResponse: (response) => JSON.parse(response),
  transform: (response: OrdersListResponse): OrdersListResponse["response"]["data"] => response.response.data,
});

const selectedOrderId = useState<string>("selectedOrderId")
</script>

