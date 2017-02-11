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
    var bookNames = Object.keys(this.state.data.books)
    var obj = ''
    var rows = []

    for (let i of bookNames) {
      obj = this.state.data.books[i];
      console.log(obj['author_fl'])
      console.log(i)
      console.log("i in bookNames")
      rows.push(<tr key={i}>
        <td>{obj['author_lf']}</td>
        <td>{obj['title']}</td>
        <td>{obj['publicationdate']}</td>
      </tr>)
    }

    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}
