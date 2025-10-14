export type WishlistItem = {
  emoji: string;
  title: string;
  link: string;
  price?: string;
  imageSrc?: string;
  received: boolean;
  isNoLongerWanted?: boolean;
  isFav?: boolean;
  isDoubleCard?: boolean;
  hasCoverPhoto?: boolean;
  isHandmade?: boolean;
};

export type Wishlist = {
  year: number;
  type: 'birthday' | 'christmas' | 'christmas_vinted' | 'christmas_slevomat';
  wishlistedItems: WishlistItem[];
};
