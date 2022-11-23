import React, { useState } from "react";

const Ventajas = () => {
  const [imagen, setImage] = useState(1);

  return (
    <>
      <div className="flex h-[100vh] bg-white dark:bg-black justify-center items-center gap-2">
        <div className="w-[80%] flex justify-end">
          {imagen === 1 ? (
            <>
              <img src="/img/ventajas/Back01.png" alt=""  style={{height:'600px'}}/>
            </>
          ) : imagen === 2 ? (
            <>
              <img src="/img/ventajas/Back02.png" alt="" style={{height:'600px'}} />
            </>
          ) : imagen === 3 ? (
            <>
              <img src="/img/ventajas/Back03.png" alt=""  style={{height:'600px'}}/>
            </>
          ) : (
            <>
              <img src="/img/ventajas/Back04.png" alt="" style={{height:'600px'}} />
            </>
          )}
        </div>
        <div className="w-[20%] grid gap-3">
          <img
            src="/img/ventajas/Back01.png"
            alt=""
            style={{ height: "140px", cursor: "pointer" }}
            onClick={() => setImage(1)}
          />
          <img
            src="/img/ventajas/Back02.png"
            alt=""
            style={{ height: "140px", cursor: "pointer" }}
            onClick={() => setImage(2)}
          />
          <img
            src="/img/ventajas/Back03.png"
            alt=""
            style={{ height: "140px", cursor: "pointer" }}
            onClick={() => setImage(3)}
          />
          <img
            src="/img/ventajas/Back04.png"
            alt=""
            style={{ height: "140px", cursor: "pointer" }}
            onClick={() => setImage(4)}
          />
        </div>
      </div>
    </>
  );
};

export default Ventajas;
