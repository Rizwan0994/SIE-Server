import React from 'react'
import Modal from 'react-bootstrap/Modal';
import tick from '../svgs/tick.svg'
import './model.css'

const HeadingStyle = {
    fontSize: "27px",
    fontWeight: "700",
    fontFamily: "Playfair Display",
  };
  const paraStyle = {
    fontSize: "15px",
    fontWeight: "400",
    fontFamily: "Open Sans",
    padding:"5% 10% 5% 10%",
  };

export default function Model1({showModal,handleCloseModal,handleContinueFromModal}) {
  return (
    <>
     <Modal
      show={showModal} onHide={handleCloseModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
     
    >
      <Modal.Header closeButton style={{border:"none"}}>
      </Modal.Header>
      <Modal.Body className='mb-3'  style={{margin:"%"}}>
        <center> <div style={{marginTop:"-5%"}} className="row justify-content-center"> <img className='pb-5' src={tick} alt="" style={{width:"13%"}} /></div>
        <h4 style={HeadingStyle}>Great! You have created your listing.</h4>
        <p style={paraStyle}>
        All there is left to do now is set your prices and availability and make your listing available for our users.
        </p>
        <button  className='mb-5'  style={{
                    backgroundColor: "#00BFFF",
                    fontSize: "16px",
                    width: "80%",
                    padding: "2.0%",
                    fontWeight: "700",
                    borderStyle: "none",
                    borderRadius: "25px",
                    color: "white",
                  }} onClick={handleContinueFromModal}>Continue</button></center>
      
      </Modal.Body>

    </Modal>
    </>

      
  )
}

