import Api from '@/services/api'

export default{
    show(rows){
        return Api().get('maindata',rows)
    }
}