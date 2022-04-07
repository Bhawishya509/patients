import React, { useEffect } from "react";
import Header from "./HeaderComponent/Header";
import Bottom from "./BottomComponent/Bottom";
// import Api from "./Api/Api";
const App = () => {
  // const [patient, update_patient] = useState([]);
  // const [file, update_file] = useState([]);
  // const [doctor, update_doctor] = useState([]);
  // const [appoiment, update_appoiment] = useState([]);
  useEffect(() => {}, []);
  return (
    <>
      {/* <Api
        pvalue={update_patient}
        avalue={update_appoiment}
        fvalue={update_file}
        dvalue={update_doctor}
      />
      ; */}
      <Header />
      <Bottom />
    </>
  );
};

export default App;
