import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Search } from '../Search/Search';
import './Popup-stylesheet.css';

export interface ILayoutModalProps {
  show?: boolean;
  title?: string;
  handleClose?: () => void;
}


export function Popup (props: ILayoutModalProps) {
  const {handleClose, show, title} = props;

  return (
    <>
      <Modal show={show} onHide={handleClose}  dialogClassName="popup-container-style">
        <Modal.Header className='popup-header'>
          <Button type="button" className="float-left btn-close" aria-label="Close" onClick={handleClose}></Button>
          <Modal.Title className='popup-title'>{title}</Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
           <Search/>
        </Modal.Body>
      </Modal>
    </>
  );
}
