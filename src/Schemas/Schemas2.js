import * as Yup from "yup"


export const SignUpSchma1 = Yup.object({
    email : Yup.string().email().required("Please Enter email"),
    password : Yup.string().min(9).max(25).required("Please Enter Password"),
})