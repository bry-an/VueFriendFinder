import { shallowMount } from "@vue/test-utils"
import SurveyQuestion from "../../components/SurveyQuestion"

describe("SurveyQuestion", () => {
    const build = () => {
        const wrapper = shallowMount(SurveyQuestion)

        return {
            wrapper
        }
    }

    it("renders the component", () => {
        const { wrapper } = build()
        
        expect(wrapper.exists()).toBe(true)

    })

    it("handles props accurately", () => {
        const { wrapper } = build()
        wrapper.setProps({
            question: 'question1'
        })
        expect(wrapper.vm.question).toBe('question1')
    })

})
