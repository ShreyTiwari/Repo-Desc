import { List, ListItem, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
import React, { useState } from 'react';
import styles from './HomePage.module.css';

export const HomePage = () => {

    const [searchBarText, setSearchBarText] = useState('');
    const handleSearchBarInput = (value) => setSearchBarText(value);

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

    const RepoLinks = ()=> {
        return (
        <List>
            {repoList.map((repoLink, index) => (
                <ListItem>
                    <NavLink
                        to={`${repoLink.route}/${repoLink.id}`}
                        exact>
                        {repoLink.text}
                    </NavLink>
                </ListItem>
            ))}
        </List>
        )
    }

    return (
        <>
            <Typography variant='h4'>GitHub LOC counter</Typography>
                <div className={styles.searchBarContainer}>
                    <Typography className={styles.searchBarTitle} variant='body2'>
                        GitHub link
                    </Typography>
                    <SearchBar
                        className={styles.SearchBar}
                        value={searchBarText}
                        onChange={newValue => handleSearchBarInput(newValue)}
                        onRequestSearch={()=>console.log('here we are')}
                    />
                </div>
                <List>
                    <RepoLinks />
                </List>
        </>
    )
};