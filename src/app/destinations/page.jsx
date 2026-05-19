import React from "react";
import { CardS } from "../components/Card";

const DestinationPage = async () => {
  let res = await fetch("http://localhost:7000/destinations");
  let datas = await res.json();
  console.log(datas);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="font-bold text-center pt-3">
        Total Destination: {datas.length}
      </h1>
      <div className="grid grid-cols-3 gap-5 my-3 mb-7">
        {datas.map((data) => (
          <CardS key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
