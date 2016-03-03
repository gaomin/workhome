define([
    'react',
    'react-dom'
],function(React,ReactDom){

    var state = {
        init: function(){
            var LinkButton = React.createClass({
                getInitialState: function(){
                    return {liked: false};
                },
                handleClick: function(event){
                    this.setState({liked: !this.state.liked});
                },
                render: function(){
                    var text = this.state.liked ? 'like' : 'haven\'t liked';
                    return (
                        <p onClick={this.handleClick}>
                            You {text} this. Click to toggle.
                        </p>
                    );
                }
            });

            ReactDom.render(
                <LinkButton />,
                $('#example')[0]
            );
        }
    };

    return state;
    
});