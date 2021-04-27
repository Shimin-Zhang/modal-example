import React, { useState } from 'react';
import Modal from './component/modal';

export default function Container() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal= () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className ="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <Modal open={modalOpen} setOpen={setModalOpen} />
    </>
  )
};
