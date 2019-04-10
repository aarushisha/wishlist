class WishList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
    this.addItem = this.addItem.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount(){
    this.getItems();
  }

  getItems() {

  }


  addItem() {
    $.ajax('/addItem', {
      method: 'POST',
      data: JSON.stringify({name: document.getElementById('itemInput').value}),
      contentType: 'application/json',
      success: items => {
        var itemsCopy = this.state.items.slice();
        itemsCopy.push({name: items[0].name, bought: 0});
        this.setState({
          items: itemsCopy,
        })
      }
      })
    }
  

  render() {
    return (
      <div>
        <div>Wish List</div>
        <input id="itemInput" type="text" defaultValue="Enter Item Here..."></input>
        <input type="submit" value="Add Item!" onClick={()  => this.addItem()}></input>
        {this.state.items.map(item => <div id={item.name}>{item.name} {item.price} {item.bought === 0 ? 'not bought' : 'bought'}</div>)}
      </div>
    )
  }
}

ReactDOM.render(<WishList />, document.getElementById('root'));