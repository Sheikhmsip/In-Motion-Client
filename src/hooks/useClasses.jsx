// import { useEffect, useState } from "react"

// const useClasses = () =>{
//     const [classes, setClasses] = useState([]);
//     const [loading, setLoading] = useState(true);
// console.log(classes);
//     useEffect(() =>{
//         fetch('https://summer-camp-server-sheikhmsip.vercel.app/classes')
//         .then(res => res.json())
//         .then(data => {
//             setClasses(data);
//             setLoading(false);
//         })
//     },[]);
// }
// export default useClasses;