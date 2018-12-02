import { shallowMount } from "@vue/test-utils"
import Home from "../../components/Home"

describe("Home", () => {
    it("is a vue instance", () => {
        const wrapper = shallowMount(Home)
        expect (wrapper.isVueInstance()).toBeTruthy()
    })
})