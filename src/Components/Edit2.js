// const {id} = useParams()

// const [user, setUser] = useState({
//   name: "",
//   email: "",
//   password: "",
//   age: "",
//   country: "",
//   state : "",
//   phone_number :""
// });

// const Updatedata = async(data,id)=>{
//     const Result = await axios.put(`https://63886c49d94a7e50409b1179.mockapi.io/DashboardData/${id}`,{...data})
//         console.log(Result);
    
// }
// const{name,email,password,age,country,state,phone_number} = user

// const handleChange = (e) => {
//   setUser({ ...user, [e.target.name]: e.target.value });
// };

// useEffect(()=>{
//   loaddata()
// },[])



// const onSubmit = async(e)=>{
//   e.preventDefault()

//   await axios.put(`https://63886c49d94a7e50409b1179.mockapi.io/DashboardData/${id}`,user)
 

// }

//   const loaddata = async()=>{
//     const Result1 =  await axios.get(`https://63886c49d94a7e50409b1179.mockapi.io/DashboardData/${id}`)
//             console.log(Result1);
//             setUser(Result1.data)
//   }
 

//<form onSubmit={(e) => onSubmit(e)}>