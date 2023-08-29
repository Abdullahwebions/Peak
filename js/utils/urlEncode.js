"use strict";

/**
 * 
 * @param {Object} urlObj url object
 * @returns url string
 */


export const urlEncode = urlObj => {
    return Object.entries(urlObj).join("&").replace(/,/g, "=").replace(/#/g, "%23");
}