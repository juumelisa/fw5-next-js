import React, { useState } from "react";

const Modal = ({children, handleClose, loadingParam}) => {
  const styles = () => {}
  return (
    <div className="position-absolute top-0 start-0 position-fixed d-flex justify-content-center align-items-center vh-100 vw-100" style={{zIndex: 999}}>
      <div className="bg-dark opacity-25 vh-100 vw-100" onClick={() => {if(!loadingParam.isLoading) handleClose}}></div>
      <div className="col-12 col-md-4 position-absolute top-50 start-50 translate-middle bg-color6 p-5 d-flex justify-content-center align-items-center" style={{height: 300, borderRadius: 10}} >
          {children}
      </div>
    </div>
  )
}

export default Modal