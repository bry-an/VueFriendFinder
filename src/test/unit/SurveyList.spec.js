import { shallowMount, createLocalVue } from "@vue/test-utils"
import SurveyList from "../../components/SurveyList"
import SurveyQuestion from "../../components/SurveyQuestion"
import Vuex from "Vuex"
import initialState from "../../store/state"
import store from "../../store"


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
        state = {}
        state = {...store.state}
        state.userAnswers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })

    it("is a Vue instance", () => {
        const { wrapper } = build()
        expect(wrapper.isVueInstance()).toBe(true)
    })

    it("Renders Survey Question child", () => {
        const { SurveyQuestion } = build()

        expect(SurveyQuestion().exists()).toBe(true)
    })

    it("Renders complete button if showButton is true", () => {
        const { wrapper } = build()
        const { button } = build()
        console.info('state', state.userAnswers)


        expect(button().exists()).toBe(true)
    })
})