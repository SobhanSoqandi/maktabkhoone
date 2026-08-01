import React from "react";
import Filters from "../(Filters)/Filters";

function Toolbar() {
  return (
    <div className="hidden lg:block bg-white p-4 border border-gray-200 rounded-xl">
      <Filters />
    </div>
  );
}

export default Toolbar;
