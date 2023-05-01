import { Product, getProducts } from '@/service/products';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (req.method === 'GET') {
    const products = await getProducts();
    res.status(200).json(products);
  }
  res.status(200);
}
