'use strict'

module.exports = function(content) {
    var re = /(<a.*?)href=(['"]?)([^'"\s?]+)((\?[^'"\s]*)?)\2([^>]*>)/ig

    return content.replace(re, function(all, prefix, quote, value, query, queryInner, postfix) {
        var f = fis.uri(value)
        if(f.file) {
            all = prefix + 'href=' + quote + f.file.domain + f.file.release + query + quote + postfix
        }
        return  all
    })
}