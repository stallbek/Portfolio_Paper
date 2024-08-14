import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./Components/Main/Main";
import Person from "./Components/Person/Person";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path='stalbek' element={<Person/>}/>
            </Routes>
        </div>
    );
};

export default App;