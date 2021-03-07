import React, { useState } from "react";
import Book from "../Components/Book";
import Loading from "../Components/Loading";
import api from "../Utils/api";
import './../App.css'
import { useHistory } from "react-router-dom";

export default function Home() {

  const history = useHistory();
  const [inputSearch, setInputSearch] = useState("");
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const searchBooks = async () => {
    setLoading(true)
    const { data } = await api.get(`books/${inputSearch}`);
    setLoading(false)
    setBooks(data);

  }

  const addFavorite = async (book) => {
    setLoading(true)
    try {
      await api.post('favorites', { book: book })
      history.push('/favoritos')

    } catch (error) {
      console.log(error)
      window.alert('Erro ao adicionar favorito')
    }
    setLoading(false)

  }

  return (
    <>
      <div className="row">
        <div className="col s12 ">
          <div className="input-field col s10">
            <input
              placeholder="Procure um livro"
              id="first_name"
              type="text"
              class="validate"
              onChange={(e) => setInputSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && inputSearch != "") {
                  searchBooks()
                }
              }}
            />
          </div>
          <div className="col s2">
            <button class="btn-floating btn-large waves-effect waves-light red"
              onClick={searchBooks}
              disabled={inputSearch.length == 0}

            >
              <i class="material-icons">search</i>
            </button>
          </div>
        </div>
      </div>
      <div className="row center">
        {
          loading ?
            <Loading /> :
            books.map((book) => {
              return (<Book book={book} key={book.id}>
                <a
                  class="waves-effect waves-light btn"
                  style={{
                    marginRight: "1%",
                  }}
                  title="Adicionar Ao Favoritos"
                  onClick={() => addFavorite(book)}
                  disabled={loading}
                >
                  Favorito
                </a>
              </Book>)
            })
        }
      </div>
    </>
  );
}
