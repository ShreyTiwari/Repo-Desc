import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const ExampleRepo = () => {
    const repoList = [
        {
            'id': 'one',
            'route' : '/repo',
            'text' : 'first repo link',
        },
        {
            'id': 'two',
            'route' : '/repo',
            'text' : 'second repo link',
        }
    ];

    return (
        <ul>
            {repoList.map((repoLink, index) => (
                <li style={{textAlign: 'left'}}>
                    <NavLink
                        to={`${repoLink.route}/${repoLink.id}`}
                        exact >
                        <Typography>
                            {repoLink.text}
                        </Typography>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
