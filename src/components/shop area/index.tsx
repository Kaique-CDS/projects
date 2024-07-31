import { HeartIcon, Star } from 'lucide-react'
import image from '../../assets/images/products/tenis1.jpg'
import './styles.css'
export function Shopping() {
  return (
    <section className="container">
      <div>{/* breadcrumb */}</div>
      <div className="product-image">
        <img src={image} alt="Rebook Zig Kinetica 3" />
      </div>
      <div className="info">
        <div className="tittle">
          <h2>Shoes Rebook zig Kinetica 3</h2>
          <div className="rewiews">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p>42 rewiews</p>
          </div>
          <h1>$199.00</h1>
        </div>
        <div className="color-shoes">
          <p>
            Color: <span>Black</span>
          </p>
          <button />
        </div>
        <div className="size">
          <span>Size</span>
          <div className="buttons">
            <button>40.5</button>
            <button>41</button>
            <button>42</button>
            <button>43</button>
            <button>43.5</button>
            <button>44</button>
            <button>44.5</button>
            <button>45</button>
            <button>46</button>
          </div>
        </div>
        <div className="cart">
          <button>Add to Cart</button>
          <button id="heart">
            <HeartIcon size={33} />
          </button>
        </div>
      </div>
    </section>
  )
}
