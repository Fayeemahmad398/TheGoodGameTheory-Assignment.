import React from "react";

import loading_img from "../assets/loading_img.gif";

export default function Homepage({ data }) {
  return (
    <div className="container">
      {data.length > 0 ? (
        data.map((obj) => {
          return (
            <div key={obj.id} className="box">
              <div className="img-box">
                <img src={obj.image_url} alt="" />
              </div>
              <div className="content-box">
                <div className="name-ph">
                  <div className="name">
                    <span>
                      Name :<strong>{obj.name.slice(0, 15)}</strong>
                    </span>
                  </div>
                  <div className="ph">
                    <span>
                      Ph: <strong>{obj.ph ? obj.ph : "4.2"}</strong>
                    </span>
                  </div>
                </div>
                <div>
                  <span>Tagline :</span>
                  <strong>{obj.tagline.slice(0, 30)}</strong>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "150px",
          }}
        >
          <div className="loading-img">
            <img src={loading_img} alt="" id="loading" />
          </div>
        </div>
      )}
    </div>
  );
}
