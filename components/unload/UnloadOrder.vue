<template>
    <div class="unload-page__unload">
        <div v-if="!selectedOrderId" class="notice" data-color="light-purple">
            Для того, чтобы посмотреть информацию о <span class="text-bold">выгрузке</span>, а также ее скачать, нажмите на
            требуемую выгрузку в столбце слева
        </div>

        <div v-if="pending && status !== 'idle'">Загрузка...</div>
        <div v-else-if="order" class="block unload">
            <h3 class="text-16 text-bold">Ссылка для скачивания архива Выгрузки (.zip):</h3>
            <div>
                <a :href="downloadUrl" target="_blank" class="link base-margin-right">{{ downloadUrl }}</a>
                <span class="span-link" @click="copyUrlToClipboard">скопировать ссылку</span>
            </div>
        </div>
        <div v-else-if="error">
            {{ error.message }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { Order } from "~/types/order";

type OrdersListResponse = {
    response: {
        status: number;
        data: Order[];
        count: number;
        function: unknown;
    };
};

const selectedOrderId = useState<string>("selectedOrderId");

const {
    data: order,
    error,
    pending,
    status
} = await useAPIFetch("/e.scripts?page=pages:unload&event=get", {
    parseResponse: response => JSON.parse(response),
    transform: (response: OrdersListResponse): OrdersListResponse["response"]["data"][0] => response.response.data[0],
    query: {
        unload_id: selectedOrderId
    },
    immediate: false,
    key: `order:${selectedOrderId}`,
});

const downloadUrl = computed(() => {
    if (!order.value?.download_link) return

    return `https://seenday.com/${getIdFromDownloadLink(order.value?.download_link)}`
})

const copyUrlToClipboard = () => {
    if (downloadUrl.value) navigator.clipboard.writeText(downloadUrl.value)
}
</script>
