import FloatingActionButtons from "./components/FloatingActionButtons"
import Footer from "./Layout/Footer"
import Header from "./Layout/Header"
import Home from "./Pages/Home/Home"
import GlobalStatesProvider from "./services/context/GlobalStates"

function App() {

    return (
        <GlobalStatesProvider>
            <Header/>
            <div className="min-h-screen lg:mt-[85px] sm:mt-[40px]">
                <Home/>
                <FloatingActionButtons/>
            </div>
            <Footer/>
        </GlobalStatesProvider>
    )
}

export default App
