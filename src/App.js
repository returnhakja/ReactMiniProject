import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailPage from "./components/pages/DetailPage";

function App() {
  useEffect(() => {
    const SERVICE_KEY =
      "jIOntE9gO%2FGbEdIL68gTGVa05rWl0dDOGukYYzSZEqaHI7NfYbrgdx1tDFhu%2FcLwvyS4I7CdONwdO2w6EwJvnA%3D%3D";
    const url = `?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=100&resultType=json`;

    axios
      .get("/api" + url)
      .then((res) => console.log(res.data.getAttractionKr.item));
  }, []);

  return (
    <div>
      <DetailPage></DetailPage>
    </div>
  );
}

export default App;
