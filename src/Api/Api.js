import React, { useEffect } from "react";

const Api = (props) => {
  {
    /* patients  api*/
  }

  const pdata = () => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      .then((data1) => {
        return data1.json();
      })
      .then((data2) => {
        props.pvalue(data2);
      });
    console.log("1");
  };

  {
    /* appoinment details*/
  }

  const adata = () => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
      .then((data1) => {
        return data1.json();
      })
      .then((data2) => {
        props.avalue(data2);
      });
    console.log("2");
  };

  {
    /* file  api*/
  }

  const fdata = () => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/Files")
      .then((data1) => {
        return data1.json();
      })
      .then((data2) => {
        props.fvalue(data2);
      });
    console.log("3");
  };

  {
    /* doctor  api*/
  }

  const ddata = () => {
    fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
      .then((data1) => {
        return data1.json();
      })
      .then((data2) => {
        props.dvalue(data2);
      });
    console.log("4");
  };

  useEffect(() => {
    pdata();
    adata();
    fdata();
    ddata();
  }, []);
  useEffect(() => {}, []);
  return <></>;
};

export default Api;
