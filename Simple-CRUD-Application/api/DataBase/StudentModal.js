const mongoose = require('mongoose')


const student = {
    fullName:{type: String,required:true},
    fname:{type: String,required:true},
    mname:{type: String,required:true},
    fmobile:{type: Number,required:true,unique:true},
    mmobile:{type: Number,required:true,unique:true},
    address:{type:String,required:true}

}



const studentSchema = mongoose.Schema(student)

module.exports = mongoose.model('Student',studentSchema)