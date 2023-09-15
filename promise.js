createPost(){
    return new Promise(() =>{

    })
}
seensomeoneMessage(){
    return new Promise(() =>{

    })
}
Updateprofilephoto(){
    return new Promise(() => {

    })
}
const user = {
    username:'sidd',
    lastactivitytime: '13 of Jan'
}
updatelastactivitytime ={
    return new Promise((resolve, reject) = {
        setTimeout(() =>{
            user.lastactivitytime  = new Date().getTime();
            resolve(user.lastactivitytime)
        }, 1000)
    })
}

userupdateapost(){
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
    .then(([createPostresolves, updatelastactivitytimeresolves]) => {
        console.log(updatelastactivitytimeresolves)
    })
    .catch(err => console.log(err))

    }