import React , {Suspense , lazy}from "react";


const GeneralApp = () => {

  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
        </Suspense>      
    </>
  );
};

export default GeneralApp;
