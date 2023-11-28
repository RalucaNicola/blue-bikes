import * as styles from './TopPanel.module.css';
import { Identity } from '../Identity';

const TopPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.actionsContainer}>
        <div className={styles.leftActionsContainer}>
          <h1>Blue Bike Cambridge</h1>
        </div>
        <div className={styles.rightActionsContainer}>
          <Identity></Identity>
        </div>
      </div>
    </div>
  );
};

export default TopPanel;
