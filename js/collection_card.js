"use strict";

/* Import */

import { ripple } from "./utils/ripple.js";

/**
 * Creat collection card
 * @param {Object} collection 
 * @returns {Node} Collection card
 */

export const collectionCard = collection => {
    const /** {String} */ root = window.location.origin;

    const {
        id,
        title,
        media_count
    } = collection;

    const /** {NodeElement} */ $card = document.createElement("div");
    $card.classList.add("grid-card", "two-line", "list-item");
    $card.setAttribute("title", title);

    $card.innerHTML = `
        <div>
            <h3 class="body-large">${title}</h3>

            <p class="body-medium label">الوسائط ${media_count}</p>
        </div>
        <a href="${root}/Peak/peak/collections/collection_detail.html?collectionId=${id}&title=${title}" class="state-layer"></a>
    `;

    ripple($card);

    return $card;
}
