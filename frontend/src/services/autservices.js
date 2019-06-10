import Api from '@/services/api'

export default{
    show(rows){
        return Api().get('maindata',rows)
    },
    update(user_info){
        return Api().patch('update_users',user_info)
    },
    add(post_id){
        return Api().patch('like',post_id)
    }
}