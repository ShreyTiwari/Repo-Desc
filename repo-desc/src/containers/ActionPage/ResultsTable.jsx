import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import styles from './ActionPage.module.css';

export const Results = () => {
    const headerColumns = [
        'File Type',
        'Files',
        'Lines of code',
        'Total lines'
    ];


    const HeaderColumns = () => {
        return headerColumns.map((item, index) => (
            <TableCell className={styles.columnTitle}>
                {item}
            </TableCell>)
        );
    }

    const getData = (ft, fc, loc, tl) => {
        return {
            file_type: ft,
            file_count: fc,
            lines_of_code: loc,
            total_lines: tl
        }
    }

    const sampleData = [
        getData('Text', 47, 0, 6177),
        getData('JavaScript', 222, 28197, 37070),
        getData('Json', 41, 1188, 1189),
        getData('Stylesheets', 7, 7567, 8896),
        getData('Html', 31, 11320, 12799),
        getData('Shell', 1, 21, 27),
        getData('Text', 47, 0, 6177),
        getData('JavaScript', 222, 28197, 37070),
        getData('Json', 41, 1188, 1189),
        getData('Stylesheets', 7, 7567, 8896),
        getData('Html', 31, 11320, 12799),
        getData('Shell', 1, 21, 27),
        getData('Text', 47, 0, 6177),
        getData('JavaScript', 222, 28197, 37070),
        getData('Json', 41, 1188, 1189),
        getData('Stylesheets', 7, 7567, 8896),
        getData('Html', 31, 11320, 12799),
        getData('Shell', 1, 21, 27),
        getData('Text', 47, 0, 6177),
        getData('JavaScript', 222, 28197, 37070),
        getData('Json', 41, 1188, 1189)
    ];

    const RenderRows = () => {
        return sampleData.map((data, _) => {
            return (
                <TableRow dense className={styles.dataRow}>
                    <TableCell className={styles.dataCell}>{data.file_type}</TableCell>
                    <TableCell className={styles.dataCell}>{data.file_count}</TableCell>
                    <TableCell className={styles.dataCell}>{data.lines_of_code}</TableCell>
                    <TableCell className={styles.dataCell}>{data.total_lines}</TableCell>
                </TableRow>
            )
        });
    }

    return (
        <div className={styles.resultsTableContainer}>
            <div className={styles.title}>
                Results
            </div>
            <div className={styles.resultsTable}>
                <TableContainer className={styles.tableContainer}>
                    <Table sx={{ minWidth: 640 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <HeaderColumns />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <RenderRows />
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
};

