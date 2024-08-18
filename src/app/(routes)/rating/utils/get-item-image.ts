import defaultImage from '../../../assets/spiral.jpg';

export const getItemImage = (itemTitle: string): string => {
  switch (itemTitle) {
    case 'Hyde Park picnic with parrots':
      return 'https://assets.londonist.com/uploads/2017/02/i875/perch.jpg';
    case 'Leadenhall Market':
      return 'https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2019/11/30044509/Leadenhall-Market-1024x682.jpg';
    case 'Barbican Conservatory':
      return 'https://www.thebumpercrew.com/wp-content/uploads/2023/07/20230709-Barbican-Conservatory-038.jpeg';
    case 'Novelty Automation':
      return 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d8/34/6d/photo0jpg.jpg?w=1200&h=1200&s=1';
    case 'EL&N London':
      return 'https://www.timeoutriyadh.com/cloud/timeoutriyadh/2022/04/12/Untitled-5-1024x768.png';
    case 'Hamleys':
      return 'https://assets.londonist.com/uploads/2018/07/i875/hagrid.jpg';
    case 'House of MinaLima':
      return 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/a8/e2/fb/house-of-minalima.jpg?w=1200&h=-1&s=1';
    case 'Mercato Mayfair':
      return 'https://static.wixstatic.com/media/8327c7_29e42f20811d4331b01b060ffdd6e51a~mv2.jpg/v1/fill/w_600,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8327c7_29e42f20811d4331b01b060ffdd6e51a~mv2.jpg';
    case 'Borough Market':
      return 'https://cdn.vox-cdn.com/thumbor/R_hYGV48_I9GSwl0FWNpqHobgmg=/0x0:5616x3744/1200x800/filters:focal(2359x1423:3257x2321)/cdn.vox-cdn.com/uploads/chorus_image/image/55176975/Borough_Market.0.jpg';
    case 'Haute Dolci The O2':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UeX1gsULHUiiVitjRqBDj2VXD7AtItKhRNPz6s3Ps7oToNJYLIpasYcK2e292Hq-0_U&usqp=CAU';
    case 'Beans & Bites':
      return 'https://img.restaurantguru.com/r82c-Beans-and-Bites-meals-2023-08.jpg';
    case 'Greedy Cow Bakes':
      return 'https://hampsteadvillagelondon.com/wp-content/uploads/1/greedy-cow-bakes-Ljui.webp';
    case 'Avora London':
      return 'https://media.timeout.com/images/105971328/image.jpg';
    case 'Attendant Coffee Roasters':
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndvp770UoOA1-S5FsqjM_AJtbnZZM9Fkn3P5x-M468Zzh1LhA2bsdeU9cFi2yUfWc9yM&usqp=CAU';
    case 'Shad Thames Beach Spot':
      return 'https://i.ytimg.com/vi/MajOAMH7mhQ/maxresdefault.jpg';
    case 'Moroccan Corner':
      return 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/17/73/db/caption.jpg?w=1100&h=-1&s=1';
    case 'Simpsons Mural':
      return 'https://static.standard.co.uk/2022/04/20/14/IMG_1055.JPG?width=1200';
    case 'Ceramics Cafe':
      return 'https://lh4.googleusercontent.com/proxy/ka7_w42TmfPPqpv5W2uhA5CPf2bUsf3OvMVK6N5_I8ZN3G9KJyPcezopVUVIGq783pLERT00e-WyJ_-9e4qJoPZATmOZ5cImSO9NQ21_xyrMwXkjKYJi2Kdwj9wn8OjFAAzISA';
    case 'Bushy Park':
      return 'https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2024/07/04142406/bushy-park-drone-view-1024x767.jpg';
    case 'Incognito Coctail Bar':
      return 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/ec/95/36/a-truly-unique-experience.jpg?w=1100&h=-1&s=1';
    default:
      return defaultImage.src;
  }
};
