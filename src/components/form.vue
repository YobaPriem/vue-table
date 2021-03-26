<template>
    <div class="container p-4 shadow-lg">
        <div class="container__inner-wrapper">
            <form class='form' v-if='!isCompleted' action="#" @submit="checkForm">
                <div class="row g-2 my-2">
                    <div class="col-md">
                        <div class="form-floating">
                            <input id='id' class="form-control" type="number" v-model='fields.id' placeholder="ID" required>
                            <label for="id">ID</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <input id="firstName" class="form-control" type="text" v-model='fields.firstName' placeholder="firstName" pattern="[A-Za-zА-Яа-я]+" required>
                            <label for="firstName">firstName</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <input id="lastName" class="form-control" type="text" v-model='fields.lastName' placeholder="lastName" pattern="[A-Za-zА-Яа-я]+" required>
                            <label for="lastName">lastName</label>
                        </div>
                    </div>
                </div>
                <div class="row g-2 my-2">
                    <div class="col-md">
                        <div class="form-floating">
                            <input id="email" class="form-control" type="email" v-model='fields.email' placeholder="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
                            <label for="email">email</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <input id="phone" class="form-control" v-mask type="text" v-model='fields.phone' placeholder="phone" required>
                            <label for="phone">phone</label>
                        </div>
                    </div>
                </div>
                <div class="row g-2 my-2">
                    <div class="form-floating">
                        <textarea id="description" class="form-control" v-model='fields.description' cols="20" rows="5" placeholder="description"></textarea>
                        <label for="description">description</label>
                    </div>
                </div>
                <div class="row g-2 my-2">
                    <div class="col-md">
                        <div class="form-floating">
                            <input id="city" class="form-control" type="text" v-model='fields.address.city' placeholder="city" pattern="[A-Za-zА-Яа-я ]+">
                            <label for="city">city</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <input id="state" class="form-control" type="text" v-model='fields.address.state' placeholder="state" pattern="[A-Za-zА-Яа-я ]+">
                            <label for="state">state</label>
                        </div>
                    </div>
                </div>
                <div class="row g-2 my-2">
                    <div class="col-md">
                        <div class="form-floating">
                            <input id="streetAddress" class="form-control" type="text" v-model='fields.address.streetAddress' placeholder="streetAddress">
                            <label for="streetAddress">streetAddress</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <input id="zip" class="form-control" type="number" v-model='fields.address.zip' placeholder="zip">
                            <label for="zip">zip</label>
                        </div>
                    </div>
                </div>
                <button class="btn btn-outline-primary" type='sumbit'>Добавить</button>
            </form>
            <div v-if='isCompleted'>
                <p>Данные добавлены в текущий набор.</p>
            </div>
            <div class="btn-close" @click='closeForm'></div>
        </div>
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
    .container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        max-width: 550px;
    }

    .container__inner-wrapper {
        position: relative;
    }

    .btn-close{
        cursor: pointer;
        position: absolute;
        top: -20px;
        right: -20px;
        text-align: center;
    }
</style>
