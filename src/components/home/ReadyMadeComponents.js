import { IconContainer, Caption, BigText, Paragraph, Link, Widont } from '@/components/home/common'
import { GradientLockup } from '@/components/GradientLockup'
import { gradients } from '@/utils/gradients'
import { ReactComponent as Icon } from '@/img/icons/home/ready-made-components.svg'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

function AnimatedImage({ initial = {}, inView, ...props }) {
  return (
    <motion.img
      initial={false}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...initial }}
      transition={{ duration: 1 }}
      {...props}
    />
  )
}

export function ReadyMadeComponents() {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <section id="ready-made-components">
      <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <IconContainer className={`${gradients.violet[0]} mb-8`}>
          <Icon />
        </IconContainer>
        <Caption as="h2" className="text-violet-600 mb-3">
          現成的元件
        </Caption>
        <BigText className="mb-8">
          <Widont>用 Tailwind UI 快速前進</Widont>
        </BigText>
        <Paragraph className="mb-6">
          Tailwind UI 集結了我們以及所有 Tailwind CSS 的創作者所設計研發的漂亮且完全響應式的 UI 元件。
          那裏有數百個現成的範例讓你選擇，而且保證你能找到心目中想建構的完美起點。
        </Paragraph>
        <Link href="https://tailwindui.com/" className="text-violet-600 hover:text-violet-800">
          了解詳情 -&gt;
        </Link>
      </div>
      <GradientLockup
        color="violet"
        rotate={-2}
        left={
          <div className="-mx-8" ref={inViewRef}>
            <div className="relative" style={{ paddingTop: `${(1811 / 3771) * 100}%` }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 3771 1811" fill="none">
                <defs>
                  <clipPath id="foo">
                    <rect x="2028" y="1214" width="256" height="500" rx="8" />
                    <rect x="1716" y="1030" width="280" height="535" rx="8" />
                    <rect x="1716" y="934" width="1276" height="64" rx="8" />
                    <rect x="2028" y="1030" width="380" height="152" rx="8" />
                    <rect x="2428" y="1030" width="380" height="152" rx="8" />
                    <rect x="2828" y="1030" width="380" height="152" rx="8" />
                    <rect x="799" y="307" width="885" height="595" rx="8" />
                    <rect x="244" y="934" width="1440" height="778" rx="8" />
                    <rect x="2808" y="1214" width="880" height="361" rx="8" />
                    <rect x="1716" y="449" width="1440" height="453" rx="8" />
                  </clipPath>
                </defs>
                <image
                  clipPath="url(#foo)"
                  xlinkHref={require('@/img/tailwindui.jpg').default}
                  width="3771"
                  height="1811"
                />
              </svg>
              <AnimatedImage
                src={require('@/img/tailwindui-table.png').default}
                alt=""
                className="absolute shadow-2xl rounded-md"
                style={{
                  top: 0,
                  left: `${(1356 / 3771) * 100}%`,
                  width: `${(1410 / 3771) * 100}%`,
                }}
                initial={{ y: '-20%' }}
                inView={inView}
              />
              <AnimatedImage
                src={require('@/img/tailwindui-workcation.png').default}
                alt=""
                className="absolute shadow-2xl rounded-md"
                style={{
                  right: 0,
                  top: `${(377 / 1811) * 100}%`,
                  width: `${(819 / 3771) * 100}%`,
                }}
                initial={{ x: '10%' }}
                inView={inView}
              />
              <AnimatedImage
                src={require('@/img/tailwindui-form.png').default}
                alt=""
                className="absolute shadow-2xl rounded-md"
                style={{
                  bottom: 0,
                  left: `${(2300 / 3771) * 100}%`,
                  width: `${(690 / 3771) * 100}%`,
                }}
                initial={{ y: '15%' }}
                inView={inView}
              />
              <AnimatedImage
                src={require('@/img/tailwindui-projects.png').default}
                alt=""
                className="absolute shadow-2xl rounded-md"
                style={{
                  left: 0,
                  top: `${(462 / 1811) * 100}%`,
                  width: `${(1057 / 3771) * 100}%`,
                }}
                initial={{ x: '-10%' }}
                inView={inView}
              />
            </div>
          </div>
        }
      />
    </section>
  )
}
