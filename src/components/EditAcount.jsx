import "./EditAccount.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function EditAccount(props) {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const params = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${baseURL}/users/${params.id}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setEmail(response.data.email);
        setAddress(response.data.address);
        setPhone(response.data.phone);
      } catch (err) {
        console.log(err.msg);
      }
    };
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios({
        method: "PATCH",
        url: `${baseURL}/users/${params.id}`,
        data: { email, address, phone },
      });
      navigate(`/account/${params.id}`);
    } catch (err) {
      console.log(err.msg);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col d-none d-sm-none d-lg-flex text-start justify-content-center align-items-center imgLogin">
          <div className="m-5">
            <div className="m-0">
              <h2 className="textTitle">Edit</h2>
              <h2 className="textTitle">Account</h2>
            </div>
          </div>
        </div>

        {/* Responsive */}
        <div className="col d-sm-flex d-lg-none text-center justify-content-center align-items-center imgLogin responsiveHeight">
          <div className="mt-2">
            <h2 className="textTitleResponsive">Edit</h2>
            <h2 className="textTitleResponsive">Account</h2>
          </div>
        </div>

        {/* Termina Responsive */}

        <div className="container-fluid col-sm-12 col-lg-6 text-start d-flex justify-content-center  align-items-center">
          <div className="px-3 inputWidth mt-2">
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label hidden htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control my-2 rounded-0"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label hidden htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control my-2 rounded-0"
                    id="address"
                    name="address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div>
                  <label hidden htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control my-2 rounded-0"
                    id="phone"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <br />
                <div className="d-grid p-0">
                  <button
                    type="submit"
                    className="btn btn-dark rounded-0 btn-lg p-1"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditAccount;
