/**
 * Wait for the given element to become visible
 * @param  {String}   selector      Element selector
 * @param  {{reverse: boolean}}   falseCase Whether or not to expect a visible or hidden
 *                              state
 *
 * @todo  merge with waitfor
 */
export default (selector, falseCase) => {
    /**
     * Maximum number of milliseconds to wait for
     * @type {Int}
     */
    const ms = 10000;

    $(selector).waitForDisplayed(ms, !!falseCase);
};
