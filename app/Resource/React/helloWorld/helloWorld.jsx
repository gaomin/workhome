define([
    'react',
    'react-dom'
], function(React, ReactDom){
    var helloWorld = {

        init: function(){
            var HelloWorld = React.createClass({
                render: function(){
                    return (
                        <p>Hello,
                            <span>It is {this.props.date.toTimeString()}</span>
                        </p>
                    );
                }
            });

            setInterval(function(){
                ReactDom.render(
                    <HelloWorld date={new Date()}/>,
                    $('#example')[0]
                );
            },500);
        }
    };

    return helloWorld;
});