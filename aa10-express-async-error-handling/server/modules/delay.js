/**
 * Asynchronous function that delays for the provided length of time.
 * If the length of time to wait is less than '0', then the returned
 * Promise will reject, otherwise it'll resolve.
 *
 * @param {number} timeToWait - The length of time to wait in milliseconds.
 * @return {Promise}
 */
const delay = (timeToWait, message) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (timeToWait < 0 || Math.random() < 0.5) {
            reject(new Error('A delay error has occurred!'));
        } else {
            resolve(message || `All done waiting for ${timeToWait}ms!`);
        }
    }, Math.abs(timeToWait));
});

/**
 * Function to delay for 1 second
 */
const wait1 = () => {
    return delay(1000, 'Wait complete');
}

/**
 * Function to delay for 4 seconds
 */
const wait4 = () => {
    return delay(4000, 'I am here!');
}

module.exports = {
    wait1,
    wait4,
};
