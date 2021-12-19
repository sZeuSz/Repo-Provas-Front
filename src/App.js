import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Components/Homepage.js/HomePage"
import TopBar from "./Components/shared/TopBar"
import TestsByProfessorPage from "./Components/TestsByProfessorPage/TestsByProfessorPage"
import GlobalStyle from "./GlobalStyled/GlobalStyled"

export default function App() {

    return (
        <BrowserRouter>
            <TopBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/by-professors' element={<TestsByProfessorPage />} />
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    )   
}
