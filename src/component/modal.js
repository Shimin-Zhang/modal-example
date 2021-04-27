import React, { useState, useEffect } from 'react';

export default function Modal(props) {

  const {
    open=false,
    setOpen= () => {},
    title = "A crocodile cannot stick its tongue out.",
    titleIcon = "",
    options = {},
    children
  } = props;

  const closeModalBg = (e) => {
    if (e.target.id === 'modal-bg') {
      setOpen(false);
    }
  };

  const closeModal = () => {
    setOpen(false);
  }


  const DummyMaxData = () => {
    const className ="text-xl";
    return (
      <>
        <p className={className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin vulputate mattis. Vivamus risus urna, dapibus et eros non, commodo dictum nisi. Sed orci tellus, consequat ac neque at, blandit aliquet nibh. Praesent non leo vel mi elementum varius. Aenean placerat consequat augue id ornare. Aenean ut vehicula tortor. Phasellus quam velit, egestas eu est nec, lacinia facilisis ex. Quisque sollicitudin libero felis, in malesuada nulla tristique quis. Maecenas ullamcorper augue at enim volutpat faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec consectetur bibendum justo, id accumsan sem porta sit amet. Vivamus dictum, ante id consectetur eleifend, odio mauris auctor risus, sit amet auctor augue augue et dui. Donec sed placerat erat. Praesent eros diam, aliquet egestas porttitor a, mollis sit amet felis. In dapibus tellus orci, quis fringilla lorem pharetra sit amet. Vivamus a ante facilisis, sollicitudin orci in, placerat nisi.
        </p>
      </>
    )
  }

  const CloseIcon = () => {
    return  (
      <div className="w-full flex flex-grow flex-row-reverse z-20">
        <span className="cursor-pointer pt-6 pr-8 fixed" onClick={closeModal}>X</span>
      </div>
    );
  };

  const Title = () => {
    return (<div className="fixed full:w-3/4 full:min-h-0 full:max-h-72/100 xl:max-h-85/100 lg:w-8/12 2xl:w-1/2 bg-gray-50 t-0 pt-10 pb-3 px-7 text-xl bg-gray-50">
      <h2 className="text-gray-700 font-semibold text-left capitalize align-baseline">
        {title}
      </h2>
    </div>);
  };


  const Body = () => {
    return (<div className="w-full mt-24 px-7 text-left overflow-y-scroll">
      <DummyMaxData />
      { children }
    </div>
    );
  };

  const Actions = () => {
    return (
      <div className="px-7 mt-4 flex flex-row flex-wrap">
        <div className="mx-auto w-full full:w-1/2 px-0 full:px-4 my-6">
          <button className="w-full text-white text-xl rounded px-0 full:px-4 py-2 bg-indigo-500 hover:bg-indigo-600"> Action </button>
        </div>
        <div className="mx-auto w-full full:w-1/2 px-0 full:px-4 my-6">
          <button className="w-full text-white text-xl rounded px-0 full:px-4 py-2 bg-indigo-500 hover:bg-indigo-600"> Action </button>
        </div>
        <div className="mx-auto w-full full:w-1/2 px-0 full:px-4 my-4">
          <button className="w-full text-white text-xl rounded px-4 py-2 bg-indigo-500 hover:bg-indigo-600"> Action </button>
        </div>
      </div>
    )
  };

  const ModalBody = () => {
    return <div className="w-full min-h-full mx-auto full:w-3/4 full:min-h-0 full:max-h-72/100 xl:max-h-85/100 lg:w-8/12 2xl:w-1/2 bg-gray-50 flex flex-col rounded-sm pb-2" >
      <div className="t-0 flex w-full bg-gray-50 ">
        <CloseIcon />
        <Title />
      </div>
      <Body />
      <Actions />
    </div>;
  };


  return (
    open &&
    (
      <>
        <div id="modal-bg" onClick={closeModalBg} className="fixed top-0 h-full w-screen bg-gray-700 bg-opacity-75 top-0 flex flex-col justify-center">
          <ModalBody />
        </div>
      </>
    )
  );
};
