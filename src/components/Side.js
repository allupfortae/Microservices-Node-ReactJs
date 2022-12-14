import React, { useState } from "react";
const axios = require("axios").default;

const Side = () => {
  const [inputs, setInputs] = useState({
    name: "",
    job: "",
    descriptions: "",
    twitter: "",
    linkedin: "",
  });

  const handleChanges = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSumbitBtn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://strange-fox-shoulder-pads.cyclic.app/api/people",
        inputs
      );
      if (response) {
        return response.status(200).json({ msg: "sucessfully added" });
      }
    } catch (err) {
      console.log(err);
    }
    handleChanges();
  };

  return (
    <div className="flex-1 flex items-center flex-col">
      <div className="fixed">
        <h1 className="text-center text-3xl mt-5">Create a feed</h1>
        <form
          type="submit"
          onSubmit={handleSumbitBtn}
          className="flex flex-col items-center gap-5 justify-center mt-10 bg-[#202020] w-[380px] p-20  pt-12 rounded-[20px]"
        >
          <input
            type="text"
            name="name"
            value={inputs.name}
            placeholder="Username or Name"
            className="px-2 py-2 rounded-[6px] w-[240px] bg-[black]"
            onChange={handleChanges}
          />
          <input
            type="text"
            name="job"
            value={inputs.job}
            placeholder="Current Job"
            className="px-2 py-2 rounded-[6px] w-[240px] bg-[black]"
            onChange={handleChanges}
          />
          <textarea
            type="text"
            name="descriptions"
            value={inputs.descriptions}
            placeholder="Descriptions "
            className=" bg-[black] px-2 py-2 w-[240px] h-[200px]"
            onChange={handleChanges}
          />
          <input
            type="text"
            name="twitter"
            value={inputs.twitter}
            placeholder="http://twitter/example.com"
            className="px-2 py-2 rounded-[6px] w-[260px]  bg-[black]"
            onChange={handleChanges}
          />
          <input
            type="text"
            name="linkedin"
            value={inputs.linkedin}
            placeholder="http://linkedin/in/jon-doe.com"
            className="px-2 py-2 rounded-[6px] w-[260px] bg-[black]"
            onChange={handleChanges}
          />
          <button
            type="submit"
            className="text-center bg-[black] rounded-[10px] p-2 text-xl
					"
          >
            Add to feed
          </button>
        </form>
      </div>
    </div>
  );
};

export default Side;
