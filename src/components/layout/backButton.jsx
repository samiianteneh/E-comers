import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)} className="font-semibold text-lg">
        <div className="flex justify-center items-center gap-2">
          <FaRegArrowAltCircleLeft /> Back
        </div>
      </button>
    </div>
  );
}
export default BackButton;
