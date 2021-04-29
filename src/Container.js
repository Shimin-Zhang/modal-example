import React, { useState } from 'react';
import Modal from './component/Modal';
import Documentation from './Documentation';
import Header from './Header';

export default function Container() {
  const [role, setRole] = useState(false);
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
      <Header role={role} setRole={setRole}/>

      <Documentation role={role}/>
    </>
  )
};
