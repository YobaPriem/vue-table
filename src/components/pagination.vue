<template>
    <footer>
        <nav>
            <ul class="pagination">
                <li
                    v-for='id in amountPages'
                    :key='id'
                    class="page-item"
                    :class="{active: id === currentPage}"
                >
                    <a
                        :href=' "#" + id'
                        @click='handleClick(id)'
                        class="page-link"
                    >{{ id }}</a>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'Pagination',
    emits: ['setPage'],
    props: {
        amountPages: Number
    },
    data () {
        return {
            currentPage: 1
        }
    },
    computed: {
    },
    methods: {
        handleClick: function(value) {
            this.currentPage = value
            this.$emit('setPage', value)
        },
    },
    mounted () {
    }
}
</script>
