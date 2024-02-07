/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../utils/loading/Loading";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  // const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const userInfo = JSON.parse(localStorage.getItem("user-info"));

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //       localStorage.removeItem("user-info");
  //       dispatch(userInfo?.token(null));
      
  //   }, 24 * 60 * 60 * 1000);

  //   return () => {
  //       clearTimeout(timeoutId);
  //   };
  // }, [dispatch, userInfo]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (
    userInfo?.token &&
    userInfo?.token !== null &&
    userInfo?.token !== undefined
  ) {
    return children;
  } else {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
};

export default PrivateRouter;
