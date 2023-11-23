
const intialState = {
    themeType: []
};

const theme = (state = intialState, action) => {
    switch (action.type) {
        case "THEME_CHANGE": return {
            ...state,
            themeType: action.payload,
        }
        default: return state;
    }
}

export default theme;

