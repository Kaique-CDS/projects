import { CircleUserRound, Search, ShoppingBasket, ThumbsUp } from 'lucide-react'
import './styles.css'
export function Header() {
  return (
    <>
      <header className="header">
        <div className="tittle">
          <h2>
            BR.<span>F</span>
          </h2>
        </div>
        <div className="search">
          <input type="text" name="search" placeholder="Search..." />
          <Search />
        </div>
        <div className="icons">
          <ShoppingBasket size={30} />
          <ThumbsUp size={30} />
          <CircleUserRound size={30} />
        </div>
      </header>
      <nav className="category">
        <p>Women</p>
        <p>Men</p>
        <p>Kids</p>
        <p>Sports</p>
        <p>Brands</p>
        <p>New</p>
        <p style={{ color: 'red' }}>Sale</p>
      </nav>
    </>
  )
}
