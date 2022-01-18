import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalForm = ({ ModalChildren, ModalTile, onHide, show, size }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        size={size}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">{ModalTile}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ModalChildren}</Modal.Body>
      </Modal>
    </>
  )
}

export default ModalForm
