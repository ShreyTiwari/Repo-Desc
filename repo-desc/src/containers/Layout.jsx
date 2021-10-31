
import * as mui_core from '@material-ui/core'
import React from 'react';


export const Layout = (props) => {
    return (
        <mui_core.Container maxWidth='sm'>
            {props.children}
        </mui_core.Container>
    )
};