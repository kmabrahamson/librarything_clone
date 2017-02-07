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
    }).then(response => response.json() ).then(json => this.setState({ data: json}));
  }
  render() {
    var books = this.state.data.books;
    console.log(books);
    var rows = books.map(function(item) {
      return (<tr>
        <td>{item.author_lf}</td>
        <td>{item.title}</td>
        <td>{item.publicationdate}</td>
        <td>{item.entry_date}</td>
        <td>{item.cover}</td>
      </tr>)
    });
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
