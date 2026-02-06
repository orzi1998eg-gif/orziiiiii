import { Collection } from '../types/product';

export const collections: Collection[] = [
  {
    id: 'bracelets',
    name: 'ORZI - Heritage Bracelets',
    nameAr: 'الإسورات',
    slug: 'bracelets',
    description: 'Timeless signature bracelets that define your identity. Each piece is a testament to heritage and refined taste.',
    descriptionAr: 'قطع توقيعية تُعرّف الهوية. كل إسورة شهادة على الأصالة والرقي.',
    status: 'available',
    image: '/signature.jpg',
    productCount: 3,
  },
  {
    id: 'heritage-trousers',
    name: 'ORZI - Heritage Trousers',
    nameAr: 'أورزي - بنطلون التراث',
    slug: 'heritage-trousers',
    description: 'A wide-cut fabric trouser inspired by classic old-money tailoring. Timeless, refined, and designed to last beyond trends.',
    descriptionAr: 'قَصّة واسعة مستوحاة من الخياطة الكلاسيكية. صُنع ليبقى، لا ليتبع.',
    status: 'coming-soon',
    image: '/orzi-heritage-trousers.jpg',
    productCount: 0,
  },
  {
    id: 'heritage-polo',
    name: 'ORZI - Heritage Polo',
    nameAr: 'أورزي - بولو التراث',
    slug: 'heritage-polo',
    description: 'A knitted short-sleeve polo inspired by classic European summer style. Effortless elegance, designed to pair perfectly with ORZI tailoring.',
    descriptionAr: 'بولو منسوج بإتقان، مستوحى من الصيف الأوروبي. أناقة هادئة، تكتمل مع كل قطعة.',
    status: 'coming-soon',
    image: '/polo.jpeg',
    productCount: 0,
  },
];
