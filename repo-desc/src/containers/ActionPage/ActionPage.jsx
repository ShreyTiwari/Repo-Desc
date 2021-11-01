import { Box, Divider } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProgressBox } from "../../components/ProgressBox/ProgressBox";
import styles from './ActionPage.module.css';
import { Results } from "./ResultsTable";

export const ActionPage = (props) => {
    const projectName = "https://github.com/RandomUser/RandomProjectLink"

    const [progressData, setProgressData] = useState('');

    return (
        <Box maxWidth='sm' style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {/* TODO (satayam.sundaram): Fix this redirection */}
            <div className={styles.actionPageHeader}>
                <span>Line count for </span>
                <Link
                    to={{ location: projectName }}
                    target="_blank"
                    className={styles.projectName}>
                    {projectName}
                </Link>
            </div>
            <Divider />
            <br />
            <br />
            <ProgressBox />
            <Results />
        </Box>
    )
}   