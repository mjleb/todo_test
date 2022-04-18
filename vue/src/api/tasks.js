export default function(instance){
    return{
        list(payload){
            return instance.get('tasks/?field='+payload.field+'&order_by='+payload.order_by+'&page='+payload.page,payload);
        },
        add(payload){
            return instance.post('tasks/add/',payload);
        },
        update(payload){
            return instance.put('tasks/update/'+payload.id+'/',payload);
        },
    }
}