import { shallowMount } from "@vue/test-utils"
import Home from "../../components/Home"

describe("Home", () => {

    const build = () => {
        const wrapper = shallowMount(Home)

        return {
            wrapper
        }
    }
    it("is a vue instance", () => {
        const { wrapper } = build()
        expect (wrapper.isVueInstance()).toBeTruthy()
    })

    it("renders correctly", () => {
        const { wrapper } = build()
        expect(wrapper.element).toMatchSnapshot()
    })
})