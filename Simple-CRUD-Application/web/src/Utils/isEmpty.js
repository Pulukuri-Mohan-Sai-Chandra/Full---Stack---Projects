export const isEmpty = (object) =>{

    const keys = Object.keys(object)
    console.log("Keys",keys)
    if(keys.length == 0){
        return true
    }
return false
}