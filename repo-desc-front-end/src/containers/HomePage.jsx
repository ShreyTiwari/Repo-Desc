import { Container, List, ListItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import React, { useState } from 'react';

export const HomePage = () => {

    const [searchBarText, setSearchBarText] = useState('');

    const handleSearchBarInput = (value) => setSearchBarText(value);

    const repoList = [
        {
            'route' : '/here',
            'text' : '',
        },
        {
            'route' : '/there',
            'text' : 'second link',
        }
    ];

    return (
        <>
            <h1>Home page!</h1>
            <Container>
                <Container>
                    <p>GitHub link</p>
                </Container>
            </Container>
            <Container >
                <SearchBar
                    value={searchBarText}
                    onChange={newValue => handleSearchBarInput(newValue)}
                    onRequestSearch={()=>console.log('here we are')}
                />
                <List open>
                    {
                        repoList.map((repoLink, index) => {
                            return (
                                <ListItem>
                                    <NavLink to={repoLink.route}>
                                        {repoLink.text}
                                    </NavLink>
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Container>
        </>
    )
};