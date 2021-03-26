<template>
    <div class=" table-responsive">
        <table class="table table-striped table-hover">
            <thead>
                <tr scope="row">
                    <th
                        scope="col"
                        v-for='(title, titleId) in titles'
                        :key='titleId'
                    >
                        {{ title }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td v-for='(cell, cellId) in Object.values(row)' :key='cellId'>
                        {{ typeof cell === 'object' ? Object.values(cell).join(' ') : cell }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Row-view',
    emits: ['setRowView'],
    props: {
        row: Object
    },
    data () {
        return {
        }
    },
    computed: {
        titles: function() {
            return Object.keys(this.row)
        },
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
