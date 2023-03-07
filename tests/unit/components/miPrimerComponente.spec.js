import { shallowMount } from "@vue/test-utils";
import MiPrimerComponente  from "@/components/MiPrimerComponente";

describe(' MiPrimerComponente.vue', ()=>{
    test('debe de hacer match con el snapshot', ()=>{
        
        const wrapper = shallowMount(MiPrimerComponente)
        expect(wrapper.html()).toMatchSnapshot()

    })
})