import PropTypes from 'prop-types';
import styles from '../styles/Label.module.css';
const Label = ({value}) =>{
    return(
        <div className={styles.Label}>
            {value}
        </div>  
    )
};

Label.propTypes = {
    value: PropTypes.string
};

export default Label;