export default function(instance){
    return{
        add(payload){
            return instance.post('users/add/',payload);
        },
        login(payload){
            return instance.post('users/login/',payload);
        },
        logout(payload){
            return instance.get('users/logout/',payload);
        },
    }
}