import React from 'react';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="container">
        <div class="section">
          <div className="row">
            <div className="col s12 ">
              <div className="input-field col s10">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate" />

              </div>
              <div className="col s2">
                <button class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">search</i></button>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="card-panel grey lighten-5 z-depth-1">
              <div class="row valign-wrapper">
                <div class="col s3">
                  <img src="http://books.google.com/books/content?id=4dDVDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" alt="" class="responsive-img" />
                </div>
                <div class="col s10">
                  <h4>Build a Career in Data Science</h4>
                  <p class="black-text">
                    Eric Ries defines a startup as an organization dedicated to creating something new under conditions of extreme uncertainty. This is just as true for one person in a garage or a group of seasoned professionals in a Fortune 500 boardroom.
                  </p>
                  <a class="waves-effect waves-light btn" style={{
                    marginRight: '1%'
                  }} >Favorito</a>
                  <a class="waves-effect waves-light btn">Visualizar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
