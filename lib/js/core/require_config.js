(function(){
    require.config({
        jsx: {
            fileExtension: '.jsx',
            harmony: true,
            stripTypes: true
        },
        paths: {
            "react": "/lib/js/gallery/react-with-addons",
            "react-dom": "/lib/js/gallery/react-dom",
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