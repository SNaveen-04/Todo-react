import PropTypes from "prop-types";
import styles from "../styles/Label.module.css";
const AlertLabel = ({ value }) => {
  return <div className={styles.AlertLabel}>{value}</div>;
};

AlertLabel.propTypes = {
  value: PropTypes.string,
};

export default AlertLabel;
