import { Box, Container, Divider, Paper, Typography } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { ExampleRepo } from './ExampleRepo';
import { clsx } from '../../utils/common';

export const SearchBarContainer = (props) => {
    return <div className={styles.searchBarContainer}>
         {props.children}
    </div>
}

export const HomePage = () => {
    const [searchBarText, setSearchBarText] = useState('');
    const handleSearchBarInput = (value) => setSearchBarText(value);

    const handleSearchRequest = () => {
        console.log("Search Request");
    }

    console.log()
    return (
        <Box maxWidth='md' style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div className={styles.homeHeader}>
                GitHub repository lines counter
            </div>
            <Divider />

            <SearchBarContainer>
                <Typography
                    className={clsx([styles.searchBarTitle])}
                    variant='caption'>
                    GitHub repo URL
                </Typography>
                <SearchBar
                    style={{
                        height: '40px',
                        padding: '0px',
                        borderRadius: '0',
                        border: '1px solid black',
                    }}
                    className={clsx([styles.SearchBar])}
                    value={searchBarText}
                    onChange={newValue => handleSearchBarInput(newValue)}
                    onRequestSearch={()=>handleSearchRequest()}
                />
            </SearchBarContainer>
            <ExampleRepo />
        </Box>
    )
};