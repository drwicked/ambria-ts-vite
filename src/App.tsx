import { AiOutlineAmazon, AiOutlineInstagram } from 'react-icons/ai';
import { FaGoodreads } from 'react-icons/fa';
import './App.css';

const links = [
  {
    title: 'Amazon Author Page',
    url: 'https://www.amazon.com/stores/Rachel-Anding/author/B00I6L1LT4',
    Icon: AiOutlineAmazon,
  },
  {
    title: 'Goodreads',
    url: 'https://www.goodreads.com/author/show/7796202.Rachel_Anding',
    Icon: FaGoodreads,
  },
  {
    title: 'mothmanateee (art)',
    url: 'https://www.instagram.com/mothmanateee/',
    Icon: AiOutlineInstagram,
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="header">Ambria Eden</h1>
      <div className="card-list">
        {links.map(({ Icon, title, url }) => (
          <div className="card" key={title}>
            <a href={url}>
              <Icon />
              {title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
