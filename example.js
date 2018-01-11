class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            items:[
            {key:1,
                text:"Item 1"}, 
            {key:2,
                text:"Item 2"},
            {key:3,
                text:"Item 3"}
            ],
        };
        this.render_item=this.render_item.bind(this); // Setting "this" within the function to be the Playlist object
    }
    render_item(item) {
        return <PlaylistItem title={item.text} clickHandler={()=>this.delete_item(item.key)} />;
    }
    delete_item(key) {
        // Keep only items, whose key is not the key provided
        const new_items=this.state.items.filter(function(item) {
            return (item.key != key);
        })
        this.setState({items: new_items});
    }
    render() {
        var playlist_items=this.state.items.map(this.render_item)
        return (
            <table>
                {playlist_items}
            </table>
        );
    }
}
class PlaylistItem extends React.Component {
    render() {
        return (
            <tr><td>{this.props.title}</td><td onClick={()=>this.props.clickHandler()}>DEL</td></tr>
        );
    }
}
ReactDOM.render(
    <Playlist />,
    document.getElementById('root')
);
