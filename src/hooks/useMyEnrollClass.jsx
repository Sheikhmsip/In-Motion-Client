import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from '@tanstack/react-query';

const useMyEnrollClass = () => {
    const { user, loading } = useAuth()

  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: myEnroll = [] } = useQuery({
    queryKey: ["myEnroll", user?.email],
    enabled: !loading, 
    queryFn: async () => {
        const res = await axiosSecure(`/my-enroll-class?email=${user?.email}`)
        // console.log('res from axios', res)
        return res.data;  
       
      }
  });
  return [myEnroll, refetch];
};

export default useMyEnrollClass;