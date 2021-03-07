import React, { useEffect, useState } from "react";
import Book from "../Components/Book";
import api from "../Utils/api";
import Loading from "../Components/Loading";

export default function Favorites() {

  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    async function get() {
      setLoading(true)
      const { data } = await api.get('favorites')
      setFavorites(data)
      setLoading(false)
    }
    get()
  }, [])

  const removeFavorite = async (id) => {
    if (window.confirm("Confirma a exclusão do Favorito?")) {
      setLoading(true);
      try {
        const { data } = await api.delete(`favorites/${id}`);
        setFavorites([...data])
        window.alert("Favorito Removido com sucesso")
      } catch (error) {
        window.alert("Erro ao excluir o favorito")
      }
      setLoading(false);
    }
  }


  return (

    <div className='center'>
      {
        loading ?
          <Loading /> :

          favorites.map((book) => {
            return (
              <Book book={book.book} key={book.id}>
                <a
                  class="waves-effect waves-light red btn"
                  style={{
                    marginRight: "1%",
                  }}
                  title="Remover Favorito"
                  onClick={() => removeFavorite(book.id)}
                  disabled={loading}
                >
                  Remover
            </a>
              </Book>
            )
          })
      }
    </div>

  )
}
