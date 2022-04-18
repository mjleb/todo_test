export default {
    state:{
        user: {},
    },
    actions: {
       async login(ctx,user){
          ctx.commit('UpdateUserData',user);
        },
        async logout(ctx,user){
            ctx.commit('UpdateUserData',user);
        },
        async update(ctx,user){
            ctx.commit('UpdateUserData',user);
        },      
    },
    mutations:{
        UpdateUserData(state,user){
            state.user=user;
        },
    },
    getters:{
        UserData(state){
            return state.user;
        },
    }
}