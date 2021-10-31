import { Input } from "../input/input"
import styles from "./searchbar.css";

export const SearchBar = (props) => {
    return (
        <>
            <Input
                className={styles.searchbar}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </>
    )

}