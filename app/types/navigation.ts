export interface MenuItem {
  name: string;
  path: string;
}

export interface MenuData {
  products: MenuItem[];
  solutions: MenuItem[];
  resources: MenuItem[];
}