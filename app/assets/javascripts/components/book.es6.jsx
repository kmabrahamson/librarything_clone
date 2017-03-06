class Book extends React.Component {
  constructor() {
    super();
    this.state = { data: { books: [] } };
  }
  // get LibraryThing info from internal route instead of introducing potential CORS issues
  componentDidMount () {
    fetch('/books_data')
    .then(response => response.json()).then(json => this.setState({ data: json }))
  }

  render() {
    var bookNames = Object.keys(this.state.data.books)
    // inspect info in console for debugging
    // console.log(bookNames)
    var obj = ''
    var rows = []
    // iterate through nested book objects and their attrs
    for (let i of bookNames) {
      obj = this.state.data.books[i];
      // double check for debugging purposes
      // console.log(obj['author_fl'])
      // console.log("i in bookNames")
      rows.push(<tr key={i}>
        <td>{obj['author_lf']}</td>
        <td>{obj['title']}</td>
        <td>{obj['publicationdate']}</td>
      </tr>)
    }

    return (
      <table className="table table-striped">
        <thead>
          <tr className="info">
            <th>Author</th>
            <th>Title</th>
            <th>Publication Date</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
