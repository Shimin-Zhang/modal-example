import React  from 'react';
import DemoButton1 from './DemoButton1';
import DemoButton2 from './DemoButton2';
import Highlight from 'react-highlight.js';

export default function Documentation ({ role }) {

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Overview</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Modal Overview</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Web Modals and dialogs borrow much of their look and user experience from their counter parts of the Desktop computing world.</p>
          <br />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          While they may look similar, dialog and modals serve different purposes. The dialog is used to interrupt the user's existing workflow, switch to a new context and stopping them in their tracks. This could be to used before the user does something irreversible or market something new.</p>
          <br />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Modals, on the other hand, can contain forms and other rich interactive components. Modals can be used to switch a user to a new context while preserving their spot in the overall document. Think fixing a type while going through a list of product names.
          </p>
        </div>

        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Demo</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Demo Modal</h1>
          <div className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <DemoButton1 />
            <DemoButton2 />
          </div>
        </div>

        {role && <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">API</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Component Props</h1>
          <Highlight className="text-left mb-5" language="JavaScript">
            {`
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
    
    const modal1Content = "Lorem ipsum dolor sit amet, consectetur \n adipiscing elit. Vivamus sollicitudin vulputate mattis. Vivamus \n risus urna, dapibus et eros non, commodo dictum nisi. Sed orci \n tellus, consequat ac neque at, blandit aliquet nibh. Praesent non \n leo vel mi elementum varius. Aenean placerat consequat augue id \n ornare. Aenean ut vehicula tortor. Phasellus quam velit, egestas \n eu est nec, lacinia facilisis ex. Quisque sollicitudin libero \n felis, in malesuada nulla tristique quis. Maecenas ullamcorper \n augue at enim volutpat faucibus. Pellentesque habitant morbi \n tristique senectus et netus et malesuada fames ac turpis egestas. \nDonec consectetur bibendum justo, id accumsan sem porta sit amet. \nVivamus dictum, ante id consectetur eleifend, odio mauris auctor \nrisus, sit amet auctor augue augue et dui. Donec sed placerat \nerat. Praesent eros diam, aliquet egestas porttitor a, mollis sit \namet felis. In dapibus tellus orci, quis fringilla lorem pharetra \nsit amet. Vivamus a ante facilisis, sollicitudin orci in, \nplacerat nisi.";

  <Modal key={1} num={1} open={modal1Open} setOpen={setModal1Open} title={modal1Title} actions={modal1Actions} content={modal1Content}/>
        `}
          </Highlight>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla placerat velit. Fusce orci quam, aliquam sed libero in, aliquam lobortis purus. Integer id ipsum ultricies, condimentum ipsum id, congue metus. Pellentesque eget feugiat justo. Phasellus at ex nulla. Sed pretium, est non fringilla iaculis, mauris massa cursus velit, vel semper eros magna et odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate est et quam aliquet feugiat. Curabitur quis fermentum est. Phasellus euismod auctor est, id varius urna maximus lobortis. Nam id dolor suscipit dui varius tristique.
          </p>
        </div>}

        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Use Cases</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Common Use Cases</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Sed aliquet ultrices auctor. Nam eget ligula eu erat vehicula varius nec a arcu. Morbi at maximus turpis, quis venenatis lacus. Etiam turpis nisi, congue et maximus in, ullamcorper non metus. In efficitur tempus magna ut rutrum. Sed quis neque sit amet tellus feugiat posuere. Nam fermentum suscipit ante, id placerat urna blandit ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus placerat mi a cursus viverra. Mauris quis lorem in mi consequat blandit ut a lacus. Phasellus quam lacus, hendrerit in venenatis sed, pellentesque a sem. Aenean consequat pulvinar turpis eget molestie. Aenean vitae ante vel arcu tincidunt tincidunt eu id lorem. Vivamus pretium tempus elit ut pretium.
          </p>
        </div>

        {role && <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Sandbox</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Try It Yourself</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          </p>
        </div>}

        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Best Practices</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Usage Best Practices </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Pellentesque egestas elementum nunc nec laoreet. In commodo lacus non leo congue vulputate. Curabitur rhoncus ante vel massa venenatis tristique. Morbi eleifend risus in magna iaculis, eu finibus elit aliquet. Suspendisse tortor enim, tempus et tincidunt semper, laoreet at justo. Ut et odio ut lacus consectetur condimentum a vel velit. Aliquam posuere consectetur turpis. Donec ligula tortor, efficitur in elit in, aliquet auctor urna. Praesent blandit interdum efficitur. Proin tellus tellus, maximus tristique urna id, viverra finibus ipsum. Fusce auctor varius purus nec placerat. Nullam ac lorem elit.
          </p>
        </div>

        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Specs</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Design Specifications</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Aenean ornare et lectus non convallis. Suspendisse nec lorem ligula. Donec malesuada molestie lobortis. Suspendisse mattis ultrices augue. Pellentesque et nisi vitae sem pulvinar pretium. Donec dignissim condimentum mollis. Curabitur non arcu ante. Phasellus eros velit, maximus eget dictum vitae, mattis nec nulla. Cras imperdiet, turpis sed vestibulum pellentesque, purus justo maximus purus, sed cursus augue nibh ut odio. Aliquam tempus mauris in dui tincidunt euismod. Aliquam et justo sit amet ligula porttitor aliquet ut in ligula. Donec lacinia eu purus vitae mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum tincidunt magna vitae consectetur.
          </p>
        </div>

        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Accessibility</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Accessibility Concerns</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Quisque viverra fermentum scelerisque. Sed lobortis justo neque, sit amet imperdiet sem aliquam nec. Vivamus et lacinia tortor. Phasellus mattis vitae nunc ac interdum. Etiam lobortis neque vel lectus aliquet congue. Vivamus at euismod purus, eget mollis ipsum. Phasellus at bibendum eros. Mauris nec pretium justo. Suspendisse eros leo, interdum eu laoreet sit amet, scelerisque ac odio. Etiam vestibulum tortor at turpis euismod varius.
          </p>
        </div>
      </div>
    </section>
  )
};
