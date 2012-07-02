var jQuery = function(selector) {
    return new jQuery.prototype.init(selector);
};
jQuery.prototype = {
    jquery: "0.1 Barebones Edition",
    length: 0,
    init: function(selector) {
        if(typeof selector === "function") {
            window.onload = selector;
        this[0] = document;
        this.length = 1;
        } else if(selector) {
            if (/^\w+$/.test(selector)) { // tagname
        selector = document.getElementsByTagName(selector);
        return jQuery.merge(this, selector);
            } else { // #id
                var id = selector.substr(1);
                var elem = document.getElementById(id);
                if(elem) {
                    this[0] = elem;
                    this.length = 1;
                }
            }
        }
        return this;
    }
}
jQuery.each = function(object, callback) {
    for(var i = 0, length = object.length, value = object[0]; i < length; value = object[++i]) {
        callback.call(value, i, value);
    }
    return object;
}
jQuery.trim = String.prototype.trim ?
function(text){return text==null?"":String.prototype.trim.call(text);}:
function(text){return text==null?"":text.toString().replace(/^\s+/,"").replace(/\s+$/,"");};
jQuery.merge = function(first, second) {
    var i = first.length,
    j = 0;
    while (second[j] !== undefined) {
        first[i++] = second[j++];
    }
    first.length = i;
    return first;
}
jQuery.prototype.init.prototype = jQuery.fn = jQuery.prototype;
$ = jQuery;
jQuery.fn.hide = function() {
    return jQuery.each( this, function() { this.style.display = 'none'; } );
};
jQuery.fn.show = function() {
    return jQuery.each( this, function() { this.style.display = ''; } );
};
jQuery.fn.click = function(fn) {
    return jQuery.each( this, function() { this.onclick = fn; } );
};
jQuery.fn.addClass = function( value ) {
    var classNames, i, l, elem
    if (value && typeof value === "string") {
        for (i=0,l=this.length;i<l;i++) {
            elem = this[i];
            if (elem.nodeType === 1) {
                classNames = elem.className.split(' ');
                if (classNames.indexOf(value) == -1) {
                    classNames.push(value);
                }
            }
            elem.className = classNames.join(' ');
        }
    }
    return this;
};
jQuery.fn.removeClass = function( value ) {
    var classNames,i,l,elem,ind;
    if (value && typeof value === "string") {
        for (i=0,l=this.length;i<l;i++) {
            elem = this[i];
            if (elem.nodeType === 1) {
                classNames = elem.className.split(' ');
                ind = classNames.indexOf(value);
                if (ind > -1) {
                    classNames.splice(ind,1);
                }
            }
            elem.className = classNames.join(' ');
        }
    }
    return this;
};