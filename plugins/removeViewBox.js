var regViewBox = /^0\s0\s(\d+)\s(\d+)$/,
    viewBoxElems = ['svg', 'marker', 'pattern', 'symbol', 'view'];

/**
 * Remove viewBox attr which coincides with a width/height box.
 *
 * @see http://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute
 *
 * @param {Object} item current iteration item
 * @param {Object} params plugin params
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Kir Belevich
 */
exports.removeViewBox = function(item, params) {

    if (
        item.isElem(viewBoxElems) &&
        item.hasAttr('viewBox') &&
        item.hasAttr('width') &&
        item.hasAttr('height')
    ) {

        if (match = item.attr('viewBox').value.match(regViewBox)) {
            if (
                item.attr('width').value == match[1] &&
                item.attr('height').value == match[2]
            ) {
                item.removeAttr('viewBox');
            }
        }

    }

};