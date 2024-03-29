import React, { useEffect, useState } from 'react'
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import axios from 'axios';
import '../StyleSheet/Komunitas.css'
import '../StyleSheet/Psikolog.css'
import loading from '../Asset/homePage/login.gif'
import { getProfil } from "../redux/action/profilAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function Psikolog() {
  const { profil, isLoading } = useSelector((state) => state.profil);


  console.log(profil);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfil());
  }, []);

  return (
      <div className="Psikolog mb-3">
        <div className="container d-flex flex-column">
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center vh-100">
              <img className="img-fluid" src={loading} alt="" />
            </div>
          ) : (profil
            .filter((item) => item.status === "psikolog")
            .map((item) => {
              return (
                // <div key={item.id} className="card-psikolog mx-auto mt-3 ">
                //   <div className="row">
                //     <div className=" col-3 card-img-psikolog">
                //       <img className="img-fluid d-flex align-items-center justify-content-center" src={item.avatar} alt="" />
                //     </div>
                //     <div className="col-6 card-title-piskolog d-flex flex-column">
                //       <div className="mb-auto mt-3 psikolog-name">
                //         <h3>{item.nama}</h3>
                //       </div>
                //       <div className="psikolog-job">
                //         <h4>{item.tempatkerja}</h4>
                //         <h5>{item.alamat}</h5>
                //       </div>
                //     </div>
                //     <div className="col-3 d-flex justify-content-center align-items-center">
                //       <div className="btn-card-piskolog ">
                //         <Link
                //           to={`detailPsikolog/${item.id}`}
                //           className="nav-link">
                //           <button
                //             type="button"
                //             className="btn btn-primary m-auto p-2">
                //             Lihat
                //           </button>
                //         </Link>
                //       </div>
                //     </div>
                //   </div>
                // </div>
                <div className="card-komunitas w-100 mx-auto">
                  <div className="komunitas mb-3">
                      <div key={item.id} className="card mx-auto mb-3">
                        <div className="row">
                          <div className="profil-komunitas col-3 text-center">
                            <img
                              className="img-fluid p-2"
                              src={item.avatar}
                              alt=""
                            />
                          </div>
                          <div className="deskripsi-komunitas col-6 d-flex flex-column">
                            <h6 className="mt-2">
                              <b>{item.nama}</b></h6>
                            <div className="alamat-komunitas mt-auto">
                              <h5>{item.tempatkerja}</h5>
                            </div>
                          </div>
                          <div  className="show-komunitas col-3 d-flex align-items-center justify-content-center">
                            <Link
                              to={`detailPsikolog/${item.id}`}
                              className="nav-link">
                              <button className="btn btn-primary">Lihat</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              );
            }))}
        </div>
      </div>
  );
}

export default Psikolog