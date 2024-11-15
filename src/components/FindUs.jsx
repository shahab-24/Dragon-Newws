import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="my-4">
      <h2>Find Us On</h2>
      <div className="join join-vertical flex my-2">
        <button className="btn join-item justify-start gap-4"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item justify-start gap-4"><FaTwitter></FaTwitter>  Twitter</button>
        <button className="btn join-item justify-start gap-4"><FaInstagram></FaInstagram> Instagram</button>
      
      </div>
    </div>
  );
};

export default FindUs;
