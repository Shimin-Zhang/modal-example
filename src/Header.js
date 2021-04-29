import React from 'react';
import { Switch } from '@headlessui/react'

export default function Header({ role, setRole }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl"></span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Navigation</a>
            <a className="mr-5 hover:text-gray-900">Modal</a>
            <a className="mr-5 hover:text-gray-900">Button</a>
            <a className="mr-5 hover:text-gray-900">Gallery</a>
          </nav>
          <div className="mt-2">
            I am a: Product Manager
            <Switch
              checked={role}
              onChange={() => { setRole(!role) }}
              className={classNames(
                role ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex align-bottom flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2'
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={classNames(
                  role ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                )}
              />
            </Switch>
            Developer
          </div>
        </div>
      </header>
  );
}
