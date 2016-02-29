define([
    'react'
], function(React){
    var helloWorld = {
        init: function(){
             React.render(
                <h1>Hello, world!</h1>,
                document.getElementById('example')
              );
        }
    };

    return helloWorld;
});