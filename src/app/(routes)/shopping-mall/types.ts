export type Thumbnail = {
  type: string;
  url: string;
};

export type Photo = {
  thumbnails: Thumbnail[];
  dominant_color: string;
};

export type Price = {
  amount: string;
  currency_code: string;
};

export type Item = {
  id: number;
  photo: Photo;
  title: string;
  price: Price;
  url: string;
  brand_title: string;
  item_closing_action: 'sold' | null;
  is_reserved: boolean;
};
