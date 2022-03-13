

import React, { useContext } from 'react';

const CpntextApi = () => {
   const myContext= useContext("Hello")
    return (
        <myContext.provider value="Moon">
            <h2>Hello</h2>
        </myContext.provider>
    );
};

export default CpntextApi;