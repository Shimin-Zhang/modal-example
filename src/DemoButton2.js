
import React, { useState } from 'react';
import Modal from './component/Modal';

export default function DemoModal2() {
  const [modal2Open, setModal2Open] = useState(false);


  const toggleModal2= () => {
    setModal2Open(!modal2Open);
  };

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
      <button onClick={toggleModal2} className ="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-5">Toggle Modal 2</button>

      <Modal key={2} num={2} open={modal2Open} setOpen={setModal2Open}
        title={modal2Title} >
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label for="hero-field" className="leading-7 text-sm text-gray-600">Placeholder 1</label>
          <input type="text" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          <label for="hero-field" className="leading-7 text-sm text-gray-600">Placeholder 2</label>
          <input type="text" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          <label for="hero-field" className="leading-7 text-sm text-gray-600">Placeholder 3</label>
          <input type="text" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      </Modal>
    </>
  );
};
