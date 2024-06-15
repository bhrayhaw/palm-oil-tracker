import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#123abc" loading={true} size={50} />
    </div>
  );
};

export default Loading;
