
const intialState = {
    langType: []
};

const lang = (state = intialState, action) => {
    switch (action.type) {
        case "LANGUAGE_SELECT": return {
            ...state,
            langType: action.payload,
        }
        default: return state;
    }
}

export default lang;

