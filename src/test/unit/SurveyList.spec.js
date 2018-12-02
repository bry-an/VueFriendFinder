import { shallowMount, createLocalVue } from "@vue/test-utils"
import SurveyList from "../../components/SurveyList"
import SurveyQuestion from "../../components/SurveyQuestion"
import Vuex from "Vuex"

const localVue = createLocalVue()
localVue.use(Vuex)


describe("SurveyList", () => {
    let store

    beforeEach(() => {
        store = new Vuex.Store({
            state: {}
        })
    })

    const build = () => {
        const wrapper = shallowMount(SurveyList)
        return {
            wrapper,
            SurveyQuestion: () => wrapper.find(SurveyQuestion)
        }
    }

    it("Renders Survey Question child", () => {
        const { SurveyQuestion } = build()

        expect(SurveyQuestion().exists().toBe(true))
    })
})