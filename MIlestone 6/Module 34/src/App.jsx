import React, { Suspense } from 'react';
import DaisyNav from './components/Daisynav/DaisyNav';
import NavBar from './components/NavBar/NavBar';
import PricingOption from './components/PricingOptions/PricingOption';
import ResultChart from './components/ResultChart/ResultChart';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';

const pricingPromise = fetch('/pricingData.json').then(res => res.json())
const marksPromise = axios.get('/marksData.json')
const App = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      {/* <DaisyNav></DaisyNav> */}
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>
      {/* <div className='w-full flex justify-center'>
        <ResultChart/>
      </div> */}
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <MarksChart marksPromise={marksPromise}/>
      </Suspense>
    </div>
  );
};

export default App;