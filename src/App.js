import HeaderBlock from "./components/HeaderBlock";
import LayoutBlock from './components/LayoutBlock';
import FooterBlock from './components/FooterBlock';

import ImageBackground1 from './img/bg1.jpg';
import ImageBackground3 from './img/bg3.jpg';


const App = () => {
  return (
    <>
      <HeaderBlock 
        title = "HeaderBlock"
        descr = "descr for HeaderBlock"
      />
      <LayoutBlock 
        id = "1"
        title = "LayoutBlock1"
        descr = "descr for LayoutBlock1"
        urlBg = {ImageBackground1}
      />
      <LayoutBlock 
        id = "2"
        title = "LayoutBlock2"
        descr = "descr for LayoutBlock2"
      />
      <LayoutBlock 
        id = "3"
        title = "LayoutBlock3"
        descr = "descr for LayoutBlock3"
        urlBg = {ImageBackground3}
      />
      <FooterBlock 
        
      />
    </>
  );
}

export default App;