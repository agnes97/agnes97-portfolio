import { WishlistItem } from '../types';

import kitsch from '../../../assets/wishlist/kitsch.png';
import mixit from '../../../assets/wishlist/mixit.png';
import oxalis from '../../../assets/wishlist/oxalis.png';

export const wishlist2026Christmas: WishlistItem[] = [
  {
    emoji: '🍓',
    title: 'Healthy Snacks',
    price: '1200',
    imageSrc: mixit.src,
    link: 'https://www.mixit.cz/produkt/zamilovane-ovoce-mango-zlute-kiwi-jahoda-3199',
    received: false,
  },
  {
    emoji: '🍵',
    title: 'Tea against acne',
    price: '250',
    imageSrc: 'https://www.oxalis.cz/files/products_images/xlarge/0/60014.jpg',
    link: 'https://www.oxalis.cz/nana-mata-list-250-g.html',
    received: false,
    isFav: true,
  },
  {
    emoji: '🍵',
    title: 'Teas to try',
    price: '200',
    imageSrc: oxalis.src,
    link: 'https://www.oxalis.cz/',
    received: false,
  },
  {
    emoji: '🪽',
    title: 'Kitsch Satin Pillows',
    price: '1500',
    imageSrc: kitsch.src,
    link: 'https://www.mykitsch.com/en-cz/products/kitsch-x-bridgerton-satin-pillowcase',
    received: false,
  },
];
