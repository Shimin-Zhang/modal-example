import React from 'react';

export default function Modal({ open, options, children}) {

  return (
    open &&
    (
      <div> Hello World </div>
    )
  );
};
