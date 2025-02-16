import { WishlistItem } from '../types';

import edinburghScarf from '../../../assets/wishlist/edinburgh-scarf.png';
import dressMramorGreen from '../../../assets/wishlist/dress-mramor-green.png';
import dressMramorPink from '../../../assets/wishlist/dress-mramor-pink.png';
import scottishSkirt from '../../../assets/wishlist/scottish-skirt.png';
import beigeSkirt from '../../../assets/wishlist/beige-skirt.png';

export const wishlist2023Birthday: WishlistItem[] = [
  {
    emoji: '🦜',
    title: 'Puzzle 1000ks papoušci s 3D efektem',
    price: '200',
    imageSrc:
      'https://media.puzzlelink.co.uk/images/puzzle-products/22539/6e7405f7-2c3f-42bf-bd62-dcb47a802c78/clementoni-39188-the-parrots-1000-pieces-puzzle.jpg?width=600&maxheight=600&bgcolor=ffffff',
    link: 'https://www.vinted.cz/zabava/hry-a-puzzle/puzzle/2105796638-puzzle-3d-clementoni-1000-papugi',
    received: true,
  },
  {
    emoji: '🦜',
    title: 'Puzzle 1000ks papoušci',
    price: '200',
    imageSrc:
      'https://img-cdn.heureka.group/v1/de6b5fce-4e56-48b3-bdb8-a0240fd85620.jpg',
    link: '',
    received: false,
    isNoLongerWanted: true,
  },
  {
    emoji: '🐍',
    title: 'Vývrtka “Mamba” ve tvaru hada',
    price: '150',
    imageSrc:
      'https://img.cz.favicdn.net/images/products/600x600/323772c8-34d6-438a-9b83-9317354698d8.jpg',
    link: '',
    received: true,
  },
  {
    emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    title: '180cm dlouhá šála 100% ovečka ❤ vyrobená v Edinburku',
    price: '700',
    imageSrc: edinburghScarf.src,
    link: edinburghScarf.src,
    received: true,
    hasCoverPhoto: true,
  },
  {
    emoji: '👗',
    title: 'Růžové mramorované šatičky',
    price: '500',
    imageSrc: dressMramorPink.src,
    link: dressMramorPink.src,
    received: true,
    hasCoverPhoto: true,
  },
  {
    emoji: '👗',
    title: 'Zelené mramorované šatičky',
    price: '400',
    imageSrc: dressMramorGreen.src,
    link: dressMramorGreen.src,
    received: false,
    hasCoverPhoto: true,
  },
  {
    emoji: '🎀',
    title: '[496] Ahsoka Valentine',
    price: '300',
    imageSrc:
      'https://www.jedishop.cz/_obchody/www.jedishop.cz/prilohy/431/star-wars-valentines-pop-star-wars-vinylova-figure.jpg.big.jpg',
    link: 'https://www.konzoliste.cz/figurky-funko-pop/funko-pop--496-star-wars-ahsoka',
    received: false,
  },
  {
    emoji: '🗡️',
    title: '[895] Xena Funko Pop',
    price: '400',
    imageSrc: 'https://m.media-amazon.com/images/I/71Bu9nEoUvL.jpg',
    link: 'https://www.xzone.cz/figurka-xena-warrior-princess-xena-funko-pop-television-895',
    received: true,
  },
  {
    emoji: '🦜',
    title: 'nafukovací papoušek 2,03m x 1,32m',
    price: '400',
    imageSrc:
      'https://www.balabim.cz/sub/balabim.sk/shop/product/nafukovacka-papagaj-230-x-180-cm-bestway-4290.jpg',
    link: '',
    received: true,
    hasCoverPhoto: true,
  },
  {
    emoji: '👸',
    title: 'midi sukně na šněrování',
    price: '200',
    imageSrc: beigeSkirt.src,
    link: beigeSkirt.src,
    received: false,
    hasCoverPhoto: true,
    isNoLongerWanted: true,
  },
  {
    emoji: '🐍',
    title: 'Kuchyňská zástěra Zmijozelská',
    price: '499',
    imageSrc:
      'https://fantasyobchod.gumlet.io/kuchynska-zastera-harry-potter-zmijozel-5f4f1669a08d7.jpg?mode=fill&fill=solid&fill-color=ffffff&w=1000&dpr=2.0',
    link: 'https://www.imago.cz/kuchynska-zastera-harry-potter-zmijozel',
    received: false,
  },
  {
    emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    title: '“skotská” midi sukně',
    price: '300',
    imageSrc: scottishSkirt.src,
    link: scottishSkirt.src,
    received: false,
    hasCoverPhoto: true,
  },
];
