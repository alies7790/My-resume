import {CHANGE_THEME} from './action'

const initialState={
     level_theme:""
};

const changeTheme=(state =initialState ,action) =>{
    switch(action.type){
        case(CHANGE_THEME):
            
                switch(state.level_theme){
                    case(''):
                        return{ level_theme:'second1'}
                    default:
                        return {level_theme:''}
                }
        default:
            return state
    }
};

export default changeTheme