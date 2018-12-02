import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import SurveyList from "../../components/SurveyList";
import SurveyQuestion from "../../components/SurveyQuestion";
import Vuex from "Vuex";
import initialState from "../../store/state";
import store from "../../store";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("SurveyList", () => {
  let state;
  let mutations;

  const build = () => {
    const wrapper = shallowMount(SurveyList, {
      localVue,
      store: new Vuex.Store({
        state,
        mutations
      })
    });
    const wrapperQuestion = shallowMount(SurveyQuestion, {
      localVue,
      store: new Vuex.Store({
        state,
        mutations
      })
    });
    return {
      wrapper,
      wrapperQuestion,
      SurveyQuestion: () => wrapper.find(SurveyQuestion),
      button: () => wrapper.find("#result")
    };
  };

  beforeEach(() => {
    state = { ...store.state };
    mutations = {
      addAnswer: jest.fn()
    };

    // state.userAnswers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  });

  it("is a Vue instance", () => {
    const { wrapper } = build();
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("Renders Survey Question child", () => {
    const { SurveyQuestion } = build();

    expect(SurveyQuestion().exists()).toBe(true);
  });

  // it("Renders complete button if all answers checked", () => {
  //     const { button } = build()

  //     expect(button().exists()).toBe(true)
  // })

  it("calls addAnswer mutation if an answer button checked", () => {
    const { wrapperQuestion } = build();

    const radio = wrapperQuestion.find("input[type='radio']");
    radio.setChecked();
    expect(mutations.addAnswer).toHaveBeenCalled();
  });
});
