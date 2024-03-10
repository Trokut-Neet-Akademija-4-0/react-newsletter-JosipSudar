import logoDesktop from "../assets/illustration-sign-up-desktop.svg";
import iconList from "../assets/icon-list.svg";
import iconCheck from "../assets/icon-success.svg";
import { useState } from "react";
function Newsletter() {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const errormsg = "The field is left empty";
  const wrongEmail = "Please provide a valid email address";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.match(regex)) {
      setSuccess(true);
    } else if (email === "") {
      setError(errormsg);
    } else if (email !== regex) {
      setCheck(wrongEmail);
    }
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      {success ? (
        <div className=" bg-white text-black flex p-7 rounded-3xl flex-col w-2/4">
          <img src={iconCheck} alt="icon" className=" w-8 h-8 mb-4" />
          <h1 className=" font-extrabold text-[50px] leading-tight">
            Thanks for subscribing!
          </h1>
          <p className=" mt-3">
            A confirmation email has been sent to <span>{email}</span>. Please
            open it and click the button inside to confirm your subscription
          </p>
          <button className="btn" onClick={() => setSuccess(false)}>
            Dismiss message
          </button>
        </div>
      ) : (
        <div className=" bg-slate-100 text-black lg:flex-row p-7 rounded-3xl flex flex-col-reverse">
          <div className=" w-3/5 p-5">
            <h1 className=" font-extrabold text-[60px] mt-[5px] mb-[25px]">
              Stay Update!
            </h1>
            <h2 className=" text-[16px] mb-[30px]">
              Join 60,000+ product managers receiving monthly updates on:
            </h2>
            <ul className=" space-y-4">
              <li className=" flex text-[16px]">
                <img src={iconList} alt="icon" />
                Product discovery and building what matters
              </li>
              <li className=" flex">
                <img src={iconList} alt="icon" />
                Measuring to ensure updates are a success
              </li>
              <li className=" flex">
                <img src={iconList} alt="icon" />
                And much more!
              </li>
            </ul>
            <form onSubmit={handleSubmit}>
              <div className=" flex justify-between">
                <label className="mb-2">email address</label>
                {error && (
                  <label className="mb-2" style={{ color: "#ea7972" }}>
                    {errormsg}
                  </label>
                )}
                {check && (
                  <label className="mb-2" style={{ color: "#ea7972" }}>
                    {wrongEmail}
                  </label>
                )}
              </div>
              <input
                type="text"
                placeholder="email@company.com"
                className=" w-[450px] h-[45px] p-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className=" btn w-[450px] h-[45px]">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div className=" lg:w-2/5 w-[100%]">
            <img src={logoDesktop} alt="logo" />
          </div>
        </div>
      )}
    </div>
  );
}

export { Newsletter };
