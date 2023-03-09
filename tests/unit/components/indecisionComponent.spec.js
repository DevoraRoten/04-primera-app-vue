import { shallowMount } from "@vue/test-utils";
import IndecisionComponent from "@/components/IndecisionComponent"
describe('indecicion component', ()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper = shallowMount(IndecisionComponent)
    })
    test('Debe hacer match con el snapshop',()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })
})