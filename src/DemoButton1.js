import React, { useState } from 'react';
import Modal from './component/Modal';

export default function DemoModal1() {
  const [modal1Open, setModal1Open] = useState(false);
  const toggleModal1= () => {
    setModal1Open(!modal1Open);
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
  };

  const toggleFailure = () => {
    const notice = document.getElementById('failure-notice');
    notice.classList.toggle('hidden');
    setTimeout(() => {
      notice.classList.toggle('hidden');
    }, 3000);
  };

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

  const onMount=() => {
    console.log('mounted button 1');
  };

  const onUnmount=() => {
    console.log('unmounted button 1');
  };
  
  const modal1Content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin vulputate mattis. Vivamus risus urna, dapibus et eros non, commodo dictum nisi. Sed orci tellus, consequat ac neque at, blandit aliquet nibh. Praesent non leo vel mi elementum varius. Aenean placerat consequat augue id ornare. Aenean ut vehicula tortor. Phasellus quam velit, egestas eu est nec, lacinia facilisis ex. Quisque sollicitudin libero felis, in malesuada nulla tristique quis. Maecenas ullamcorper augue at enim volutpat faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec consectetur bibendum justo, id accumsan sem porta sit amet. Vivamus dictum, ante id consectetur eleifend, odio mauris auctor risus, sit amet auctor augue augue et dui. Donec sed placerat erat. Praesent eros diam, aliquet egestas porttitor a, mollis sit amet felis. In dapibus tellus orci, quis fringilla lorem pharetra sit amet. Vivamus a ante facilisis, sollicitudin orci in, placerat nisi.";

  return (
    <>
      <button onClick={toggleModal1} className ="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Toggle Modal 1</button>

      <Modal key={1} num={1} open={modal1Open} setOpen={setModal1Open} title={modal1Title} actions={modal1Actions} content={modal1Content} onUnmount={onUnmount} onMount={onMount}/>
    </>
  );
};
