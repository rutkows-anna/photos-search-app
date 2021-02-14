import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ loading }) => {
  return <ClipLoader size={100} color={"#000000"} loading={loading} />;
};

export default Loader;
