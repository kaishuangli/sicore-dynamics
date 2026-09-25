export type CartLine = {
  productId: string;
  quantity: number;
};

export type CartState = {
  lines: CartLine[];
};

export type CheckoutCustomer = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  address: string;
  city: string;
  country: string;
  notes?: string;
};

export type PlacedOrder = {
  id: string;
  createdAt: string;
  customer: CheckoutCustomer;
  lines: {
    productId: string;
    title: string;
    unitPriceCents: number;
    quantity: number;
  }[];
  subtotalCents: number;
  currency: "USD";
};
