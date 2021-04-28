import React, { useState } from 'react';
import Modal from './component/modal';

export default function Container() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const toggleModal1= () => {
    setModal1Open(!modal1Open);
  };

  const toggleModal2= () => {
    setModal2Open(!modal2Open);
  };

  const modal1Title = {
    content: "A crocodile cannot stick its tongue out",
    icon: {
      type: 'ok',
      color: 'green'
    }
  };

  const toggleSuccess = () => {
    const notice = document.getElementById('success-notice');
    notice.classList.toggle('hidden');
    setTimeout(() => {
      notice.classList.toggle('hidden');
    }, 3000);
  }

  const toggleFailure = () => {
    const notice = document.getElementById('failure-notice');
    notice.classList.toggle('hidden');
    setTimeout(() => {
      notice.classList.toggle('hidden');
    }, 3000);
  }

  const modal1Actions = [
    {
      text: 'Success',
      theme: 'green-dark',
      action: toggleSuccess
    },
    {
      text: 'Failure',
      theme: 'red-dark',
      action: toggleFailure
    },
    {
      text: 'Cancel',
      theme: 'indigo-light',
    }
  ];

  const modal2Actions = [
  ];

  const modal2Title = {
    content: "Some fungi create zombies, then control their minds",
    icon: {
      element: (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>),
      color: "red"
    }
  };

  return (
    <>
      <div id="success-notice" class="absolute top-0 px-8 py-2 rounded w-screen bg-green-300 hidden">
        <span class="sm:text-3xl text-2xl font-medium title-font text-center text-green-700 mb-20">Example Success Notice
        </span>
      </div>
      <div id="failure-notice" class="absolute top-0 px-8 py-2 rounded w-screen bg-red-300 hidden">
        <span class="sm:text-3xl text-2xl font-medium title-font text-center text-red-700 mb-20">Example Failure Notice
        </span>
      </div>
      <button onClick={toggleModal1} className ="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Toggle Modal 1</button>

      <Modal key={1} open={modal1Open} setOpen={setModal1Open} title={modal1Title} actions={modal1Actions} />

      <button onClick={toggleModal2} className ="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-5">Toggle Modal 2</button>

      <Modal key={2} open={modal2Open} setOpen={setModal2Open}
        title={modal2Title} />
    </>
  )
};
