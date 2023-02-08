import React from 'react';
import Dropdown from "./components/dropdown";

const options = ['click1', 'click2', 'click3'];

function App(): JSX.Element {
    return <Dropdown options={options} />
}

export default App;
