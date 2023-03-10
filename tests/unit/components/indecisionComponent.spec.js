import { shallowMount } from "@vue/test-utils";
import IndecisionComponent from "@/components/IndecisionComponent"
describe('indecicion component', ()=>{

    let wrapper
    let clgSpy
    global.fetch = jest.fn( ()=> Promise.resolve({
        json: ()=> Promise.resolve({
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/2.gif"
        })
    }))

    beforeEach(()=>{
        wrapper = shallowMount(IndecisionComponent)
        clgSpy = jest.spyOn(console, 'log')
    })

    test('Debe hacer match con el snapshop',()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el imput no debe disparar nada (console.log)', async()=>{
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')
        const input=wrapper.find('input')
        await input.setValue('Hola Mundo')
        expect( clgSpy ).toHaveBeenCalled()
        expect (getAnswerSpy).not.toHaveBeenCalled()
    })

    test('Escribir el sígno "?" dispara el fetch', async()=>{
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer')
        const input=wrapper.find('input')
        await input.setValue('Hola Mundo?')
        expect( clgSpy ).toHaveBeenCalled()
        expect (getAnswerSpy).toHaveBeenCalled()

    })

    test('Pruebas en getAnswer', async()=>{
        await wrapper.vm.getAnswer()
       const img =wrapper.find('img')
    
        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Sí!')

    })

    test('Fallo en la peticion APi', async()=>{
        fetch.mockImplementationOnce(()=> Promise.reject('API is down'))
        await wrapper.vm.getAnswer()
        
        const img =wrapper.find('img')
        console.log(wrapper.vm.img)
        console.log(img.exists())
        console.log(wrapper.vm.answer)
       // expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se puede cargar el API')
        
    })
})