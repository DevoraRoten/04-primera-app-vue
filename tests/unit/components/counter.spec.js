import { shallowMount } from "@vue/test-utils";
import Counter  from "@/components/Counter";

describe(' Counter.vue', ()=>{
    test('debe de hacer match con el snapshot', ()=>{
        
        const wrapper = shallowMount(Counter)
        expect(wrapper.html()).toMatchSnapshot()

    })
    test('h2 debe tener el valor "Counter"',()=>{
        const wrapper = shallowMount(Counter)
        expect( wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })
    test('valor por defecto del counter debe ser 15',()=>{
        const wrapper = shallowMount(Counter)
       /* const h3Tags = wrapper.findAll('h3')
        console.log(h3Tags[1])
        expect(h3Tags[1].text()).toBe('15')*/
        const h3Tag=wrapper.find('[data-testid="counter"]').text()
        expect(h3Tag).toBe('15')
    })

    test('debe incrementar 1 el valor del contador',async()=>{
        const wrapper = shallowMount(Counter)
        const incrementarBtn = wrapper.find('button')
        await incrementarBtn.trigger('click')
        const h3Tag=wrapper.find('[data-testid="counter"]').text()
        expect(h3Tag).toBe('16')
    })
})