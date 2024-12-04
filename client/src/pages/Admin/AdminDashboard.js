import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import axios from "axios";

const AdminDashboard = () => {
  const [balance, setBalance] = useState(0);
  const [auth] = useAuth();
  const getBankBalance = async () => {
    const response = await axios.get("/api/v1/auth/get-balance", {
      headers: {
        Authorization: auth?.token,
      },
    });

    setBalance(response.data.balance);
  };

  useEffect(() => {
    getBankBalance();
  }, []);

  return (
    <Layout>
      <div className="top-banner ">
        <div className="xyauto text-center">
          <h3 className="big-txt text-light mt-5">Admin Dashboard</h3>
          <p className="text-secondary">Home / Dashboard</p>
        </div>
      </div>
      <div className="container-fluid m-3 px-5 pb-5 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-5 rounded-0 ">
              {/* <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : </h3> */}
              <h4 className="text-info">
                {" "}
                Name : <span>{auth?.user?.name}</span>
              </h4>
              <p className="text-secondary mb-1">Email : {auth?.user?.email}</p>
              <p className="text-secondary">
                {" "}
                Phone number : {auth?.user?.phone}
              </p>
              <p className="text-secondary"> Bank Balance : {balance}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
