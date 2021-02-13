import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ loading }) => {
    return (
        <ClipLoader size={100} color={"pink"} loading={loading} />
    )
}

export default Loader;