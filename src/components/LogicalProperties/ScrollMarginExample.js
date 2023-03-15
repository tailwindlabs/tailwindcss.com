import { motion } from 'framer-motion'

export function ScrollMarginExample({ direction }) {
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
    <div className="grid gap-4 py-10 pb-14 md:px-12 px-8 text-sm font-medium">
      <p className="text-center font-mono">scroll-ml-6</p>
      <motion.div
        style={{
          direction: direction,
        }}
        className="w-full relative overflow-x-auto shadow-inner border border-slate-200 dark:border-slate-700 rounded-md"
      >
        <div className="bg-white dark:bg-slate-900 ps-6 pe-96 snap-x overflow-x-auto grid grid-flow-col gap-12 py-4">
          {products.map((product) => (
            <div key={product.id} className="snap-start scroll-ml-6 group relative">
              <div class="z-10 bg-stripes-pink w-6 absolute top-0 -left-6 bottom-0" />
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
      <p className="md:mt-12 mt-4 text-center font-mono">scroll-ms-6</p>
      <motion.div
        style={{
          direction: direction,
        }}
        className="w-full relative overflow-x-auto shadow-inner border border-slate-200 dark:border-slate-700 rounded-md"
      >
        <div className="bg-white dark:bg-slate-900 ps-6 pe-96 snap-x overflow-x-auto grid grid-flow-col gap-12 py-4">
          {products.map((product) => (
            <div key={product.id} className="snap-start group relative scroll-ms-6">
              <motion.div
                layout
                class="z-10 bg-stripes-pink w-6 absolute top-0 -start-6 bottom-0"
              />
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
      <p className="absolute bottom-2 text-center start-0 end-0 text-gray-400 font-normal italic">
        Images courtesy of{' '}
        <a className="underline text-blue-400 hover:text-blue-600" href="https://ugmonk.com">
          Ugmonk
        </a>
      </p>
    </div>
  )
}
