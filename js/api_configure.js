"use strict";

/* Import */

import { urlEncode } from "./utils/urlEncode.js";

const /** {String} */ API_KEY = "qyU0J4Uxt4XoDY9squ3nkykV6H9lYytliMCyjY8UZdgScPRROrgmcubf";

const /** {Function} */ headers = new Headers();
headers.append("Authorization", API_KEY);

const /** {Object} */ requestOptions = { headers };

/**
 * 
 * @param {string} url fetch Url
 * @param {Function} successCallback success callback function
 */

const fetchData = async function (url, successCallback) {
    const /** {Object} */ response = await fetch(url, requestOptions);
    if (response.ok) {
        const /** {Object} */ data = await response.json();
        successCallback(data);
    }
}

let /** {String} */ requestUrl = "";

const /** {Object} */ root = {
    default: "https://api.pexels.com/v1/",
    videos: "https://api.pexels.com/videos/"
}

export const /** {Object} */ client = {

    photos: {

        /**
         * Search photos
         * @param {Object} parameters url Object
         * @param {Function} callback callback function
         */
        search(parameters, callback) {
            requestUrl = `${root.default}search?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },

        /**
         *  curated photos
         * @param {Object} parameters Url Object
         * @param {Function} callback Callback function
         */
        curated(parameters, callback) {
            fetchData(`${root.default}curated?${urlEncode(parameters)}`, callback);
        },

        /**
         * Get single photo detail
         * @param {String} id Photo ID
         * @param {Function} callback Callback function
         */
        detail(id, callback) {
            fetchData(`${root.default}Peak/photos/${id}`, callback);
        }

    },

    videos: {

        /**
         * Search videos
         * @param {Object} parameters url Object
         * @param {function} callback callback function
         */
        search(parameters, callback) {
            requestUrl = `${root.videos}search?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },

        /**
         *  Get Popular videos
         * @param {Object} parameters Url Object
         * @param {function} callback Callback function
         */
        popular(parameters, callback) {
            fetchData(`${root.videos}popular?${urlEncode(parameters)}`, callback);
        },

        /**
         * Get single video detail
         * @param {string} id Video ID
         * @param {function} callback Callback function
         */
        detail(id, callback) {
            fetchData(`${root.videos}videos/${id}`, callback);
        }

    },

    collections: {

        /**
         *  Get featured collections
         * @param {Object} parameters Url Object
         * @param {Function} callback Callback function
         */
        featured(parameters, callback) {
            requestUrl = `${root.default}collections/featured?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        },

        /**
         * Get a collection medias
         * @param {String} id collection ID
         * @param {Object} parameters Url object
         * @param {Function} callback Callback function
         */
        detail(id, parameters, callback) {
            requestUrl = `${root.default}/collections/${id}?${urlEncode(parameters)}`;
            fetchData(requestUrl, callback);
        }

    }
}
