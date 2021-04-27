import React from 'react';

export default function Modal({open=false, options, children}) {
  const DummyMaxData = () => {
    const className ="text-xl";
    return (
      <>
        <p className={className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin vulputate mattis. Vivamus risus urna, dapibus et eros non, commodo dictum nisi. Sed orci tellus, consequat ac neque at, blandit aliquet nibh. Praesent non leo vel mi elementum varius. Aenean placerat consequat augue id ornare. Aenean ut vehicula tortor. Phasellus quam velit, egestas eu est nec, lacinia facilisis ex. Quisque sollicitudin libero felis, in malesuada nulla tristique quis. Maecenas ullamcorper augue at enim volutpat faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec consectetur bibendum justo, id accumsan sem porta sit amet. Vivamus dictum, ante id consectetur eleifend, odio mauris auctor risus, sit amet auctor augue augue et dui. Donec sed placerat erat. Praesent eros diam, aliquet egestas porttitor a, mollis sit amet felis. In dapibus tellus orci, quis fringilla lorem pharetra sit amet. Vivamus a ante facilisis, sollicitudin orci in, placerat nisi.
        </p>
        <p className={className}>
        Suspendisse condimentum consequat molestie. Suspendisse potenti. Mauris non urna felis. Vivamus pretium ipsum quis risus lobortis, sit amet ornare magna imperdiet. Morbi efficitur mauris nec elit molestie interdum. Morbi auctor nisl vel eleifend pulvinar. Donec eu viverra tellus. Vivamus quis aliquam orci. Morbi commodo metus id hendrerit tincidunt. Nunc sed convallis lorem. Etiam eget lectus finibus, scelerisque magna id, mollis dui. Maecenas id elit ac ex egestas condimentum. Aenean in est purus. Vestibulum at convallis lectus, nec ultricies nisl. Praesent nibh dui, faucibus id dui quis, venenatis interdum risus. Phasellus sit amet sem purus.
        </p>
      </>
    )
  }

  const ModalBody = () => {
    return <div className="w-full min-h-full mx-auto md:w-3/4 md:min-h-0 md:max-h-72/100 xl:max-h-85/100 lg:w-8/12 2xl:w-1/2 bg-gray-50 overflow-y-scroll">
      <DummyMaxData />
      <DummyMaxData />
    </div>;
  };

  return (
    open &&
    (
      <div className="fixed top-0 h-full w-screen bg-gray-700 bg-opacity-75 top-0 flex flex-col justify-center">
        <ModalBody />
      </div>
    )
  );
};
