import React from 'react';
import Types from "./components/Types";
import Assertive from "./components/Assertive";
import Main from "./components/Main";
import Form, {userInfoFields} from "./components/Form";

const App = () => {
    return (
        <>
            <Form fields={userInfoFields}/>
            <Types/>
            <Assertive/>
            <Main/>
        </>
    );
};

export default App;
