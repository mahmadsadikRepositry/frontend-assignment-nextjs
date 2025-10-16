// Initialize FontAwesome once for Next.js
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // load the CSS

// Prevent FontAwesome from dynamically adding its CSS since we import it above
config.autoAddCss = false;

const faFontawesomeInit = null;

export default faFontawesomeInit;
