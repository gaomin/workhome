define([
    'react'
], function(React){
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
                React.render(
                    <HelloWorld date={new Date()}/>,
                    $('#example')[0]
                );
            },500);
        }
    };

    return helloWorld;
});