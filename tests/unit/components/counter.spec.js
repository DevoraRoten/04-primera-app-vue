import { shallowMount } from "@vue/test-utils";
import Counter  from "@/components/Counter";

describe(' Counter.vue', ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper= shallowMount(Counter)
    })

    test('debe de hacer match con el snapshot', ()=>{
        
      //  const wrapper = shallowMount(Counter)
        expect(wrapper.html()).toMatchSnapshot()

    })
    test('h2 debe tener el valor "Counter"',()=>{
      //  const wrapper = shallowMount(Counter)
        expect( wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()
        expect(h2Value).toBe('Counter')
    })
    test('valor por defecto del counter debe ser 15',()=>{
       // const wrapper = shallowMount(Counter)
       /* const h3Tags = wrapper.findAll('h3')
        console.log(h3Tags[1])
        expect(h3Tags[1].text()).toBe('15')*/
        const h3Tag=wrapper.find('[data-testid="counter"]').text()
        expect(h3Tag).toBe('15')
    })

    test('debe incrementar 1 y decrementar 2 el valor del contador',async()=>{
        //const wrapper = shallowMount(Counter)
        const [incrementarBtn, decrementarBtn] = wrapper.findAll('button')
        await incrementarBtn.trigger('click')
        const h3Tag=wrapper.find('[data-testid="counter"]').text()
        expect(h3Tag).toBe('16')

        //boton de decrementar

        await decrementarBtn.trigger('click')
        await decrementarBtn.trigger('click')
        const h3TagD=wrapper.find('[data-testid="counter"]').text()
        expect(h3TagD).toBe('14')

    })
    test('props start debe ser igual que ariba en el html', ()=>{
        const{start} =wrapper.props()
        const h3TagD=wrapper.find('[data-testid="counter"]').text()
        expect(Number(h3TagD)).toBe(start)
    })
    test('mostrar el titulo de la prop',()=>{
        const wrapper = shallowMount(Counter, {props:{title:'Hola Mundo'}})
        expect(wrapper.find('h2').text()).toBe('Hola Mundo')
    })
})