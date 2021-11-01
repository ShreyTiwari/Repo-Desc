import gsf from '../../assets/css/fonts.module.css';
import styles from './Header.module.css';

export const Header = (props) => {
    const headerClasses = []
    console.log(props.className);

    return (
        <div className={styles.header}>
            {props.children}
        </div>
    );
}