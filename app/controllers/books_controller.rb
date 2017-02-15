class BooksController < ApplicationController
  def index

  end

  def books_data
    url = 'https://www.librarything.com/api_getdata.php?userid=kabrahamson&key=3852431631&responseType=json'
    response = HTTParty.get(url)
    response.parsed_response
    @books = response.parsed_response
    render json: @books.to_json
  end

  def search
  end

end
