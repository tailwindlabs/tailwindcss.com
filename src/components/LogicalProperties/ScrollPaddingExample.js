import { motion } from 'framer-motion'

export function ScrollPaddingExample({ direction }) {
  const products = [
    {
      id: 1,
      name: 'Black Tee',
      nameHebrew: 'חולצה קצרה',
      href: '#',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      priceShekel: '₪130',
      color: 'Black',
    },
    {
      id: 2,
      name: 'White Tee',
      nameHebrew: 'חולצה קצרה',
      href: '#',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "Front of men's Basic Tee in aspen white.",
      price: '$35',
      priceShekel: '₪130',
      color: 'Aspen White',
    },
    {
      id: 3,
      name: 'Gray Tee',
      nameHebrew: 'חולצה קצרה',
      href: '#',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imageAlt: "Front of men's Basic Tee in aspen white.",
      price: '$35',
      priceShekel: '₪130',
      color: 'Charcoal',
    },
    {
      id: 4,
      name: 'Artwork Tee',
      nameHebrew: 'חולצה אומנותית',
      href: '#',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
      imageAlt: "Front of men's Basic Tee in aspen white.",
      price: '$35',
      priceShekel: '₪130',
      color: 'Aspen White',
    },
  ]
  return (
    <div className="grid py-10 gap-4 md:px-12 px-8 text-sm font-medium">
      <p className="text-center font-mono">scroll-pl-12</p>
      <motion.div
        style={{
          direction: direction,
        }}
        className="w-full relative overflow-x-auto shadow-inner border border-slate-200 dark:border-slate-700 rounded-md"
      >
        <div className="bg-white dark:bg-slate-900 ps-12 pe-72 scroll-pl-12 snap-x overflow-x-auto grid grid-flow-col gap-12 py-4">
          <div class="z-10 bg-stripes-pink w-12 absolute top-0 left-0 bottom-0" />
          {products.map((product) => (
            <div key={product.id} className="snap-start group relative">
              <div className="bg-[#F7F7F7] w-36 h-36 overflow-hidden rounded-md group-hover:opacity-75 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-contain object-center "
                />
              </div>
              <div className="mt-2 flex justify-between">
                <h3 className="text-slate-700 dark:text-slate-300">
                  {direction === 'ltr' ? product.name : product.nameHebrew}
                </h3>

                <p className="text-slate-900 dark:text-slate-50">
                  {direction === 'ltr' ? product.price : product.priceShekel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <p className="md:mt-12 mt-4 text-center font-mono">scroll-ps-12</p>
      <motion.div
        style={{
          direction: direction,
        }}
        className="w-full relative overflow-x-auto shadow-inner border border-slate-200 dark:border-slate-700 rounded-md"
      >
        <div className="bg-white dark:bg-slate-900 ps-12 pe-72 scroll-ps-12 snap-x overflow-x-auto grid grid-flow-col gap-12 py-4">
          <motion.div layout class="z-10 bg-stripes-pink w-12 absolute top-0 start-0 bottom-0" />
          {products.map((product) => (
            <div key={product.id} className="snap-start group relative">
              <div className=" bg-[#F7F7F7] w-36 h-36 overflow-hidden rounded-md group-hover:opacity-75 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-contain object-center "
                />
              </div>
              <div className="mt-2 flex justify-between">
                <h3 className="text-slate-700 dark:text-slate-300">
                  {direction === 'ltr' ? product.name : product.nameHebrew}
                </h3>
                <p className="text-slate-900 dark:text-slate-50">
                  {direction === 'ltr' ? product.price : product.priceShekel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
