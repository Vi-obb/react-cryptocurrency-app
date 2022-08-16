/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 11/08/2022 - 23:40:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/08/2022
    * - Author          : Michael
    * - Modification    : 
**/
import Headline from "./components/Body/Headline"
import SplitScreen from "./components/SplitScreen"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import RightHandSide from "./components/RightSide"



const LeftHandSide = () => {

  return (
    <>
      <Navbar />
      <Headline />
      <Footer />
    </>
  )
}



function App() {


  return (

    <>
      <SplitScreen left={LeftHandSide} right={RightHandSide} />
    </>


  )
}

export default App
