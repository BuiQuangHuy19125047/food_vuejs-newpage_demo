import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fNameValid: true,
        lNameValid: true,
        emailValidRequired: true,
        emailValidForm: true,
        pwdRequired: true,
        pwdLength: true,
        phoneNum: true,
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
        },
        changeStateEmailRequired(state, curState) {
            state.emailValidRequired = curState
        },
        changeStateEmailForm(state, curState) {
            state.emailValidForm = curState
        },
        changeStatePwdRequired(state, curState) {
            state.pwdRequired = curState
        },
        changeStatePwdLength(state, curState) {
            state.pwdLength = curState
        },
        setStateEmail(state,curState){
            state.emailValidForm = curState
            state.emailValidRequired = curState
        },
        setStatePwd(state,curState){
            state.pwdRequired = curState
            state.pwdLength = curState
        },
        changeStatePhoneNum(state, curState) {
            state.phoneNum = curState
        },
    },

    actions: {
        handleChangeStateFName(context, curState){
            context.commit("changeStateFName",curState)
        },
        handleChangeStateLName(context, curState){
            context.commit("changeStateLName",curState)
        },
        handleChangeStateEmailRequired(context, curState){
            context.commit("changeStateEmailRequired",curState)
        },
        handleChangeStateEmailForm(context, curState){
            context.commit("changeStateEmailForm",curState)
        },
        handleSetTrueEmail(context, curState){
            context.commit('setStateEmail',curState)
        },
        handleSetTruePwd(context, curState){
            context.commit('setStatePwd',curState)
        },
        handleChangeStatePwdRequired(context, curState){
            context.commit("changeStatePwdRequired",curState)
        },
        handleChangeStatePwdLength(context, curState){
            context.commit("changeStatePwdLength",curState)
        },
        handleChangeStatePhoneNum(context, curState){
            context.commit("changeStatePhoneNum",curState)
        },
    }
});