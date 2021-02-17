import { defaultConfig } from '@/utils/defaultConfig'
import { ConfigSample } from '@/components/ConfigSample'

const variantListInverted = Object.entries(defaultConfig.variants).reduce(
  (reduced, [plugin, variants]) => {
    variants.forEach((variant) => {
      if (reduced[variant]) {
        reduced[variant].push(plugin)
      } else {
        reduced[variant] = [plugin]
      }
    })
    return reduced
  },
  {}
)

export function VariantEnabledList({ variant }) {
  if (!variantListInverted[variant]) {
    return (
      <p>
        <strong>
          默认情况下，<code>{variant}</code>对于全部工具类都是未启用的。
        </strong>
        .
      </p>
    )
  }

  return (
    <>
      <p>
        默认情况下，<code>{variant}</code>只为以下工具类开启:
      </p>

      <ul>
        {variantListInverted[variant].map((plugin) => (
          <li key={plugin}>
            <code>{plugin}</code>
          </li>
        ))}
      </ul>
    </>
  )
}
