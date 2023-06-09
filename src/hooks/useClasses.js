// import { useEffect, useState } from "react"

// const useClasses = () =>{
//     const [classes, setClasses] = useState([]);
//     const [loading, setLoading] = useState(true);
// console.log(classes);
//     useEffect(() =>{
//         fetch('http://localhost:5000/classes')
//         .then(res => res.json())
//         .then(data => {
//             setClasses(data);
//             setLoading(false);
//         })
//     },[]);
// }
// export default useClasses;