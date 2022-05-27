{
  /* <article>
  <h2>Card Title</h2>
  <p>Card Description</p>
  <p>Card Price</p>
</article>; */
}

//! The first way of cards layout
import products from './cards-from-backend.js';

const makeCardLayout = ({ title, description, price }) => {
  const articleRef = document.createElement('article');

  const articleTitle = document.createElement('h2');
  articleTitle.textContent = title;

  const articleDescription = document.createElement('p');
  articleDescription.textContent = description;

  const articleDPrice = document.createElement('p');
  articleDPrice.textContent = `Price: $${price}`;

  articleRef.append(articleTitle, articleDescription, articleDPrice);

  return articleRef;
};

// console.log(
//   makeCardLayout({
//     title: 'card1',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, saepe.',
//     price: 2000,
//   }),
// );

const cards = products.map(makeCardLayout);

const cardsContainer = document.querySelector('.cards-container');

cardsContainer.append(...cards);
