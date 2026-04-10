export interface Template {
  id: string;
  title: string;
  subtitle: string;
  categoryId: string;
  image?: string;
}

export interface Category {
  id: string;
  title: string;
  color: string;
  textColor: string;
}
