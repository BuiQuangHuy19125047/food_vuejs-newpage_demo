import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fNameValid: true,
        lNameValid: true,
    },

    // getters: {
    //     getUsername: state => {
    //         return "Username: " + state.username
    //     },

    //     getAge: state => {
    //         return "Age: " + state.age
    //     }
    // },

    mutations: {
        changeStateFName(state, curState) {
            state.fNameValid = curState
        },
        changeStateLName(state, curState) {
            state.lNameValid = curState
        }
    },

    actions: {
        handleChangeStateFName(context, curState){
            context.commit("changeStateFName",curState)
        },
        handleChangeStateLName(context, curState){
            context.commit("changeStateLName",curState)
        }
    }
});