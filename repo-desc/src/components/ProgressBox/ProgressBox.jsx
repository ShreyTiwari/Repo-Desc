import styles from './ProgressBox.module.css';

export const ProgressBox = (props) => {
    
    const operation = [
        {type: 'CLONE', msg: '/tmp/line-count-clone-wvmavska'},
        {type: 'POST', msg: 'git-upload-pack (227 bytes)'},
        {type: 'COUNT', msg: "Counting lines..."},
        {type: 'PARSING', msg: 'page_white_swoosh.png'},
        {type: 'PARSING', msg: 'page_white_text.png'},
        {type: 'PARSING', msg: 'page_white_text_width.png'},
        {type: 'PARSING', msg: 'page_white_tux.png'},
        {type: 'PARSING', msg: 'page_white_vector.png'},
        {type: 'PARSING', msg: 'page_white_visualstudio.png'},
        {type: 'PARSING', msg: 'page_white_width.png'},
        {type: 'PARSING', msg: 'parser.js'},
        {type: 'PARSING', msg: 'index.html'},
        {type: 'PARSING', msg: 'ssesocket.js'},
        {type: 'CLEAN', msg: ''}
    ];

    const getClass = (t) => {
        let lhsClass = styles.parseText;
        let lhs = ''
        switch (t.type) {
            case 'PARSING':
                lhsClass = styles.parseText; 
                lhs = 'Parsing file: '
                break;
            case 'CLEAN':
                lhsClass = styles.cleanText;
                lhs = 'Cleaning up...';
                break;
            case 'CLONE':
                lhsClass = styles.cloneText;
                lhs = 'Cloning into ';
                break;
            case 'POST':
                lhsClass = styles.postText;
                lhs = 'POST ';
                break;
            default:
                break;
        }
        return [lhsClass, lhs]
    }


    return (
        <div className={styles.progressBoxContainer}>
            <div className={styles.title}>
                Progress
            </div>
            <div className={styles.progressBox}>
                {
                    operation.map((t, _)=>{
                        const temp = getClass(t);
                        const lhsClass = temp[0];
                        const lhs = temp[1];
                        return <div className={styles.progressLine}>
                            <span>{`> `}</span>
                            <span className={lhsClass}>{lhs}</span>
                            <span>{t.msg}</span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
