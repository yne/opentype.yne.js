// Run-time checking of preconditions.

/**
 *
 * @param message
 */
function fail(message) {
    throw new Error(message);
}

// Precondition function that checks if the given predicate is true.
// If not, it will throw an error.
/**
 *
 * @param predicate
 * @param message
 */
function argument(predicate, message) {
    if (!predicate) {
        fail(message);
    }
}

export { fail, argument, argument as assert };
export default { fail, argument, assert: argument };
