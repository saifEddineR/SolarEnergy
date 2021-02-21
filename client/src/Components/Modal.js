import { Modal, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';

function ModalButton() {
  const [modalShow, setModalShow] = useState(false);
  const [input, setInput] = useState({
    name: null,
    img: null,
    desc: null,
    price: null,
  });
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        Add a Product
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Add a new Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formGroupName'>
              <Form.Label>Product name</Form.Label>
              <Form.Control
                value={input.name}
                name='name'
                onChange={handleInput}
                type='text'
                placeholder='Enter a product name'
              />
            </Form.Group>
            <Form.Group controlId='formGroupDesc'>
              <Form.Label>Product description</Form.Label>
              <Form.Control
                value={input.desc}
                name='desc'
                onChange={handleInput}
                type='text'
                placeholder='Enter a description'
              />
            </Form.Group>
            <Form.Group controlId='formGroupPrice'>
              <Form.Label>Product price</Form.Label>
              <Form.Control
                value={input.price}
                name='price'
                onChange={handleInput}
                type='text'
                placeholder='Enter a price'
              />
            </Form.Group>
            <Form.Group controlId='formGroupImg'>
              <Form.Label>Product image</Form.Label>
              <Form.Control
                value={input.img}
                name='img'
                onChange={handleInput}
                type='text'
                placeholder='Enter an image link'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={() => setModalShow(false)}>
            Close
          </Button>
          <Button variant='success' onClick={() => setModalShow(false)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalButton;
