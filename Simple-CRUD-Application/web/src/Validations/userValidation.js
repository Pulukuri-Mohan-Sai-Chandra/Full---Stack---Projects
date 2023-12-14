let validFullName = (name)=>{return name.length > 0}
let validMobileNumber = (number)=>{return number.length === 10}


export const validator = {
    fullName:validFullName,
    fname:validFullName,
    mname:validFullName,
    fmobile:validMobileNumber,
    mmobile:validMobileNumber,
    address:validFullName,
}

export const isError = (errorObj)=>{
    if(Object.keys(errorObj).length === 0 ){
        return false
    }
    return true 
}

