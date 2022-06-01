import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyPortfolio = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data, event) => {};

  return (
    <div>
      <h3 className="font-bold text-3xl text-primary text-center my-5">
        My Profile
      </h3>
      <form
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          name="user_name"
          disabled
          value={user?.displayName || ""}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="user_email"
          name="email"
          disabled
          value={user?.email || ""}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xs"
        />
        <select
          name="education"
          className="select select-bordered w-full max-w-xs"
        >
          <option>Phd</option>
          <option>Master</option>
          <option>Bachelor</option>
          <option>HSC</option>
          <option>SSC</option>
        </select>
        <input
          type="text"
          name="Location"
          placeholder="Your Location"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="linkedIn"
          placeholder="LinkedIn Link"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="text"
          name="GitHub"
          placeholder="GitHub Link"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="portfolio"
          placeholder="Portfolio Link"
          className="input input-bordered w-full max-w-xs"
        />

        <button
          type="submit"
          // onClick={}
          className="btn btn-primary w-full max-w-xs"
        >
          Submit Info
        </button>
      </form>
    </div>
  );
};

export default MyPortfolio;
