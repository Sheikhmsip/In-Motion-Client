import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useInstructorClasses = () => {
    const { user, loading } = useAuth()
//   const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
        const res = await axiosSecure.get(`/instructor-class?email=${user?.email}`)
        // console.log('res from axios', res)
        return res.data;  
       
      }
  });
  return [classes, refetch];
};

export default useInstructorClasses;