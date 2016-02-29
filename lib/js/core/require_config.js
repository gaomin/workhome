(function(){
    require.config({
        jsx: {
            fileExtension: '.jsx',
            harmony: true,
            stripTypes: true
        },
        paths: {
            "react": "/lib/js/gallery/react",
            "JSXTransformer": "/lib/js/gallery/JSXTransformer",
            "css": "/lib/js/gallery/requirejs/css",
            "jsx": "/lib/js/gallery/requirejs/jsx",
            "text": "/lib/js/gallery/requirejs/text"
        },
        shim: {
            "JSXTransformer":{

            }
        }
    });
})();