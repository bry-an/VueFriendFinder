import mutations from "../../store/mutations"

describe("addAnswer", () => {
  it("increments state if addAnswer mutation called", () => {
    const { addAnswer } = mutations
    const payload = {
      index: 0,
      answer: 1
    };
    const state = {
        userAnswers: []
    }

    expect(state.userAnswers.length).toEqual(0);

    mutations.addAnswer(state, payload)

    expect(state.userAnswers.length).toEqual(1);
  });
});
