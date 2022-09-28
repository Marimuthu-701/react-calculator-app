import React from 'react';

const AppLayout = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
}

export default AppLayout;