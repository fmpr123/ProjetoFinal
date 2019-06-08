import Api from '@/services/api'

export default{
    show(rows){
        return Api().get('users',rows);
    },
    show(rows){
        return Api().get('posts',rows)
    }
}