import React, { useState, useEffect } from 'react';

export default function Modal(props) {

  const {
    open=false,
    setOpen= () => {},
    title = "A crocodile cannot stick its tongue out.",
    titleIcon = "ok",
    options = {},
    children
  } = props;

  const icons = {
    ok: (
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>),
    alert: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
      </svg>)
  };

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
        <span className="cursor-pointer pt-4 pr-6 fixed" onClick={closeModal}>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </div>
    );
  };

  const TitleIcon = () => {
      return (titleIcon && <div className="mr-2 ">{icons[titleIcon]}</div>)
  };

  const Title = () => {
    return (<div className="fixed flex flex-row full:w-3/4 full:min-h-0 full:max-h-72/100 xl:max-h-85/100 lg:w-8/12 2xl:w-1/2 bg-gray-50 t-0 pt-10 pb-3 px-12 text-xl bg-gray-50">
      <TitleIcon />
      <h2 className="text-gray-700 font-semibold text-left capitalize">
        {title}
      </h2>
    </div>);
  };


  const Body = () => {
    return (<div className="w-full mt-24 px-12 text-left overflow-y-scroll">
      <DummyMaxData />
      { children }
    </div>
    );
  };

  const Actions = () => {
    return (
      <div className="px-12 mt-4 flex flex-row flex-wrap">
        <div className="mx-auto w-full full:w-1/2 px-0 full:px-4 my-4">
          <button className="w-full text-white text-2xl rounded-md px-0 full:px-4 py-2 full:py-4 bg-indigo-500 hover:bg-indigo-600"> Action </button>
        </div>
        <div className="mx-auto w-full full:w-1/2 px-0 full:px-4 my-4">
          <button className="w-full text-white text-2xl rounded-md px-0 full:px-4 py-2 full:py-4 bg-indigo-500 hover:bg-indigo-600"> Action </button>
        </div>
        <div className="mx-auto w-full full:w-1/2 px-0 full:px-4 my-4">
          <button className="w-full text-white text-2xl rounded-md px-0 full:px-4 py-2 full:py-4 bg-indigo-500 hover:bg-indigo-600"> Action </button>
        </div>
      </div>
    )
  };

  const ModalBody = () => {
    return <div className="w-full min-h-full mx-auto full:w-3/4 full:min-h-0 full:max-h-72/100 xl:max-h-85/100 lg:w-8/12 2xl:w-1/2 bg-gray-50 flex flex-col rounded-sm pb-12" >
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
