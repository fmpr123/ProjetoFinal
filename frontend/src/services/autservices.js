import Api from '@/services/api'

export default{
    show(rows){
        return Api().get('posts',rows)
    },
    store(credentials){
        return Api().post('posts',credentials)
    }
}