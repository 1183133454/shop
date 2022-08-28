function Random(){
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    let str = ''
    for(let i = 0; i < 24;i++){
        str +=chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return str
}
export default{
    Random
}