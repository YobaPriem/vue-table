<template>
    <div>
        <form v-if='!isCompleted' action="#" @submit="checkForm">
            <input type="number" v-model='fields.id' placeholder="ID" required>
            <input type="text" v-model='fields.firstName' placeholder="firstName" pattern="[A-Za-zА-Яа-я]+" required>
            <input type="text" v-model='fields.lastName' placeholder="lastName" pattern="[A-Za-zА-Яа-я]+" required>
            <input type="email" v-model='fields.email' placeholder="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
            <textarea v-model='fields.description' cols="20" rows="5" placeholder="description"></textarea>
            <input v-mask type="text" v-model='fields.phone' placeholder="phone" required>
            <input type="text" v-model='fields.address.streetAddress' placeholder="streetAddress">
            <input type="text" v-model='fields.address.city' placeholder="city" pattern="[A-Za-zА-Яа-я ]+">
            <input type="text" v-model='fields.address.state' placeholder="state" pattern="[A-Za-zА-Яа-я ]+">
            <input type="number" v-model='fields.address.zip' placeholder="zip">
            <button type='sumbit'>Добавить</button>
        </form>
        <div v-if='isCompleted'>
            <p>Данные добавлен в текущий набор данных.</p>
        </div>
        <div @click='closeForm'>X</div>
    </div>
</template>

<script>
export default {
    name: 'Form',
    emits: ['setRow', 'setForm'],
    props: {
    },
    data () {
        return {
            isCompleted: false,
            fields : {
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: {
                    streetAddress: '',
                    city: '',
                    state: '',
                    zip: 0,
                },
                description: ''
            }
        }
    },
    computed: {
    },
    methods: {
        checkForm: function(event) {
            event.preventDefault()

            const rowData = {}
            Object.assign(rowData, this.fields)
            this.isCompleted = true
            this.$emit('setRow', rowData)
        },
        closeForm: function() {
            this.$emit('setForm', false)
        }
    },
    watch: {
    },
    directives: {
        mask: {
            mounted: function(elem) {
                elem.addEventListener('input', function (event) {
                    if (!event.isTrusted) {
                        return
                    }

                    const matches = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)

                    matches[1] = '+7'

                    this.value = !matches[3] ? matches[1] + ' ' + matches[2] : matches[1] + ' ' + matches[2] + ' ' + matches[3] + (matches[4] ? '-' + matches[4] : '') + (matches[5] ? '-' + matches[5] : '')
                })
            }
        }
    },
    mounted () {
    }
}
</script>

<style scoped>
</style>
