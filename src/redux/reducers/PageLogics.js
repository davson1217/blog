const initialState = {
    darkMode : true,
    menu: "portfolio"
}

const PageLogic = (state = initialState, action) => {

    switch (action.type) {
        case "MODE":
        return{
            ...state,
            darkMode:!state.darkMode
        }
        case "MENU_NAVIGATE":
        return{
            ...state,
            menu: action.menu
        }

        default: return state;
    }
}

export default PageLogic;
