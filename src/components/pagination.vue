<template>
    <footer>
        <nav>
            <a
                v-for='id in amountPages'
                :key='id'
                :href=' "#" + id'
                @click='handleClick(id)'
            >{{ id }}</a>
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
        }
    },
    computed: {
    },
    methods: {
        handleClick: function(value) {
            this.$emit('setPage', value)
        },
    },
    mounted () {
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
