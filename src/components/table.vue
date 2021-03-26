<template>
    <div class=" table-responsive">
        <table class="table table-striped table-hover">
            <thead>
                <tr scope="row">
                    <th
                        scope="col"
                        v-for='(title, titleId) in titles'
                        :key='titleId'
                        @click='handleSort(title)'
                    >
                        {{ title }}
                        <span class="sort-pointer" v-html='showDirectionPointer(title)'></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    scope="row"
                    v-for='(row, rowId) in items'
                    :key='rowId'
                    @click='handleRowClick(row)'
                >
                    <td
                        scope="col"
                        v-for='(cell, cellId) in Object.values(row)'
                        :key='cellId'
                    >
                        {{ typeof cell === 'object' ? Object.values(cell).join(' ') : cell }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Table',
    emits: ['setSort', 'setRowView'],
    props: {
        items: Array
    },
    data () {
        return {
            selectedRow: {},
            sort: {
                direction: '',
                value: ''
            }
        }
    },
    computed: {
        titles: function() {
            return Object.keys(this.items[0])
        },
    },
    methods: {
        handleRowClick: function(value) {
            let selectedRow = {}

            if (value !== this.selectedRow) {
                selectedRow= value
            }

            this.selectedRow = selectedRow
            this.$emit('setRowView', selectedRow)
        },
        handleSort: function(value) {
            let direction = ''

            this.sort.value = value
            this.sort.direction === 'asc' ? direction = 'desc' : direction = 'asc'
            this.sort.direction = direction

            this.$emit('setSort', this.sort)
        },
        showDirectionPointer: function(value) {
            if (value === this.sort.value) {
                return this.sort.direction === 'asc' ? '&#9650;' : '&#9660;'
            }
        },
    },
    mounted () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    th {
        position: relative;
        padding-right: 20px !important;
    }

    .sort-pointer {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 15px;
        height: 21px;
        display: inline-block;
    }
</style>
