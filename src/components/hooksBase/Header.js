import React from "react";

function Header({ updateComponents }) {
  console.log("Header Page");
  return (
    <div>
      <h2>Header</h2>
    </div>
  );
}

export default React.memo(Header);
