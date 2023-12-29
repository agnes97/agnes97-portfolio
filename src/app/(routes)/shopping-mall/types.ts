export type Thumbnail = {
    type: string;
    url: string;
};
  
export type Photo = {
    thumbnails: Thumbnail[];
};
  
export type User = {
    country_code: string;
};
  
export type Item = {
    id: number;
    photos: Photo[];
    title: string;
    description: string;
    user: User;
    price_numeric: string;
    currency: string;
    url: string;
    brand: string;
};
  