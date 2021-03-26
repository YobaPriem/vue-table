<template>
    <header>
        <fieldset class="col-lg-4 col-md-8 col-sm-12 mx-auto">
            <div class="col-12 btn-group row gx-0 my-1">
                <button
                    class="col-lg-6 col-md-12 btn btn-outline-primary"
                    v-for='(item, id) in urls'
                    @click="handleUrlSelection(item.url)"
                    :key="id"
                >
                    {{ item.text }}
                </button>
            </div>
            <div class="col-12 btn-group row gx-0 my-1">
                <button
                    class="col-lg-6 col-md-12 btn btn-outline-primary"
                    v-if='amountItems > 0'
                    @click='handleSetForm'
                >
                    Добавить
                </button>
            </div>
            <div class="row g-0 my-1" v-if='amountItems > 0'>
                <input class="col-lg-9 col-md-8 col-sm-12" v-model='query' type="text" placeholder='Поиск'>
                <button class="col-lg-3 col-md-4 col-sm-12 btn btn-primary" @click='handleSetQuery'>Найти</button>
            </div>
        </fieldset>
    </header>
</template>

<script>
export default {
    name: 'Selector',
    emits: ['setUrl', 'setQuery'],
    props: {
        amountItems: Number
    },
    data () {
        return {
            query: '',
            urls: {
                small: {
                    text: 'Малый набор',
                    url: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
                },
                big: {
                    text: 'Большой набор',
                    url: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
                },
            },
        }
    },
    computed: {
    },
    methods: {
        handleSetQuery: function () {
            this.$emit('setQuery', this.query)
        },
        handleSetForm: function () {
            this.$emit('setForm', true)
        },
        handleUrlSelection: function (value) {
            this.$emit('setUrl', value)
        }
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
