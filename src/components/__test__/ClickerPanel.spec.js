import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ClickerPanel from '../ClickerPanel.vue'

describe("ClickerPanel", () => {
    it("compte les attaques puis remet à zéro", async () => {
        const wrapper = mount(ClickerPanel)
        const counter = wrapper.get('[data-testid="counter"]')
        expect (counter.text()).toBe("0")
        const [attack, reset] = wrapper.findAll("button")
        await attack.trigger("click")
        await attack.trigger("click")
        expect(counter.text()).toBe("2")
        await reset.trigger("click")
        expect(counter.text()).toBe("0")
        wrapper.unmount()
    })
})