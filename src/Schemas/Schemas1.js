import * as Yup from "yup"

const FILE_SIZE = 160 * 1024;  // 640kb

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];


export const SignUpSchma= Yup.object({
  name : Yup.string().min(5).max(25).required("Please Enter Name"),
  email : Yup.string().email().required("Please Enter email"),
  password : Yup.string().min(9).max(25).required("Please Enter Password"),
  age : Yup.string().min(1).max(100).required("Please Enter age"),
  country: Yup.string().matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,'Name can only contain letters.').min(3).max(22).required("Please Enter country Name"),
  state: Yup.string().matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,'Name can only contain letters.').min(3).max(22).required("Please Enter state Name"),
  phone_number : Yup.string().min(10).max(10).required("Please Enter phone"),
  ImageFile : Yup.mixed().required("image Required").test("FILE_SIZE", "Uploaded file is too large.", value => value && value.size <= FILE_SIZE).test("FILE_FORMAT", "Uploaded file has unsupported format.", value => value && SUPPORTED_FORMATS.includes(value.type))
})

