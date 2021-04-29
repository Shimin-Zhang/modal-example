import React, { useState, useEffect, useMemo } from 'react';

export default function Modal(props) {

  //TODO: Validation Props

  const {
    open = false,
    setOpen = () => {},
    onOpen = () => {},
    onClose = () => {},
    onMount = () => {},
    onUnmount = () => {},
    title = {
      content: "",
      icon: {
        type: 'alert',
        element: null,
        color: 'red'
      }
    },
    content = "",
    children,
    actions = [ { text: 'Ok' }],
    key=""
  } = props;

  useEffect(() => {
    onMount();
    return () => {
      onUnmount();
    };
  }, []);

  const icons = {
    ok: (
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>),
    alert: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
      </svg>)
  };

  const closeModalBg = (e) => {
    if (e.target.id === 'modal-bg') {
      setOpen(false);
      onClose();
    }
  };

  const closeModal = () => {
    setOpen(false);
    onClose ();
  }

  const CloseIcon = () => {
    return  (
      <div className="w-full flex flex-grow flex-row-reverse z-20">
        <button aria-label="close-dialog" className="cursor-pointer pt-4 pr-6 fixed" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    );
  };

  const TitleIcon = () => {
    return (
      title?.icon &&
      <div className={`mr-2 text-${(title?.icon?.color || "gray")}-500`}>       { title?.icon?.element || icons[title?.icon?.type] }
      </div>);
  };

  const Title = () => {
    return (<div className="fixed flex flex-row full:w-3/4 full:min-h-0 full:max-h-72/100 xl:max-h-85/100 lg:w-8/12 2xl:w-1/2 bg-gray-50 t-0 pt-10 pb-3 px-12 text-xl bg-gray-50">
      <TitleIcon />
      <h2 className="text-gray-700 font-semibold text-left capitalize" id={`modal-${key}-title`}>
        {title?.content}
      </h2>
    </div>);
  };


  const TextContent = () => {
    return (content && <p className="text-xl" id={`modal-${key}-content`}>{content}</p>)
  };

  const Body = () => {
    return (<div className="w-full mt-28 px-12 text-left overflow-y-scroll">
      <TextContent />
      { children }
    </div>
    );
  };

  const ActionButton = ({ action = {}}) => {
    const actionFn = () => {
      if (action?.action) {
        action?.action()
      };
      closeModal();
    };

    const buttonThemes = {
      'indigo-dark': "w-full text-white text-2xl rounded-md px-0 full:px-4 py-2 full:py-4 bg-indigo-500 hover:bg-indigo-600",
      'indigo-light': "w-full text-indigo-500 text-2xl rounded-md px-0 full:px-4 py-2 full:py-4 bg-white border-2 border-indigo-500 hover:border-indigo-600 hover:text-indigo-600",
      'green-dark': "w-full text-white text-2xl rounded-md px-0 full:px-4 py-2 full:py-4 bg-green-500 hover:bg-green-600",
      'red-dark': "w-full text-white text-2xl rounded-md px-0 full:px-4 py-2 full:py-4 bg-red-500 hover:bg-red-600",
      'default': "w-full text-white text-2xl rounded-md px-0 full:px-4 py-2 full:py-4 bg-indigo-500 hover:bg-indigo-600"
    };

    return (
      <div className="mx-auto w-full full:w-1/2 px-0 full:px-4 my-4">
        <button
          onClick={ actionFn }
          className= { buttonThemes[(action?.theme || 'default')]}
        >
        { action?.text || 'Submit' }
        </button>
      </div>
    );
  };

  const Actions = () => {
    return (
      <div className="px-12 mt-4 flex flex-row flex-wrap">
        {
          actions.map((a, i) => {
            return <ActionButton action={a} key={i} />
          })
        }
      </div>
    )
  };

  const ModalMain = () => {
    return <div className="w-full min-h-full mx-auto full:w-3/4 full:min-h-0 full:max-h-72/100 xl:max-h-85/100 lg:w-8/12 2xl:w-1/2 bg-gray-50 flex flex-col rounded-sm pb-6" aria-modal="true" role="dialog" aria-labelledby={ `modal-${key}-title`} aria-describedby={`modal-${key}-content`}>
      <div className="t-0 flex w-full bg-gray-50 ">
        <CloseIcon />
        <Title />
      </div>
      <Body />
      <Actions />
    </div>;
  };

  const bgClass = useMemo(() => {
    let c = "fixed top-0 left-0 h-full w-screen bg-gray-700 bg-opacity-75 top-0 flex flex-col justify-center transition-opacity duration-500";
    if (!open) {
      c = c + " hidden";
    }
    return c;
  }, [open]);

  return (
    open &&
    (
      <>
        <div id="modal-bg" onClick={closeModalBg} className={bgClass} role="none">
          <ModalMain />
        </div>
      </>
    )
  );
};
