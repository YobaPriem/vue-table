<template>
    <div class="">
        <p>Выбран пользователь <b>{{ row.firstName }} {{ row.lastName }}</b></p>
        <p>Описание:</p>
        <textarea v-model='description' readonly></textarea>
        <p>Адрес проижвания: <b>{{ row.address.streetAddress }}</b></p>
        <p>Город: <b>{{  row.address.city }}</b></p>
        <p>Провинция/штат: <b>{{  row.address.state }}</b></p>
        <p>Индекс: <b>{{  row.address.state }}</b></p>
    </div>
</template>

<script>
export default {
    name: 'Row-view',
    props: {
        row: Object
    },
    data () {
        return {
            description: ''
        }
    },
    computed: {
    },
    methods: {
    },
    watch: {
        row: function() {
            this.description = this.row.description
        }
    }
}
</script>
