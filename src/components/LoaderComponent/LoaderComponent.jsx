// Loader UIball
import { LeapFrog } from '@uiball/loaders'

import styles from './LoaderComponent.module.css'

const LoaderComponent = () => {
  return (
    <div className={styles.loader}>
        <LeapFrog 
        size={60}
        speed={1.2} 
        color="white" 
        />
    </div>
  )
}

export default LoaderComponent;