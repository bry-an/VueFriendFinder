import { shallowMount, createLocalVue } from "@vue/test-utils"
import SurveyList from "../../components/SurveyList"
import SurveyQuestion from "../../components/SurveyQuestion"
import Vuex from "Vuex"
import initialState from "../../store/state"

const localVue = createLocalVue()
localVue.use(Vuex)


describe("SurveyList", () => {
    let state


    const build = () => {
        const wrapper = shallowMount(SurveyList, {
            localVue, 
            store: new Vuex.Store({
                state
            })
        })
        return {
            wrapper,
            SurveyQuestion: () => wrapper.find(SurveyQuestion),
            button: () => wrapper.find("#result")
        }
    }
    beforeEach(() => {
        state = { ...initialState}
    })

    it("is a Vue instance", () => {
        const { wrapper } = build()
        expect(wrapper.isVueInstance()).toBe(true)
    })

    it("Renders Survey Question child", () => {
        const { SurveyQuestion } = build()

        expect(SurveyQuestion().exists()).toBe(true)
    })

    it("Renders complete button", () => {
        const { button } = build()

        expect(button().exists()).toBe(true)
    })
})