import React from "react";
import './../App.css'

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col s12 ">
          <div className="input-field col s10">
            <input
              placeholder="Placeholder"
              id="first_name"
              type="text"
              class="validate"
            />
          </div>
          <div className="col s2">
            <button class="btn-floating btn-large waves-effect waves-light red">
              <i class="material-icons">search</i>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s3">
              <img
                src="http://books.google.com/books/content?id=4dDVDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                alt=""
                class="responsive-img"
              />
            </div>
            <div class="col s10">
              <h4>Build a Career in Data Science</h4>
              <p class="black-text book-description">
                Summary You are going to need more than technical knowledge to succeed as a data scientist. Build a Career in Data Science teaches you what school leaves out, from how to land your first job to the lifecycle of a data science project, and even how to become a manager. Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications. About the technology What are the keys to a data scientist’s long-term success? Blending your technical know-how with the right “soft skills” turns out to be a central ingredient of a rewarding career. About the book Build a Career in Data Science is your guide to landing your first data science job and developing into a valued senior employee. By following clear and simple instructions, you’ll learn to craft an amazing resume and ace your interviews. In this demanding, rapidly changing field, it can be challenging to keep projects on track, adapt to company needs, and manage tricky stakeholders. You’ll love the insights on how to handle expectations, deal with failures, and plan your career path in the stories from seasoned data scientists included in the book. What's inside Creating a portfolio of data science projects Assessing and negotiating an offer Leaving gracefully and moving up the ladder Interviews with professional data scientists About the reader For readers who want to begin or advance a data science career. About the author Emily Robinson is a data scientist at Warby Parker. Jacqueline Nolis is a data science consultant and mentor. Table of Contents: PART 1 - GETTING STARTED WITH DATA SCIENCE 1. What is data science? 2. Data science companies 3. Getting the skills 4. Building a portfolio PART 2 - FINDING YOUR DATA SCIENCE JOB 5. The search: Identifying the right job for you 6. The application: Résumés and cover letters 7. The interview: What to expect and how to handle it 8. The offer: Knowing what to accept PART 3 - SETTLING INTO DATA SCIENCE 9. The first months on the job 10. Making an effective analysis 11. Deploying a model into production 12. Working with stakeholders PART 4 - GROWING IN YOUR DATA SCIENCE ROLE 13. When your data science project fails 14. Joining the data science community 15. Leaving your job gracefully 16. Moving up the ladder
              </p>
              <a
                class="waves-effect waves-light btn"
                style={{
                  marginRight: "1%",
                }}
              >
                Favorito
              </a>
              <a class="waves-effect waves-light btn">Visualizar</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
