/**
 * tell if running from a browser
 * 
 * @returns {boolean} true if running in a browser
 */
function isBrowser() {
    return typeof window !== 'undefined';
}

/**
 * tell if running from nodeJS
 * 
 * @returns {boolean} true if running in node
 */
function isNode() {
    return typeof window === 'undefined';
}

/**
 * throw message on falsy expression
 * 
 * @param {boolean} expression - expression to check
 * @param {string} message - the error message
 */
function checkArgument(expression, message) {
    if (!expression) {
        throw message;
    }
}

export { isBrowser, isNode, checkArgument };
