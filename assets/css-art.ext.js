/*
 * Optimization controller
 */
/** @export */
function StyleTools() {};

// jQuery
window.watch;
window.unwatch;
window.matchMedia;
window.msMatchMedia;
window.Promise;

window.document.documentElement;
window.document.body;
window.document.head;
window.stop;
window.event;
window.event.returnValue;
window.StyleTools;
window.StyleTools.l; // lint
window.StyleTools.r; // request animation frame
window.StyleTools.s; // load <style> CSS
window.StyleTools.b; // load blob
window.StyleTools.e; // load script
window.event.returnValue;
window.postcss;

window.outerWidth;
window.outerHeight;
window.screenX;
window.screenY;
window.open;
window.load_styletools;

var STYLETOOLS_CONFIG;
window.StyleToolsCMSConnect = {
    cms: {
        name: '',
        title: '',
        icon: {
            default: '',
            head: '',
            list: '',
            save: ''
        },
        help: {
            critical: ''
        }
    },
    sheet: {
        save: function(a, b) {},
        is_editable: function() {}
    },
    critical: {
        get: function() {},
        get_files: function() {

        },
        save: function(a, b) {},
        del: function(a, b) {},
    },
    on: function() {},
    once: function() {},
    off: function() {}
}

var st_config = {
    cms: {
        name: '',
        title: '',
        icon: {
            default: '',
            head: '',
            list: '',
            save: ''
        },
        help: {
            critical: ''
        }
    },
    ajax_url: '',
    critical: '',
    hosts: '',
    api_params: '',
    api_headers: ''
};

var st_params = {};
st_params['style.tools'] = '';
st_params['sheet'] = '';
st_params['config'] = '';
st_params['text'] = '';

document.createElementNS = function() {}

var cssstats = {
    1: {
        declarations: {
            total: 1,
            unique: 1,
            important: [{
                property: '',
                value: ''
            }],
            properties: {},
            resets: {},
            vendorPrefixes: [{
                property: '',
                value: ''
            }]
        },
        gzipSize: 1,
        humanizedGzipSize: "",
        humanizedSize: "",
        mediaQueries: {
            total: 1,
            unique: 1,
            values: [],
            contents: [{
                rules: [],
                value: '',
                selectors: {
                    total: 1,
                    type: 1,
                    class: 1,
                    id: 1,
                    pseudoClass: 137
                }
            }]
        },
        rules: {
            total: 1,
            size: {
                average: 1,
                graph: [],
                max: 1
            },
            selectorByRuleSizes: [{
                selector: "",
                declarations: 1
            }]
        },
        selectors: {
            class: 1,
            id: 1,
            pseudoClass: 1,
            pseudoElement: 1,
            repeated: [],
            specificity: {
                max: 1,
                average: 1,
                graph: [],
                sortedGraph: [{
                    selector: "",
                    specificity: 1
                }]
            },
            total: 1,
            type: 1,
            values: []
        },
        size: 1
    }
}

self.postcss;
self.CleanCSS;

window.Ajv;

document.execCommand;

HTMLLinkElement.relList;
HTMLLinkElement.classList = {
    add: function() {},
    contains: function() {},
    remove: function() {},
    toggle: function() {}
};

document.createElement = function() {
    return {
        relList: ''
    }
}

function SET_STYLE(el, styles) {
    styles = {
        height: '',
        width: '',
        display: '',
        "min-height": '',
        "min-width": '',
        "max-height": '',
        "max-width": '',
        position: '',
        top: '',
        left: '',
        "z-index": '',
        'transform': ''
    }
}

function GET_COMPUTED_STYLE() {
    return {
        width: ''
    }
}
/*
function Blob() {
    return {
        buffer: ''
    };
}

function BlobBuilder() {
    return {
        append: function() {},
        getBlob: function() {
            return {
                buffer: ''
            }
        }
    };
}*/

var Store = function() {
    this.p = '';
    this.c = {
        h: '',
        items: null,
        cc: false,
        p: null,
        pC: 'sortable-placeholder',
        dC: 'sortable-dragging',
        db: 0,
        tt: 100,
        m: 0,
        itemSerializer: undefined,
        containerSerializer: undefined,
        customDragImage: null
    };
}
var sortable = function() {};
sortable.d = function() {};

var xhr = function() {};
xhr.open = function() {};
xhr.withCredentials = "true";
xhr.readyState = 1;
xhr.status = 1;
xhr.onreadystatechange = function(e) {};
xhr.send = function() {};
xhr.setRequestHeader = function() {};

var headers = {
    "Accept": "",
    "Access-Control-Allow-Origin": "",
    "cache-control": "",
    "expires": "",
    "pragma": "",
    "x-styletools": ""
};

var CONFIG = {
    "critical": {
        "mode": false,
        "export-mode": false,
        "config": false,
        "critical-element": false
    },
    "optimized": {},
    "original": {},
    "editor": {
        "auto-lint": false,
        "theme": false
    },
    "shared": {
        "disable-javascript": false,
        "block-external-assets": false,
        "rulers": false,
        "ruler-units": false,
        "ruler-color": false
    },
    "http": {
        "http": {
            headers: false,
            credentials: false
        }
    }
}

// set multiple attributes
var ATTR_MAP;
var setAttrs = ATTR_MAP = {
    'rel': '',
    'src': '',
    'href': '',
    'as': '',
    'type': '',
    'media': '',
    'data-src': '',
    'class': '',
    'pattern': '',
    'role': '',
    'style': '',
    'frameborder': '',
    'sandbox': '',
    'disabled': '',
    'onload': '',
    'charset': '',
    'placeholder': '',
    'value': '',
    'async': '',
    'onreadystatechange': '',
    'onerror': '',
    'selected': '',
    'checked': '',
    'data-frame': '',
    'data-i': '',
    'data-media': '',
    'data-href': '',
    'data-o10n': '',
    'for': '',
    'target': '',
    'label': '',
    'hidden': '',
    'alt': '',
    'xmlns': '',
    'size': '',

    'x1': '',
    'x2': '',
    'y1': '',
    'y2': '',
    'x0': '',
    'y0': '',
    'stroke-width': '',
    'origPos': '',
    'origPosAttribute': '',
    'text-anchor': '',

    // map
    "C": '',
    "P": '',
    "L": '',
    "N": '',
    "I": '',
    "T": '',
    "R": '',
    "r": '',
    "V": '',
    "t": '',
    "p": '',
    "w": '',
    "h": '',
    "s": '',
    "d": '',
    "n": '',
    "m": '',
    "M": '',
    "x": '',
    "l": '',
    "D": '',
    'f': '',
    'S': '',
    'c': '',
    'F': '',
    'g': '',
    'y': '',
    'A': ''
};

var SPECIAL_MAP = {
    disabled: 1,
    checked: 1,
    onload: 1,
    onerror: 1,
    value: 1,
    selected: 1,
    onreadystatechange: 1
};

var requestOptions = {
    mode: '',
    headers: '',
    cache: '',
    credentials: ''
}


var CodeMirror = function() {};
CodeMirror.fromTextArea = function() {

    return {
        on: function() {},
        setValue: function() {},
        getValue: function() {},
        refresh: function() {},
        setOption: function() {},
        historySize: function() {
            return {
                undo: '',
                redo: ''
            }
        },
        undo: function() {},
        redo: function() {},
        clearHistory: function() {},
        performLint: function() {},
        scrollIntoView: function() {},
        setCursor: function() {}
    }
};

var codeMirrorOptions = {
    mode: "css",
    lineWrapping: true,
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"],
    editor: '',
    lint: {
        async: true,
        lintOnChange: true
    },
    //theme: $('#critical-css-editor').data('theme')
};

window.cssapp.lintconfig = {
    "errors": {
        "box-model": true,
        "display-property-grouping": true,
        "duplicate-properties": true,
        "empty-rules": true,
        "known-properties": true
    },
    "compatibility": {
        "adjoining-classes": false,
        "box-sizing": false,
        "compatible-vendor-prefixes": false,
        "gradients": false,
        "text-indent": false,
        "vendor-prefix": false,
        "fallback-colors": false,
        "star-property-hack": false,
        "underscore-property-hack": false,
        "bulletproof-font-face": false
    },
    "performance": {
        "font-faces": false,
        "import": false,
        "regex-selectors": false,
        "universal-selector": false,
        "unqualified-attributes": false,
        "zero-units": false,
        "overqualified-elements": false,
        "shorthand": false,
        "duplicate-background-images": false
    },
    "maintainability": {
        "floats": false,
        "font-sizes": false,
        "ids": false,
        "important": false,
        "order-alphabetical": false
    },
    "accessibility": {
        "outline-none": false
    },
    "oocss": {
        "qualified-headings": false,
        "unique-headings": false
    }
};

var CSSLINT_CONFIG = {
    "errors": {
        "title": "Possible Errors",
        "description": "Rules for potential errors in the CSS.",
        "help": "https://github.com/CSSLint/csslint/wiki/Rules#possible-errors",
        "rules": {
            "box-model": {
                "title": "Beware of box model size",
                "default": true
            },
            "display-property-grouping": {
                "title": "Require properties appropriate for display",
                "default": true
            },
            "duplicate-properties": {
                "title": "Disallow duplicate properties",
                "default": true
            },
            "empty-rules": {
                "title": "Disallow empty rules",
                "default": true
            },
            "known-properties": {
                "title": "Require use of known properties",
                "default": true
            }
        }
    },
    "compatibility": {
        "title": "Compatibility",
        "description": "Rules flag for compatibility problems across browsers and browser settings.",
        "rules": {
            "adjoining-classes": {
                "title": "Disallow adjoining classes",
                "default": false
            },
            "box-sizing": {
                "title": "Disallow box-sizing",
                "default": false
            },
            "compatible-vendor-prefixes": {
                "title": "Require compatible vendor prefixes",
                "default": false
            },
            "gradients": {
                "title": "Require all gradient definitions",
                "default": false
            },
            "text-indent": {
                "title": "Disallow negative text-indent",
                "default": false
            },
            "vendor-prefix": {
                "title": "Require standard property with vendor prefix",
                "default": false
            },
            "fallback-colors": {
                "title": "Require fallback colors",
                "default": false
            },
            "star-property-hack": {
                "title": "Disallow star hack",
                "default": false
            },
            "underscore-property-hack": {
                "title": "Disallow underscore hack",
                "default": false
            },
            "bulletproof-font-face": {
                "title": "Bulletproof font-face",
                "default": false
            }
        }
    },
    "performance": {
        "title": "Performance",
        "description": "Rules are aimed at improving CSS performance, including runtime performance and overall code size.",
        "rules": {
            "font-faces": {
                "title": "Don't use too many web fonts",
                "default": false
            },
            "import": {
                "title": "Disallow @import",
                "default": false
            },
            "regex-selectors": {
                "title": "Disallow selectors that look like regular expressions",
                "default": false
            },
            "universal-selector": {
                "title": "Disallow universal selector",
                "default": false
            },
            "unqualified-attributes": {
                "title": "Disallow unqualified attribute selectors",
                "default": false
            },
            "zero-units": {
                "title": "Disallow units for zero values",
                "default": false
            },
            "overqualified-elements": {
                "title": "Disallow overqualified elements",
                "default": false
            },
            "shorthand": {
                "title": "Require shorthand properties",
                "default": false
            },
            "duplicate-background-images": {
                "title": "Disallow duplicate background images",
                "default": false
            }
        }
    },
    "maintainability": {
        "title": "Maintainability & Duplication",
        "description": "Rules help to ensure your code is readable and maintainable by others.",
        "rules": {
            "floats": {
                "title": "Disallow too many floats",
                "default": false
            },
            "font-sizes": {
                "title": "Don't use too many font-size declarations",
                "default": false
            },
            "ids": {
                "title": "Disallow IDs in selectors",
                "default": false
            },
            "important": {
                "title": "Disallow !important",
                "default": false
            },
            "order-alphabetical": {
                "title": "Disallow non alphabetical",
                "default": false
            }
        }
    },
    "accessibility": {
        "title": "Accessibility",
        "description": "Rules are designed to pick out possible accessibility issues.",
        "rules": {

            "outline-none": {
                "title": "Disallow outline:none",
                "default": false
            }
        }
    },
    "oocss": {
        "title": "OOCSS",
        "description": "Rules are based on the principles of OOCSS.",
        "rules": {
            "qualified-headings": {
                "title": "Disallow qualified headings",
                "default": false
            },
            "unique-headings": {
                "title": "Headings should only be defined once",
                "default": false
            }
        }
    }
};


var VIEW_CONTAINERS = {
    "o": '',
    "q": '',
    "y": '',
    "t": ''
}


/**
 * JSON Editor
 * @constructor
 */
var AJV = {};
AJV.addSchema;
AJV.getSchema = function() {
    return {
        schema: ''
    };
};
AJV.errorsText = function() {
    return '';
};
AJV.getSchema.schema;
AJV.validate;
AJV.errors;
var schemaSrc = {
    '$schema': '',
    'id': '',
    "type": "object",
    "properties": {

    },
    "additionalProperties": false
};


var CRITICALCSS_SCHEMA = {
    "type": "object",
    "properties": {
        "viewports": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^[0-9]+x[0-9]+$"
            },
            "uniqueItems": true,
            "default": [
                "360x640", "1300x900"
            ]
        },
        "forceInclude": {
            "type": "array",
            "items": {
                "type": "string",
                "minLength": 1
            },
            "uniqueItems": true,
            "default": [
                "*",
                "*:before",
                "*:after",
                "html",
                "body"
            ]
        },
        "forceRemove": {
            "type": "array",
            "items": {
                "type": "string",
                "minLength": 1
            },
            "uniqueItems": true,
            "default": []
        },
        "propertiesToRemove": {
            "type": "array",
            "items": {
                "type": "string",
                "minLength": 1
            },
            "uniqueItems": true,
            "default": [
                "/(.*)transition(.*)/i",
                "cursor",
                "pointer-events",
                "/(-webkit-)?tap-highlight-color/i",
                "/(.*)user-select/i"
            ]
        },
        "pseudoSelectorsToKeep": {
            "type": "array",
            "items": {
                "type": "string",
                "minLength": 1,
                "pattern": "^:[a-zA-Z-]+$"
            },
            "uniqueItems": true,
            "default": [
                ':before',
                ':after',
                ':visited',
                ':first-varter',
                ':first-line'
            ]
        },
        "maxElementsToCheckPerSelector": {
            "onOf": [{
                "type": "boolean",
                "enum": [false]
            }, {
                "type": "number",
                "minimum": 1
            }],
            "default": false
        },
        "maxEmbeddedBase64Length": {
            "type": "number",
            "minimum": 1,
            "default": 1000
        },
        "removeFontsAfterKeywords": {
            "onOf": [{
                "type": "boolean"
            }, {
                "type": "array",
                "items": {
                    "type": "string",
                    "minLength": 1
                },
                "uniqueItems": true
            }],
            "default": [
                'sans-serif',
                'serif',
                'fantasy',
                'cursive',
                'monospace'
            ]
        },
        "removeDuplicateFonts": {
            "type": "boolean",
            "default": true
        },
        "removeFontQuotes": {
            "type": "boolean",
            "default": true
        },
        "renderWaitTime": {
            "type": "number",
            "minimum": 0,
            "default": 100
        },
        "keepLargerMediaQueries": {
            "type": "boolean"
        },
        "strictParser": {
            "type": "boolean",
            "default": false
        }
    },
    "required": ["viewports"],
    "additionalProperties": false
};

window.JSONEditor = function(container, options, json) {
    options.name;
    options.mode;
    options.modes;
    options.onError;
    options.onModeChange;
    options.onChangeJSON;
    options.onChange;
    options.schema;
    options.templates;
    options.search;
    options.ace;
    options.ajv;
};
window.JSONEditor.expandAll = function() {};
window.JSONEditor.collapseAll = function() {};
window.JSONEditor.compact = function() {};
window.JSONEditor.get = function() {};
window.JSONEditor.getText = function() {};
window.JSONEditor.aceEditor;
window.JSONEditor.aceEditor.setOptions = function(opt) {
    opt.autoScrollEditorIntoView = '';
    opt.minLines = '';
    opt.maxLines = '';
};

Array.prototype.reduce;
Array.prototype.filter;
Array.prototype.some;

// cleanCSS
var cleanCSS_response = {
    errors: '',
    inlinedStylesheets: '',
    stats: '',
    styles: '',
    warnings: ''
};
var CSSLintOptions = {
    text: '',
    ruleset: []
};
var csslint_settings = {
    rules: '',
    autolint: ''
};

var cssLintMessages = [{
    col: '',
    evidence: '',
    line: '',
    message: '',
    rule: {
        id: '',
        name: '',
        desc: '',
        url: '',
        browsers: ''
    },
    type: ''
}];

var default_json = {
    "name": "",
    "conditions": [],
    "weight": 1,
    "format": {
        "breaks": {
            "afterAtRule": true,
            "afterBlockBegins": true,
            "afterBlockEnds": true,
            "afterComment": true,
            "afterProperty": true,
            "afterRuleBegins": true,
            "afterRuleEnds": true,
            "beforeBlockEnds": true,
            "betweenSelectors": true
        },
        "breakWith": "\n",
        "indentBy": 2,
        "indentWith": "space",
        "spaces": {
            "aroundSelectorRelation": true,
            "beforeBlockBegins": true,
            "beforeValue": true
        },
        "wrapAt": false
    },
    inline: ['all'],
    "level": {
        1: {
            cleanupCharsets: true, // controls `@charset` moving to the front of a stylesheet; defaults to `true`
            normalizeUrls: true, // controls URL normalization; defaults to `true`
            optimizeBackground: true, // controls `background` property optimizations; defaults to `true`
            optimizeBorderRadius: true, // controls `border-radius` property optimizations; defaults to `true`
            optimizeFilter: true, // controls `filter` property optimizations; defaults to `true`
            optimizeFont: true, // controls `font` property optimizations; defaults to `true`
            optimizeFontWeight: true, // controls `font-weight` property optimizations; defaults to `true`
            optimizeOutline: true, // controls `outline` property optimizations; defaults to `true`
            removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
            removeNegativePaddings: true, // controls removing negative paddings; defaults to `true`
            removeQuotes: true, // controls removing quotes when unnecessary; defaults to `true`
            removeWhitespace: true, // controls removing unused whitespace; defaults to `true`
            replaceMultipleZeros: true, // contols removing redundant zeros; defaults to `true`
            replaceTimeUnits: true, // controls replacing time units with shorter values; defaults to `true`
            replaceZeroUnits: true, // controls replacing zero values with units; defaults to `true`
            roundingPrecision: false, // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
            selectorsSortingMethod: 'standard', // denotes selector sorting method; can be `'natural'` or `'standard'`, `'none'`, or false (the last two since 4.1.0); defaults to `'standard'`
            specialComments: 'all', // denotes a number of /*! ... */ comments preserved; defaults to `all`
            tidyAtRules: true, // controls at-rules (e.g. `@charset`, `@import`) optimizing; defaults to `true`
            tidyBlockScopes: true, // controls block scopes (e.g. `@media`) optimizing; defaults to `true`
            tidySelectors: true, // controls selectors optimizing; defaults to `true`,
            semicolonAfterLastProperty: false, // controls removing trailing semicolons in rule; defaults to `false` - means remove
        },
        2: {
            mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
            mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
            mergeMedia: true, // controls `@media` merging; defaults to true
            mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
            mergeSemantically: false, // controls semantic merging; defaults to false
            overrideProperties: true, // controls property overriding based on understandability; defaults to true
            removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
            reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
            removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
            removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
            removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
            removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
            restructureRules: false, // controls rule restructuring; defaults to false
            skipProperties: [] // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
        }
    },
    compatibility: {
        colors: {
            opacity: true // controls `rgba()` / `hsla()` color support
        },
        properties: {
            backgroundClipMerging: true, // controls background-clip merging into shorthand
            backgroundOriginMerging: true, // controls background-origin merging into shorthand
            backgroundSizeMerging: true, // controls background-size merging into shorthand
            colors: true, // controls color optimizations
            ieBangHack: false, // controls keeping IE bang hack
            ieFilters: false, // controls keeping IE `filter` / `-ms-filter`
            iePrefixHack: false, // controls keeping IE prefix hack
            ieSuffixHack: false, // controls keeping IE suffix hack
            merging: true, // controls property merging based on understandability
            shorterLengthUnits: false, // controls shortening pixel units into `pc`, `pt`, or `in` units
            spaceAfterClosingBrace: true, // controls keeping space after closing brace - `url() no-repeat` into `url()no-repeat`
            urlQuotes: false, // controls keeping quoting inside `url()`
            zeroUnits: true // controls removal of units `0` value
        },
        selectors: {
            adjacentSpace: false, // controls extra space before `nav` element
            ie7Hack: true, // controls removal of IE7 selector hacks, e.g. `*+html...`
            mergeablePseudoClasses: [':active'], // controls a whitelist of mergeable pseudo classes
            mergeablePseudoElements: ['::after'], // controls a whitelist of mergeable pseudo elements
            mergeLimit: 8191, // controls maximum number of selectors in a single rule (since 4.1.0)
            multiplePseudoMerging: true // controls merging of rules with multiple pseudo classes / elements (since 4.1.0)
        },
        units: {
            ch: true, // controls treating `ch` as a supported unit
            in: true, // controls treating `in` as a supported unit
            pc: true, // controls treating `pc` as a supported unit
            pt: true, // controls treating `pt` as a supported unit
            rem: true, // controls treating `rem` as a supported unit
            vh: true, // controls treating `vh` as a supported unit
            vm: true, // controls treating `vm` as a supported unit
            vmax: true, // controls treating `vmax` as a supported unit
            vmin: true // controls treating `vmin` as a supported unit
        }
    }
};

var aceOptions = {
    autoScrollEditorIntoView: false,
    maxLines: Infinity
};

window.punycode = {
    'version': '',
    'ucs2': {
        'decode': '',
        'encode': '',
    },
    'decode': '',
    'encode': '',
    'toASCII': '',
    'toUnicode': ''
};

var el;
el.scrollTop;
el.scrollLeft;

var block;
block.style.height;


function st() {};
window.st = new st;

window.document;
window.parent;
window.localStorage;
window.indexedDB;
document.createEvent = function() {
    return {
        initMouseEvent: ''
    }
}

self.zip;
self.zip.useWebWorkers;
self.zip.createWriter;
self.zip.BlobWriter;
self.zip.BlobReader;
self.zip.Deflater;

var csstree;

csstree.walk = function(a, b) {
    b = {
        visit: '',
        enter: function(rule) {

            this.atrule;
            this.atrule.name;

            rule.prelude = {
                type: '',
                children: {
                    filter: function() {},
                    some: function() {},
                    isEmpty: function() {},
                    each: function() {}
                },
                name: ''
            };

            rule.block = {
                children: {
                    filter: function() {},
                    some: function() {},
                    isEmpty: function() {},
                    each: function() {}
                },
            };
        },
        leave: function() {}
    }

};
csstree.generate = function() {};
csstree.keyword = function() {

    return {
        basename: ''
    }
};
csstree.property = function() {
    return {
        name: ''
    }
};
csstree.lexer = function() {}
csstree.lexer.findAllFragments = csstree.lexer.findDeclarationValueFragments = function() {
    return [{
        nodes: []
    }]
};

csstree.parse = function(a, b) {

    b = {
        onParseError: function(error) {
            error = {
                formattedMessage: ''
            };
        }
    }
}


window.extractCriticalCSS;
window.getMatchedCSSRules;

var w;
w.getMatchedCSSRules;

var e;
e.blockedURI;
e.violatedDirective;




var CLEANCSS_SCHEMA = {
    "type": "object",
    "properties": {
        "compatibility": {
            "oneOf": [{
                "type": "string"
            }, {
                "type": "object",
                "properties": {
                    "colors": {
                        "type": "object",
                        "properties": {
                            "opacity": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            }
                        },
                        "additionalProperties": false
                    },
                    "properties": {
                        "type": "object",
                        "properties": {
                            "backgroundClipMerging": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "backgroundOriginMerging": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "backgroundSizeMerging": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "colors": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "ieBangHack": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "ieFilters": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "iePrefixHack": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "ieSuffixHack": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "merging": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "shorterLengthUnits": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "spaceAfterClosingBrace": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "urlQuotes": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "zeroUnits": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            }
                        },
                        "additionalProperties": false
                    },
                    "selectors": {
                        "adjacentSpace": {
                            "title": "",
                            "type": "boolean",
                            "default": false
                        },
                        "ie7Hack": {
                            "title": "",
                            "type": "boolean",
                            "default": true
                        },
                        "mergeablePseudoClasses": {
                            "type": "array",
                            "items": {
                                "title": "A pseudo class to whitelist.",
                                "type": "string"
                            },
                            "uniqueItems": true
                        },
                        "mergeablePseudoElements": {
                            "type": "array",
                            "items": {
                                "title": "A pseudo element to whitelist.",
                                "type": "string"
                            },
                            "uniqueItems": true
                        },
                        "mergeLimit": {
                            "type": "integer",
                            "minimum": 0,
                            "default": 8191
                        },
                        "multiplePseudoMerging": {
                            "title": "",
                            "type": "boolean",
                            "default": true
                        }
                    },
                    "units": {
                        "type": "object",
                        "properties": {
                            "ch": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "in": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "pc": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "pt": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "rem": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "vh": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "vm": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "vmax": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            },
                            "vmin": {
                                "title": "",
                                "type": "boolean",
                                "default": true
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "additionalProperties": false
            }]
        },
        "format": {
            "oneOf": [{
                "type": "string",
                "enum": [
                    "beautify",
                    "keep-breaks"
                ]
            }, {
                "type": "object",
                "properties": {
                    "breaks": {
                        "type": "object",
                        "properties": {
                            "afterAtRule": {
                                "oneOf": [{
                                    "title": "",
                                    "type": "boolean",
                                    "default": false
                                }, {
                                    "type": "string"
                                }]
                            },
                            "afterBlockBegins": {
                                "oneOf": [{
                                    "title": "",
                                    "type": "boolean",
                                    "default": false
                                }, {
                                    "type": "string"
                                }]
                            },
                            "afterBlockEnds": {
                                "oneOf": [{
                                    "title": "",
                                    "type": "boolean",
                                    "default": false
                                }, {
                                    "type": "string"
                                }]
                            },
                            "afterComment": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "afterProperty": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "afterRuleBegins": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "afterRuleEnds": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "beforeBlockEnds": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            },
                            "betweenSelectors": {
                                "title": "",
                                "type": "boolean",
                                "default": false
                            }
                        },
                        "additionalProperties": false
                    },
                    "breakWith": {
                        "type": "string",
                        "enum": [
                            "",
                            "\r\n",
                            "\n",
                            "windows",
                            "unix",
                            "crlf",
                            "lf"
                        ],
                        "default": ""
                    },
                    "indentBy": {
                        "type": "number",
                        "minimum": 0,
                        "default": 0
                    },
                    "indentWith": {
                        "type": "string",
                        "enum": [
                            "space",
                            "tab"
                        ],
                        "default": "space"
                    },
                    "spaces": {
                        "type": "object",
                        "properties": {
                            "aroundSelectorRelation": {
                                "oneOf": [{
                                    "title": "",
                                    "type": "boolean",
                                    "default": false
                                }, {
                                    "type": "string"
                                }]
                            },
                            "beforeBlockBegins": {
                                "oneOf": [{
                                    "title": "",
                                    "type": "boolean",
                                    "default": false
                                }, {
                                    "type": "string"
                                }]
                            },
                            "beforeValue": {
                                "oneOf": [{
                                    "title": "",
                                    "type": "boolean",
                                    "default": false
                                }, {
                                    "type": "string"
                                }]
                            }
                        },
                        "additionalProperties": false
                    },
                    "wrapAt": {
                        "title": "",
                        "type": "boolean",
                        "default": false
                    }
                },
                "additionalProperties": false
            }]
        },
        "inline": {
            "title": "Whitelists which @import rules will be processed.",
            "type": "array",
            "items": {
                "title": "An @import rule.",
                "type": "string"
            },
            "uniqueItems": true
        },
        "sourceMap": {
            "title": "Create CSS source maps.",
            "type": "boolean",
            "default": true
        },
        "level": {
            "title": "Optimization level configuration.",
            "type": "object",
            "properties": {
                "1": {
                    "title": "Level 1 Optimizations",
                    "type": "object",
                    "properties": {
                        "all": {
                            "title": "All optimizations",
                            "type": "boolean",
                            "default": false
                        },
                        "cleanupCharsets": {
                            "title": "Move `@charset` to the front of a stylesheet",
                            "type": "boolean",
                            "default": true
                        },
                        "normalizeUrls": {
                            "title": "URL normalization",
                            "type": "boolean",
                            "default": true
                        },
                        "optimizeBackground": {
                            "title": "`background` property optimization",
                            "type": "boolean",
                            "default": true
                        },
                        "optimizeBorderRadius": {
                            "title": "`border-radius` property optimizations",
                            "type": "boolean",
                            "default": true
                        },
                        "optimizeFilter": {
                            "title": "`filter` property optimizations",
                            "type": "boolean",
                            "default": true
                        },
                        "optimizeFont": {
                            "title": "`font` property optimizations",
                            "type": "boolean",
                            "default": true
                        },
                        "optimizeFontWeight": {
                            "title": "`font-weight` property optimizations",
                            "type": "boolean",
                            "default": true
                        },
                        "optimizeOutline": {
                            "title": "`outline` property optimizations",
                            "type": "boolean",
                            "default": true
                        },
                        "removeEmpty": {
                            "title": "Remove empty rules and nested blocks",
                            "type": "boolean",
                            "default": true
                        },
                        "removeNegativePaddings": {
                            "title": "Remove negative paddings",
                            "type": "boolean",
                            "default": true
                        },
                        "removeQuotes": {
                            "title": "Remove quotes when unnecessary",
                            "type": "boolean",
                            "default": true
                        },
                        "removeWhitespace": {
                            "title": "Remove unused whitespace",
                            "type": "boolean",
                            "default": true
                        },
                        "replaceMultipleZeros": {
                            "title": "Remove redundant zeros",
                            "type": "boolean",
                            "default": true
                        },
                        "replaceTimeUnits": {
                            "title": "Replace time units with shorter value",
                            "type": "boolean",
                            "default": true
                        },
                        "replaceZeroUnits": {
                            "title": "Replace zero values with units",
                            "type": "boolean",
                            "default": true
                        },
                        "roundingPrecision": {
                            "title": "Round pixel values to `N` decimal place",
                            "type": "boolean",
                            "default": false
                        },
                        "selectorsSortingMethod": {
                            "title": "Denote selector sorting method",
                            "oneOf": [{
                                "type": "boolean",
                                "enum": [false]
                            }, {
                                "title": "Sorting method.",
                                "type": "string",
                                "enum": [
                                    "natural",
                                    "standard",
                                    "none"
                                ],
                                "default": "standard"
                            }],
                            "default": {
                                "enabled": true,
                                "method": "standard"
                            }
                        },
                        "specialComments": {
                            "title": "Denote a number of /*! ... */ comments preserved",
                            "oneOf": [{
                                "type": "boolean",
                                "enum": [false]
                            }, {
                                "type": "number",
                                "minimum": 1,
                                "placeholder": "Leave blank for all",
                                "default": ""
                            }],
                            "default": false
                        },
                        "tidyAtRules": {
                            "title": "Control at-rules (e.g. `@charset`, `@import`) optimizing",
                            "type": "boolean",
                            "default": true
                        },
                        "tidyBlockScopes": {
                            "title": "Control block scopes (e.g. `@media`) optimizing",
                            "type": "boolean",
                            "default": true
                        },
                        "tidySelectors": {
                            "title": "Control selectors optimizing",
                            "type": "boolean",
                            "default": true
                        }
                    },
                    "additionalProperties": false
                },
                "2": {
                    "title": "Level 2 Optimizations",
                    "type": "object",
                    "properties": {
                        "all": {
                            "title": "All optimizations",
                            "type": "boolean",
                            "default": false
                        },
                        "mergeAdjacentRules": {
                            "title": "Adjacent rules merging",
                            "type": "boolean",
                            "default": true
                        },
                        "mergeIntoShorthands": {
                            "title": "Merge properties into shorthands",
                            "type": "boolean",
                            "default": true
                        },
                        "mergeMedia": {
                            "title": "Merge `@media`",
                            "type": "boolean",
                            "default": true
                        },
                        "mergeNonAdjacentRules": {
                            "title": "Merge non-adjacent rules",
                            "type": "boolean",
                            "default": true
                        },
                        "mergeSemantically": {
                            "title": "Semantic merging",
                            "type": "boolean",
                            "default": false
                        },
                        "overrideProperties": {
                            "title": "Override properties based on understandability",
                            "type": "boolean",
                            "default": true
                        },
                        "removeEmpty": {
                            "title": "Remove empty rules and nested blocks",
                            "type": "boolean",
                            "default": true
                        },
                        "reduceNonAdjacentRules": {
                            "title": "Reduce non-adjacent rules",
                            "type": "boolean",
                            "default": true
                        },
                        "removeDuplicateFontRules": {
                            "title": "Remove duplicate `@font-face`",
                            "type": "boolean",
                            "default": true
                        },
                        "removeDuplicateMediaBlocks": {
                            "title": "Remove duplicate `@media`",
                            "type": "boolean",
                            "default": true
                        },
                        "removeDuplicateRules": {
                            "title": "Remove duplicate rules",
                            "type": "boolean",
                            "default": true
                        },
                        "removeUnusedAtRules": {
                            "title": "Remove unused at rules",
                            "type": "boolean",
                            "default": false
                        },
                        "restructureRules": {
                            "title": "Restructure rules",
                            "type": "boolean",
                            "default": false
                        },
                        "skipProperties": {
                            "title": "Properties to ignore",
                            "oneOf": [{
                                "type": "boolean",
                                "enum": [false]
                            }, {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                },
                                "uniqueItems": true,
                                "default": []
                            }],
                            "default": false
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        }
    },
    "additionalProperties": false
};

var CLEANCSS_BEAUTIFY_SCHEMA = {
    "type": "object",
    "properties": {
        "format": CLEANCSS_SCHEMA.properties.format
    },
    "additionalProperties": false
};

var cleancssData = [{
    styles: '',
    errors: [],
    warnings: [],
    stats: {
        efficiency: '',
        minifiedSize: '',
        originalSize: '',
        timeSpent: ''
    },
    inlinedStylesheets: ''
}];

var scrollCfg = {
    line: 1,
    char: 1,
    ch: 1
};


var AUTOPREFIXER_SCHEMA = {
    "type": "object",
    "properties": {
        "env": {
            "type": "string",
            "default": ""
        },
        "cascade": {
            "type": "boolean",
            "default": true
        },
        "add": {
            "type": "boolean",
            "default": true
        },
        "remove": {
            "type": "boolean",
            "default": true
        },
        "supports": {
            "type": "boolean",
            "default": true
        },
        "flexbox": {
            "onOf": [{
                "type": "boolean",
            }, {
                "type": "string",
                "minLength": 1
            }],
            "default": true
        },
        "grid": {
            "type": "boolean",
            "default": false
        },
        "stats": {
            "type": "object",
            "additionalProperties": {
                "type": "object",
                "additionalProperties": {
                    "type": "number"
                }
            }
        },
        "browsers": {
            "type": "array",
            "items": {
                "type": "string",
                "minLength": 1
            },
            "uniqueItems": true
        },
        "ignoreUnknownVersions": {
            "type": "boolean",
            "default": false
        }
    },
    "additionalProperties": false
};




var CRITICALCSS_INLINE_SCHEMA = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 1,
            "pattern": "^[a-zA-Z0-9-_]+"
        },

        "weight": {
            "type": "number",
            "minimum": 1,
            "default": 1
        },
        "conditions": {
            "title": "Match on any condition in array.",
            "type": "array",
            "minItems": 1,
            "items": {
                "oneOf": [{
                    "$ref": "#/definitions/method_condition"
                }, {
                    "$ref": "#/definitions/request_condition"
                }, {
                    "title": "Match on all conditions in array.",
                    "type": "array",
                    "minItems": 1,
                    "items": {
                        "$ref": "#/definitions/method_condition"
                    },
                    "uniqueItems": true
                }]
            },
            "uniqueItems": true
        }
    },

    "definitions": {
        "request_condition": {
            "oneOf": [{
                "title": "Match the URL of an asset.",
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "enum": ["url"]
                    },
                    "pattern": {
                        "oneOf": [{
                            "type": "string",
                            "minLength": 1
                        }, {
                            "type": "array",
                            "items": {
                                "type": "string",
                                "minLength": 1
                            },
                            "uniqueItems": true
                        }]
                    },
                    "regex": {
                        "type": "boolean"
                    },
                    "exclude": {
                        "type": "boolean"
                    }
                },
                "required": ["type", "pattern"],
                "additionalProperties": false
            }, {
                "title": "Match a request header.",
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "enum": ["header"]
                    },
                    "name": {
                        "title": "Header name to match",
                        "type": "string",
                        "minLength": 1
                    },
                    "pattern": {
                        "oneOf": [{
                            "type": "string",
                            "minLength": 1
                        }, {
                            "type": "array",
                            "items": {
                                "type": "string",
                                "minLength": 1
                            },
                            "uniqueItems": true
                        }, {
                            "title": "Compare a numeric header value.",
                            "type": "object",
                            "properties": {
                                "operator": {
                                    "type": "string",
                                    "enum": ["<", "=", ">"]
                                },
                                "value": {
                                    "type": "number"
                                }
                            },
                            "required": ["operator", "value"],
                            "additionalProperties": false
                        }]
                    },
                    "regex": {
                        "title": "Use regular expression for pattern",
                        "type": "boolean",
                        "default": false
                    },
                    "exclude": {
                        "title": "Match requests not matching pattern",
                        "type": "boolean",
                        "default": false
                    },
                    "required": {
                        "title": "Require header to be present",
                        "type": "boolean",
                        "default": false
                    }
                },
                "required": ["type", "name", "pattern"],
                "additionalProperties": false
            }]
        },
        "method_condition": {
            "title": "Condition configuration object",
            "type": "object",
            "properties": {
                "method": {
                    "title": "The method to call.",
                    "type": "string",
                    "pattern": "^([\\A-Za-z0-9_-]+::)?[A-Za-z0-9_-]+$"
                },
                "params": {
                    "title": "Parameters to apply to the method.",
                    "default": "null",
                    "oneOf": [{
                        "type": "null"
                    }, {
                        "type": "array",
                        "minItems": 1,
                        "items": {
                            "oneOf": [{
                                "type": "null"
                            }, {
                                "type": "boolean"
                            }, {
                                "type": "integer",
                                "minimum": 1
                            }, {
                                "type": "string",
                                "minLength": 1
                            }, {
                                "type": "array",
                                "minItems": 1,
                                "items": {
                                    "oneOf": [{
                                        "type": "null"
                                    }, {
                                        "type": "boolean"
                                    }, {
                                        "type": "integer",
                                        "minimum": 1
                                    }, {
                                        "type": "string",
                                        "minLength": 1
                                    }, {
                                        "type": "array",
                                        "minItems": 1,
                                        "items": {
                                            "oneOf": [{
                                                "type": "integer",
                                                "minimum": 1
                                            }, {
                                                "type": "string",
                                                "minLength": 1
                                            }]
                                        },
                                        "uniqueItems": true
                                    }]
                                }
                            }]
                        }
                    }]
                },
                "result": {
                    "title": "The method result to match.",
                    "oneOf": [{
                        "type": "boolean",
                        "default": true
                    }, {
                        "type": "integer"
                    }, {
                        "type": "string"
                    }, {
                        "title": "Match against an array.",
                        "type": "array",
                        "minItems": 1,
                        "items": {
                            "oneOf": [{
                                "type": "integer"
                            }, {
                                "type": "string"
                            }]
                        },
                        "uniqueItems": true
                    }]
                }
            },
            "required": ["method"]
        }
    },

    "required": ["viewports"],
    "additionalProperties": false
};

var cleancss_config = {
    fetch: function() {

    },
    inline: '',
    format: 'beautify',
    level: 1
}


var st_result = {
    files: [],
    text: '',
    config: default_json
};