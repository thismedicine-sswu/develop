import './App.css';
import React from 'react';
import { RecoilRoot } from "recoil";
import { BrowserView, MobileView } from 'react-device-detect';
import Searchbar from "./component/searchbar.jsx";
import BottomNav from "./component/BottomNav.jsx";

const App = () => {
  return (
    <MobileView>
      <RecoilRoot>
        <div className='Search'>
          {/* ADD :: Start */}
          <Searchbar />
        </div>
        <div className='BottomNav'>
          <BottomNav />
        </div>
      </RecoilRoot>
    </MobileView>,

    <BrowserView>
      <RecoilRoot>
        <div className='Search'>
          {/* ADD :: Start */}
          <Searchbar />
        </div>
        <div className='BottomNav'>
          <BottomNav />
        </div>
      </RecoilRoot>
    </BrowserView>

  )
};



export default App;