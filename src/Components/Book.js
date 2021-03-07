import React from 'react';

export default function Book({ book, children }) {
    return (



        <div class="card-panel grey lighten-5 z-depth-1" >
            <div class="row valign-wrapper">
                <div class="col s3">
                    <img
                        src={book.image}
                        alt=""
                        class="responsive-img"
                    />
                </div>
                <div class="col s10">
                    <h4>{book.title}</h4>
                    <p class="black-text book-description">
                        {book.description}
                    </p>
                    {children}
                    <a class="waves-effect waves-light btn"
                        href={book.previewLink}
                        title="Preview"
                        target="_blank"
                    >
                        Visualizar
                            </a>
                </div>
            </div>
        </div>


    )
}