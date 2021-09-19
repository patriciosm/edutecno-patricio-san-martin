import { shallowMount } from "@vue/test-utils";
import Header from '@/components/Header.vue'

describe('Testeo componente Header', () => {
    it('Testeando titulo', () => {
        const titulo = 'Nuevo titulo'
        const colorTitulo = 'green'
        const wrapper = shallowMount(Header, {
            propsData: {
                titulo,
                colorTitulo
            }
        })
        expect(wrapper.find("h1").text()).toMatch(titulo)
        expect(wrapper.find("h1").element.style.color).toBe('green')
    })
})