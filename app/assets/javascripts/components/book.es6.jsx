class Book extends React.Component {
  constructor() {
    super();
    this.state = { data: { books: [] } };
  }

  componentDidMount () {
    fetch('https://www.librarything.com/api_getdata.php?userid=kabrahamson&key=3852431631&responseType=json', {
      method: 'GET',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*'
      })
    })
    .then(response => response.json())
    .then(json => this.setState({ data: json}))
  }
  render() {
    var books = this.state.data.books
    // API response logged
    console.log(books)
    // eventually something that accesses nested json objects and returns table data
    var rows = books.map(function(obj) {
      return (<tr>
        <td>{obj.author_lf}</td>
      </tr>)
    });
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
