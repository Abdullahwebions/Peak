"use strict";

/* Import */

import { urlEncode } from "./urlEncode.js";

/**
 * Update url
 * @param {Object} filterObj
 * @param {String} searchType
 */

export const updateUrl = (filterObj, searchType) => {
    setTimeout(() => {
        const /** {String} */ root = window.location.origin;
        const /** {String} */ searchQuery = urlEncode(filterObj);

        window.location = `${root}peak/peak/${searchType}/${searchType}.html?${searchQuery}`;
    }, 500);
}
