"use strict";

/** 
* @param  {NodeList} $elements
* @param  {String} eventType
* @param  {Function} callback
*/ 


export const addEventOnElements = function ($elements, eventType, callback) {
    $elements.forEach($element => $element.addEventListener(eventType, callback));
}