import { WishlistItem } from '../types';

import phoneCase from '../../../assets/wishlist/phone-case.png';
import dndDouble from '../../../assets/wishlist/dnd-double.png';
import tulips from '../../../assets/wishlist/tulips.png';
import surpriseTrip from '../../../assets/wishlist/surprise-trip.png';
import sauna from '../../../assets/wishlist/sauna.webp';
import zupan from '../../../assets/wishlist/vs-stripes.jpg';
import tropicana from '../../../assets/wishlist/tropicana.jpeg';

export const wishlist2024Birthday: WishlistItem[] = [
  {
    emoji: '📱',
    title: 'ajťácký phone case',
    price: '500',
    imageSrc: phoneCase.src,
    link: phoneCase.src,
    received: true,
  },
  {
    emoji: '🍓',
    title: 'order ungodly sweet waffles when we’re in Praze via Wolt',
    price: '???',
    imageSrc:
      'https://img.freepik.com/premium-photo/hong-kong-style-egg-waffle-with-strawberry_199620-9465.jpg',
    link: '',
    received: false,
  },
  {
    emoji: '🪼',
    title: 'hot tub + sauna a room with jellyfish',
    price: '3 000',
    imageSrc: sauna.src,
    link: 'https://www.slevomat.cz/akce/2141320-cas-pro-vas-2-privatni-wellness-s-moznosti-obcerstveni',
    received: false,
    hasCoverPhoto: true,
  },
  {
    emoji: '🧴',
    title: 'Soothing & Barrier Support Serum',
    price: '500',
    imageSrc:
      'https://cdn.notinoimg.com/detail_zoom_2k/the_ordinary/769915233247_3/soothing-barrier-support-serum___231002.jpg',
    link: 'https://www.notino.cz/the-ordinary/soothing-barrier-support-serum-serum-pro-obnovu-kozni-bariery/p-16204330/',
    received: true,
    hasCoverPhoto: true,
  },
  {
    emoji: '🎲',
    title: '3D print our DnD characters',
    price: '???',
    imageSrc: dndDouble.src,
    link: dndDouble.src,
    received: false,
    isFav: true,
  },
  {
    emoji: '🪄',
    title: 'watch “A Very Potter Musical” again',
    price: '???',
    imageSrc:
      'https://thedialogtheatre.wordpress.com/wp-content/uploads/2020/05/team-starkid-a-very-potter-sequel-e1588314513877.jpg?w=1500&h=768&crop=1',
    link: '',
    received: false,
  },
  {
    emoji: '',
    title: 'bubble tea date (go out or buy a set to make it together at home)',
    price: '???',
    imageSrc:
      'https://tyberrymuch.com/wp-content/uploads/2022/07/taro-milk-tea-recipe-1-720x720.jpg',
    link: '',
    received: false,
    hasCoverPhoto: true,
  },
  {
    emoji: '🔥',
    title: 'try if our hookah works (a little fire hazard never killed nobody)',
    price: '???',
    imageSrc:
      'https://t3.ftcdn.net/jpg/02/42/60/74/360_F_242607495_uFBa0KUtBuBWYKqU6pc8vgLaDLyptnqe.jpg',
    link: '',
    received: false,
    hasCoverPhoto: true,
  },
  {
    emoji: '🔥',
    title: 'try Sauna Tropicana in Hradec (even if I’m very afraid of people)',
    price: '???',
    imageSrc: tropicana.src,
    link: '',
    received: true,
    hasCoverPhoto: true,
  },
  {
    emoji: '🎀',
    title: 'Victoria’s Secret very fancy bathrobe',
    price: '2 400',
    imageSrc: zupan.src,
    link: 'https://victoriassecret.cz/vs/satenovy-zupan-s-volanem.html',
    received: true,
    isFav: true,
  },
  {
    emoji: '🎲',
    title:
      'plan, organise and take me to play Arkham Horror with at least 2 friends (can be at home, can be at a pub, anywhere really)',
    price: '???',
    imageSrc: 'https://m.media-amazon.com/images/I/71sLGwP768L.jpg',
    link: '',
    received: true,
    isDoubleCard: true,
  },
  {
    emoji: '♥️',
    title:
      'plan, organise and take me on a surprise trip like Adršpach or Lovětínská Rokle (tell me at noon before so I can get ready!)',
    price: '???',
    imageSrc: surpriseTrip.src,
    link: surpriseTrip.src,
    received: false,
    isDoubleCard: true,
    isFav: true,
  },
  {
    emoji: '🍵',
    title: 'sassy mug for a princess',
    price: '650',
    imageSrc:
      'https://www.cicavkleci.cz/wp-content/uploads/2023/05/cicavkleci_jsemprinceznavole-ORIGINAL-hrnek-560ml-11-LIMITOVANA-EDICE-scaled.jpg',
    link: 'https://www.cicavkleci.cz/produkt/velky-fialovy-hrnek-jsem-princezna-vole-560-ml/',
    received: true,
    hasCoverPhoto: true,
  },
  {
    emoji: '💐',
    title: 'tulips but in colors exactly like these I got a few years ago <2',
    price: '???',
    imageSrc: tulips.src,
    link: tulips.src,
    received: true,
    hasCoverPhoto: true,
  },
];
