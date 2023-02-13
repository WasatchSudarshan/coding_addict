import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/8144Vic9C5L._AC_UY218_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/510g8NLbpNL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
  {
    id: 3,
    img: "https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41tesqOC72L._AC_UL116_SR116,116_.jpg",
    title: "THE VANISHING HALF",
    author: "Brit Bennett",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
