import { mount } from '@vue/test-utils'
import Table from '@/components/table'

describe('Table', () => {
    const dummyObj = {
        id: 101,
        firstName: 'Sue',
        lastName: 'Corson',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296',
        address: {
            streetAddress: '9792 Mattis Ct',
            city: 'Waukesha',
            state: 'WI',
            zip: '22178'
        },
        description: 'et lacus magna dolor...',
    }

    const component = mount(Table, {
        props: {
            items: [
                dummyObj
            ]
        }
    })

    test('Titles is computed', () => {
        expect(component.vm.titles).toEqual(Object.keys(component.vm.items[0]))
    })

    test('Emmits sort', () => {
        component.find('th').trigger('click')
        expect(component.emitted()).toHaveProperty('setSort')
    })

    test('Emmits click on row', () => {
        component.find('tr').trigger('click')
        expect(component.emitted()).toHaveProperty('setRowView')
    })
})
