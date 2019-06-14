import Api from '@/services/api'

export default{
    show(rows){
        return Api().get('maindata',rows)
    },
    add_user(rows){
        return Api().patch('adduser',rows)
    },
    user_info(rows){
        return Api().get('users',rows)
    },
    show_user(rows){
        return Api().get('user',rows)
    },
    add_game(rows){
        return Api().patch('addgame',rows)
    },
    update(rows){
        return Api().patch('update_users',rows)
    },
    add(post_id){
        return Api().patch('like',post_id)
    },
    add_post(post_content){
        return Api().patch('addpost',post_content)
    },
    delete_post(post_id){
        return Api().patch('deletepost',post_id)
    },
    games(rows){
        return Api().get('showgames',rows)
    },
    likes(like){
        return Api().patch('like',like)
    }
}