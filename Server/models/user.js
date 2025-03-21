import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{ type: String },
    email:{ type: String },
    phoneNumber:{ type: Number },
    password:{ type: String },
    role:{ type: String , enum:['jobseeker','recruiter']},
        jobseeker:{
            education :[{
                institution:{ type: String },
                year:{ type: String },
                degree:{ type: String },
            }],
            experience :[{
                company:{ type: String },
                duration:{ type: String },
                jobRole:{ type: String },
            }],
        },
        recruiter:{
        companyName:{ type: String },
        companyWebsite:{ type: String },
        },
})