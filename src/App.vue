<template>
    <section class="container-fluid px-4">
        <div class="row">
            <div v-if='isLoading'>Грузим</div>
            <Controls :amountItems='items.length'
                @setUrl='handleUrl'
                @setQuery='handleQuery'
                @setForm='handleForm'
            />
            <Table v-if='searchedItems.length > 0' :items='offsetItems' @setSort='handleSort' @setRowView='handleRowView'/>
            <Pagination v-if='amountPages > 1' :amountPages='amountPages' @setPage='handlePage'/>
            <Form v-if='showForm' @setRow='handleInsertRow' @setForm='handleForm'/>
            <RowView v-if='rowView' :row='rowView' />
        </div>
    </section>
</template>

<script>
import Controls from './components/controls'
import Table from './components/table'
import Pagination from './components/pagination'
import Form from './components/form'
import RowView from './components/row-view'

export default {
    name: 'Root',
    data () {
        return {
            dataUrl: '',
            rowView: {},
            isLoading: false,
            items: [],
            page: 1,
            limit: 50,
            query: '',
            sort: {
                direction: '',
                value: ''
            },
            showForm: false
        }
    },
    computed: {
        searchedItems: function() {
            if (this.query) {
                const filteredItems = this.items.filter(row => {
                    const isMatched = Object.keys(row).some(cell => {
                        return row[cell].toString().search(this.query) !== -1
                    })

                    return isMatched
                })

                return filteredItems
            }

            return this.items
        },
        sortedItems: function () {
            if (this.sort.value) {
                let sortedItems = this.searchedItems

                return sortedItems.sort((a, b) => {
                    if (typeof a[this.sort.value] === 'object') {
                        a[this.sort.value] = Object.values(a[this.sort.value]).join(' ')
                    }

                     if (typeof b[this.sort.value] === 'object') {
                        b[this.sort.value] = Object.values(b[this.sort.value]).join(' ')
                    }

                    if (a[this.sort.value] > b[this.sort.value]) {
                        return this.sort.direction === 'asc' ? 1 : -1
                    }

                    if (a[this.sort.value] < b[this.sort.value]) {
                        return this.sort.direction === 'asc' ? -1 : 1
                    }

                    return 0
                })
            }

            return this.searchedItems
        },
        offsetItems: function() {
            return this.sortedItems.slice(this.limit * (this.page - 1), this.limit * this.page)
        },
        amountPages: function() {
            return Math.ceil(this.sortedItems.length/ this.limit)
        }
    },
    methods: {
        handleForm: function (value) {
            this.showForm = value
        },
        handleInsertRow: function(value) {
            let itemsUpdated = []
            itemsUpdated.push(value)
            itemsUpdated.push(...this.items)
            this.items = itemsUpdated
        },
        handleRowView: function(value) {
            this.rowView = value
        },
        handlePage: function (value) {
            this.page = value
        },
        handleSearch: function (value) {
            this.query = value
        },
        handleSort: function (value) {
            this.sort = value
        },
        handleQuery: function(value) {
            this.query = value
        },
        handleUrl: function (value) {
            this.dataUrl = value
            this.resetState()
        },
        resetState: function () {
            this.page = 1
            this.rowView = {}
            this.query = ''
            this.sort = {
                direction: '',
                value: ''
            }
        }
    },
    components: {
        Controls,
        Table,
        Pagination,
        Form,
        RowView
    },
    watch: {
        dataUrl: async function () {
            this.isLoading = true
            try {
                const data = await this.request(this.dataUrl)
                this.items = data
            } catch (error) {
                throw new Error(error)
            } finally {
                this.isLoading = false
            }
        }
    },
    mounted () {
    }
}
</script>
