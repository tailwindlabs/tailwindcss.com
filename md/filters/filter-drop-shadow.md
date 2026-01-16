# filter: drop-shadow()

Utilities for applying drop-shadow filters to an element.

| Class                                   | Styles                                                                               |
| --------------------------------------- | ------------------------------------------------------------------------------------ |
| `drop-shadow-xs`                        | `filter: drop-shadow(var(--drop-shadow-xs)); /* 0 1px 1px rgb(0 0 0 / 0.05) */`      |
| `drop-shadow-sm`                        | `filter: drop-shadow(var(--drop-shadow-sm)); /* 0 1px 2px rgb(0 0 0 / 0.15) */`      |
| `drop-shadow-md`                        | `filter: drop-shadow(var(--drop-shadow-md)); /* 0 3px 3px rgb(0 0 0 / 0.12) */`      |
| `drop-shadow-lg`                        | `filter: drop-shadow(var(--drop-shadow-lg)); /* 0 4px 4px rgb(0 0 0 / 0.15) */`      |
| `drop-shadow-xl`                        | `filter: drop-shadow(var(--drop-shadow-xl); /* 0 9px 7px rgb(0 0 0 / 0.1) */`        |
| `drop-shadow-2xl`                       | `filter: drop-shadow(var(--drop-shadow-2xl)); /* 0 25px 25px rgb(0 0 0 / 0.15) */`   |
| `drop-shadow-none`                      | `filter: drop-shadow(0 0 #0000);`                                                    |
| `drop-shadow-(<custom-property>)`       | `filter: drop-shadow(var(<custom-property>));`                                       |
| `drop-shadow-(color:<custom-property>)` | `--tw-drop-shadow-color: var(<custom-property>);`                                    |
| `drop-shadow-[<value>]`                 | `filter: drop-shadow(<value>);`                                                      |
| `drop-shadow-inherit`                   | `--tw-drop-shadow-color: inherit;`                                                   |
| `drop-shadow-current`                   | `--tw-drop-shadow-color: currentColor;`                                              |
| `drop-shadow-transparent`               | `--tw-drop-shadow-color: transparent;`                                               |
| `drop-shadow-black`                     | `--tw-drop-shadow-color: var(--color-black); /* #000 */`                             |
| `drop-shadow-white`                     | `--tw-drop-shadow-color: var(--color-white); /* #fff */`                             |
| `drop-shadow-red-50`                    | `--tw-drop-shadow-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */`        |
| `drop-shadow-red-100`                   | `--tw-drop-shadow-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */`      |
| `drop-shadow-red-200`                   | `--tw-drop-shadow-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */`      |
| `drop-shadow-red-300`                   | `--tw-drop-shadow-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */`      |
| `drop-shadow-red-400`                   | `--tw-drop-shadow-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */`      |
| `drop-shadow-red-500`                   | `--tw-drop-shadow-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */`      |
| `drop-shadow-red-600`                   | `--tw-drop-shadow-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */`      |
| `drop-shadow-red-700`                   | `--tw-drop-shadow-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */`      |
| `drop-shadow-red-800`                   | `--tw-drop-shadow-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */`      |
| `drop-shadow-red-900`                   | `--tw-drop-shadow-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */`      |
| `drop-shadow-red-950`                   | `--tw-drop-shadow-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */`      |
| `drop-shadow-orange-50`                 | `--tw-drop-shadow-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */`      |
| `drop-shadow-orange-100`                | `--tw-drop-shadow-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */`   |
| `drop-shadow-orange-200`                | `--tw-drop-shadow-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */`   |
| `drop-shadow-orange-300`                | `--tw-drop-shadow-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */`    |
| `drop-shadow-orange-400`                | `--tw-drop-shadow-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */`     |
| `drop-shadow-orange-500`                | `--tw-drop-shadow-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */`   |
| `drop-shadow-orange-600`                | `--tw-drop-shadow-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */`   |
| `drop-shadow-orange-700`                | `--tw-drop-shadow-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */`   |
| `drop-shadow-orange-800`                | `--tw-drop-shadow-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */`     |
| `drop-shadow-orange-900`                | `--tw-drop-shadow-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */`   |
| `drop-shadow-orange-950`                | `--tw-drop-shadow-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */`   |
| `drop-shadow-amber-50`                  | `--tw-drop-shadow-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */`     |
| `drop-shadow-amber-100`                 | `--tw-drop-shadow-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */`    |
| `drop-shadow-amber-200`                 | `--tw-drop-shadow-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */`     |
| `drop-shadow-amber-300`                 | `--tw-drop-shadow-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */`    |
| `drop-shadow-amber-400`                 | `--tw-drop-shadow-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */`    |
| `drop-shadow-amber-500`                 | `--tw-drop-shadow-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */`     |
| `drop-shadow-amber-600`                 | `--tw-drop-shadow-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */`    |
| `drop-shadow-amber-700`                 | `--tw-drop-shadow-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */`    |
| `drop-shadow-amber-800`                 | `--tw-drop-shadow-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */`    |
| `drop-shadow-amber-900`                 | `--tw-drop-shadow-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */`    |
| `drop-shadow-amber-950`                 | `--tw-drop-shadow-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */`    |
| `drop-shadow-yellow-50`                 | `--tw-drop-shadow-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */`   |
| `drop-shadow-yellow-100`                | `--tw-drop-shadow-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */`  |
| `drop-shadow-yellow-200`                | `--tw-drop-shadow-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */`   |
| `drop-shadow-yellow-300`                | `--tw-drop-shadow-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */`   |
| `drop-shadow-yellow-400`                | `--tw-drop-shadow-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */`   |
| `drop-shadow-yellow-500`                | `--tw-drop-shadow-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */`   |
| `drop-shadow-yellow-600`                | `--tw-drop-shadow-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */`   |
| `drop-shadow-yellow-700`                | `--tw-drop-shadow-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */`   |
| `drop-shadow-yellow-800`                | `--tw-drop-shadow-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */`   |
| `drop-shadow-yellow-900`                | `--tw-drop-shadow-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */`   |
| `drop-shadow-yellow-950`                | `--tw-drop-shadow-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */`   |
| `drop-shadow-lime-50`                   | `--tw-drop-shadow-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */`     |
| `drop-shadow-lime-100`                  | `--tw-drop-shadow-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */`    |
| `drop-shadow-lime-200`                  | `--tw-drop-shadow-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */`    |
| `drop-shadow-lime-300`                  | `--tw-drop-shadow-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */`    |
| `drop-shadow-lime-400`                  | `--tw-drop-shadow-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */`     |
| `drop-shadow-lime-500`                  | `--tw-drop-shadow-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */`     |
| `drop-shadow-lime-600`                  | `--tw-drop-shadow-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */`      |
| `drop-shadow-lime-700`                  | `--tw-drop-shadow-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */`    |
| `drop-shadow-lime-800`                  | `--tw-drop-shadow-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */`    |
| `drop-shadow-lime-900`                  | `--tw-drop-shadow-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */`    |
| `drop-shadow-lime-950`                  | `--tw-drop-shadow-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */`    |
| `drop-shadow-green-50`                  | `--tw-drop-shadow-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */`    |
| `drop-shadow-green-100`                 | `--tw-drop-shadow-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */`   |
| `drop-shadow-green-200`                 | `--tw-drop-shadow-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */`   |
| `drop-shadow-green-300`                 | `--tw-drop-shadow-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */`    |
| `drop-shadow-green-400`                 | `--tw-drop-shadow-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */`   |
| `drop-shadow-green-500`                 | `--tw-drop-shadow-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */`   |
| `drop-shadow-green-600`                 | `--tw-drop-shadow-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */`   |
| `drop-shadow-green-700`                 | `--tw-drop-shadow-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */`   |
| `drop-shadow-green-800`                 | `--tw-drop-shadow-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */`   |
| `drop-shadow-green-900`                 | `--tw-drop-shadow-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */`   |
| `drop-shadow-green-950`                 | `--tw-drop-shadow-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */`   |
| `drop-shadow-emerald-50`                | `--tw-drop-shadow-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */`  |
| `drop-shadow-emerald-100`               | `--tw-drop-shadow-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */`   |
| `drop-shadow-emerald-200`               | `--tw-drop-shadow-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */`  |
| `drop-shadow-emerald-300`               | `--tw-drop-shadow-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */` |
| `drop-shadow-emerald-400`               | `--tw-drop-shadow-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */` |
| `drop-shadow-emerald-500`               | `--tw-drop-shadow-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */`   |
| `drop-shadow-emerald-600`               | `--tw-drop-shadow-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */` |
| `drop-shadow-emerald-700`               | `--tw-drop-shadow-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */` |
| `drop-shadow-emerald-800`               | `--tw-drop-shadow-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */` |
| `drop-shadow-emerald-900`               | `--tw-drop-shadow-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */`  |
| `drop-shadow-emerald-950`               | `--tw-drop-shadow-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */` |
| `drop-shadow-teal-50`                   | `--tw-drop-shadow-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */`      |
| `drop-shadow-teal-100`                  | `--tw-drop-shadow-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */`    |
| `drop-shadow-teal-200`                  | `--tw-drop-shadow-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */`      |
| `drop-shadow-teal-300`                  | `--tw-drop-shadow-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */`    |
| `drop-shadow-teal-400`                  | `--tw-drop-shadow-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */`    |
| `drop-shadow-teal-500`                  | `--tw-drop-shadow-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */`     |
| `drop-shadow-teal-600`                  | `--tw-drop-shadow-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */`      |
| `drop-shadow-teal-700`                  | `--tw-drop-shadow-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */`    |
| `drop-shadow-teal-800`                  | `--tw-drop-shadow-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */`    |
| `drop-shadow-teal-900`                  | `--tw-drop-shadow-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */`    |
| `drop-shadow-teal-950`                  | `--tw-drop-shadow-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */`    |
| `drop-shadow-cyan-50`                   | `--tw-drop-shadow-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */`     |
| `drop-shadow-cyan-100`                  | `--tw-drop-shadow-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */`    |
| `drop-shadow-cyan-200`                  | `--tw-drop-shadow-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */`     |
| `drop-shadow-cyan-300`                  | `--tw-drop-shadow-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */`    |
| `drop-shadow-cyan-400`                  | `--tw-drop-shadow-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */`     |
| `drop-shadow-cyan-500`                  | `--tw-drop-shadow-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */`    |
| `drop-shadow-cyan-600`                  | `--tw-drop-shadow-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */`    |
| `drop-shadow-cyan-700`                  | `--tw-drop-shadow-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */`      |
| `drop-shadow-cyan-800`                  | `--tw-drop-shadow-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */`      |
| `drop-shadow-cyan-900`                  | `--tw-drop-shadow-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */`     |
| `drop-shadow-cyan-950`                  | `--tw-drop-shadow-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */`    |
| `drop-shadow-sky-50`                    | `--tw-drop-shadow-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */`       |
| `drop-shadow-sky-100`                   | `--tw-drop-shadow-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */`     |
| `drop-shadow-sky-200`                   | `--tw-drop-shadow-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */`     |
| `drop-shadow-sky-300`                   | `--tw-drop-shadow-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */`     |
| `drop-shadow-sky-400`                   | `--tw-drop-shadow-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */`      |
| `drop-shadow-sky-500`                   | `--tw-drop-shadow-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */`     |
| `drop-shadow-sky-600`                   | `--tw-drop-shadow-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */`     |
| `drop-shadow-sky-700`                   | `--tw-drop-shadow-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */`       |
| `drop-shadow-sky-800`                   | `--tw-drop-shadow-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */`       |
| `drop-shadow-sky-900`                   | `--tw-drop-shadow-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */`      |
| `drop-shadow-sky-950`                   | `--tw-drop-shadow-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */`     |
| `drop-shadow-blue-50`                   | `--tw-drop-shadow-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */`       |
| `drop-shadow-blue-100`                  | `--tw-drop-shadow-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */`    |
| `drop-shadow-blue-200`                  | `--tw-drop-shadow-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */`    |
| `drop-shadow-blue-300`                  | `--tw-drop-shadow-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */`    |
| `drop-shadow-blue-400`                  | `--tw-drop-shadow-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */`    |
| `drop-shadow-blue-500`                  | `--tw-drop-shadow-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */`    |
| `drop-shadow-blue-600`                  | `--tw-drop-shadow-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */`    |
| `drop-shadow-blue-700`                  | `--tw-drop-shadow-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */`    |
| `drop-shadow-blue-800`                  | `--tw-drop-shadow-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */`    |
| `drop-shadow-blue-900`                  | `--tw-drop-shadow-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */`    |
| `drop-shadow-blue-950`                  | `--tw-drop-shadow-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */`    |
| `drop-shadow-indigo-50`                 | `--tw-drop-shadow-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */`   |
| `drop-shadow-indigo-100`                | `--tw-drop-shadow-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */`    |
| `drop-shadow-indigo-200`                | `--tw-drop-shadow-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */`    |
| `drop-shadow-indigo-300`                | `--tw-drop-shadow-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */`  |
| `drop-shadow-indigo-400`                | `--tw-drop-shadow-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */`  |
| `drop-shadow-indigo-500`                | `--tw-drop-shadow-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */`  |
| `drop-shadow-indigo-600`                | `--tw-drop-shadow-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */`  |
| `drop-shadow-indigo-700`                | `--tw-drop-shadow-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */`   |
| `drop-shadow-indigo-800`                | `--tw-drop-shadow-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */`  |
| `drop-shadow-indigo-900`                | `--tw-drop-shadow-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */`  |
| `drop-shadow-indigo-950`                | `--tw-drop-shadow-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */`   |
| `drop-shadow-violet-50`                 | `--tw-drop-shadow-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */`   |
| `drop-shadow-violet-100`                | `--tw-drop-shadow-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */`  |
| `drop-shadow-violet-200`                | `--tw-drop-shadow-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */`  |
| `drop-shadow-violet-300`                | `--tw-drop-shadow-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */`  |
| `drop-shadow-violet-400`                | `--tw-drop-shadow-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */`  |
| `drop-shadow-violet-500`                | `--tw-drop-shadow-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */`   |
| `drop-shadow-violet-600`                | `--tw-drop-shadow-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */`  |
| `drop-shadow-violet-700`                | `--tw-drop-shadow-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */`   |
| `drop-shadow-violet-800`                | `--tw-drop-shadow-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */`  |
| `drop-shadow-violet-900`                | `--tw-drop-shadow-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */`    |
| `drop-shadow-violet-950`                | `--tw-drop-shadow-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */`  |
| `drop-shadow-purple-50`                 | `--tw-drop-shadow-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */`   |
| `drop-shadow-purple-100`                | `--tw-drop-shadow-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */`  |
| `drop-shadow-purple-200`                | `--tw-drop-shadow-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */`  |
| `drop-shadow-purple-300`                | `--tw-drop-shadow-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */`  |
| `drop-shadow-purple-400`                | `--tw-drop-shadow-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */`  |
| `drop-shadow-purple-500`                | `--tw-drop-shadow-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */`    |
| `drop-shadow-purple-600`                | `--tw-drop-shadow-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */`  |
| `drop-shadow-purple-700`                | `--tw-drop-shadow-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */`  |
| `drop-shadow-purple-800`                | `--tw-drop-shadow-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */`  |
| `drop-shadow-purple-900`                | `--tw-drop-shadow-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */`  |
| `drop-shadow-purple-950`                | `--tw-drop-shadow-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */`  |
| `drop-shadow-fuchsia-50`                | `--tw-drop-shadow-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */`  |
| `drop-shadow-fuchsia-100`               | `--tw-drop-shadow-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */` |
| `drop-shadow-fuchsia-200`               | `--tw-drop-shadow-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */`  |
| `drop-shadow-fuchsia-300`               | `--tw-drop-shadow-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */` |
| `drop-shadow-fuchsia-400`               | `--tw-drop-shadow-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */`    |
| `drop-shadow-fuchsia-500`               | `--tw-drop-shadow-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */`  |
| `drop-shadow-fuchsia-600`               | `--tw-drop-shadow-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */` |
| `drop-shadow-fuchsia-700`               | `--tw-drop-shadow-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */` |
| `drop-shadow-fuchsia-800`               | `--tw-drop-shadow-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */` |
| `drop-shadow-fuchsia-900`               | `--tw-drop-shadow-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */`  |
| `drop-shadow-fuchsia-950`               | `--tw-drop-shadow-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */` |
| `drop-shadow-pink-50`                   | `--tw-drop-shadow-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */`     |
| `drop-shadow-pink-100`                  | `--tw-drop-shadow-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */`    |
| `drop-shadow-pink-200`                  | `--tw-drop-shadow-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */`    |
| `drop-shadow-pink-300`                  | `--tw-drop-shadow-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */`     |
| `drop-shadow-pink-400`                  | `--tw-drop-shadow-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */`    |
| `drop-shadow-pink-500`                  | `--tw-drop-shadow-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */`    |
| `drop-shadow-pink-600`                  | `--tw-drop-shadow-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */`      |
| `drop-shadow-pink-700`                  | `--tw-drop-shadow-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */`      |
| `drop-shadow-pink-800`                  | `--tw-drop-shadow-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */`      |
| `drop-shadow-pink-900`                  | `--tw-drop-shadow-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */`      |
| `drop-shadow-pink-950`                  | `--tw-drop-shadow-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */`      |
| `drop-shadow-rose-50`                   | `--tw-drop-shadow-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */`      |
| `drop-shadow-rose-100`                  | `--tw-drop-shadow-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */`       |
| `drop-shadow-rose-200`                  | `--tw-drop-shadow-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */`     |
| `drop-shadow-rose-300`                  | `--tw-drop-shadow-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */`       |
| `drop-shadow-rose-400`                  | `--tw-drop-shadow-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */`     |
| `drop-shadow-rose-500`                  | `--tw-drop-shadow-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */`     |
| `drop-shadow-rose-600`                  | `--tw-drop-shadow-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */`     |
| `drop-shadow-rose-700`                  | `--tw-drop-shadow-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */`     |
| `drop-shadow-rose-800`                  | `--tw-drop-shadow-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */`     |
| `drop-shadow-rose-900`                  | `--tw-drop-shadow-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */`       |
| `drop-shadow-rose-950`                  | `--tw-drop-shadow-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */`     |
| `drop-shadow-slate-50`                  | `--tw-drop-shadow-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */`    |
| `drop-shadow-slate-100`                 | `--tw-drop-shadow-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */`   |
| `drop-shadow-slate-200`                 | `--tw-drop-shadow-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */`   |
| `drop-shadow-slate-300`                 | `--tw-drop-shadow-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */`   |
| `drop-shadow-slate-400`                 | `--tw-drop-shadow-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */`    |
| `drop-shadow-slate-500`                 | `--tw-drop-shadow-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */`   |
| `drop-shadow-slate-600`                 | `--tw-drop-shadow-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */`   |
| `drop-shadow-slate-700`                 | `--tw-drop-shadow-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */`   |
| `drop-shadow-slate-800`                 | `--tw-drop-shadow-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */`   |
| `drop-shadow-slate-900`                 | `--tw-drop-shadow-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */`   |
| `drop-shadow-slate-950`                 | `--tw-drop-shadow-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */`   |
| `drop-shadow-gray-50`                   | `--tw-drop-shadow-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */`     |
| `drop-shadow-gray-100`                  | `--tw-drop-shadow-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */`    |
| `drop-shadow-gray-200`                  | `--tw-drop-shadow-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */`    |
| `drop-shadow-gray-300`                  | `--tw-drop-shadow-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */`     |
| `drop-shadow-gray-400`                  | `--tw-drop-shadow-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */`    |
| `drop-shadow-gray-500`                  | `--tw-drop-shadow-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */`    |
| `drop-shadow-gray-600`                  | `--tw-drop-shadow-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */`     |
| `drop-shadow-gray-700`                  | `--tw-drop-shadow-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */`    |
| `drop-shadow-gray-800`                  | `--tw-drop-shadow-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */`    |
| `drop-shadow-gray-900`                  | `--tw-drop-shadow-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */`      |
| `drop-shadow-gray-950`                  | `--tw-drop-shadow-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */`      |
| `drop-shadow-zinc-50`                   | `--tw-drop-shadow-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */`               |
| `drop-shadow-zinc-100`                  | `--tw-drop-shadow-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */`    |
| `drop-shadow-zinc-200`                  | `--tw-drop-shadow-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */`       |
| `drop-shadow-zinc-300`                  | `--tw-drop-shadow-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */`    |
| `drop-shadow-zinc-400`                  | `--tw-drop-shadow-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */`    |
| `drop-shadow-zinc-500`                  | `--tw-drop-shadow-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */`    |
| `drop-shadow-zinc-600`                  | `--tw-drop-shadow-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */`    |
| `drop-shadow-zinc-700`                  | `--tw-drop-shadow-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */`      |
| `drop-shadow-zinc-800`                  | `--tw-drop-shadow-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */`    |
| `drop-shadow-zinc-900`                  | `--tw-drop-shadow-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */`      |
| `drop-shadow-zinc-950`                  | `--tw-drop-shadow-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */`    |
| `drop-shadow-neutral-50`                | `--tw-drop-shadow-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */`            |
| `drop-shadow-neutral-100`               | `--tw-drop-shadow-color: var(--color-neutral-100); /* oklch(97% 0 0) */`             |
| `drop-shadow-neutral-200`               | `--tw-drop-shadow-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */`           |
| `drop-shadow-neutral-300`               | `--tw-drop-shadow-color: var(--color-neutral-300); /* oklch(87% 0 0) */`             |
| `drop-shadow-neutral-400`               | `--tw-drop-shadow-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */`           |
| `drop-shadow-neutral-500`               | `--tw-drop-shadow-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */`           |
| `drop-shadow-neutral-600`               | `--tw-drop-shadow-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */`           |
| `drop-shadow-neutral-700`               | `--tw-drop-shadow-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */`           |
| `drop-shadow-neutral-800`               | `--tw-drop-shadow-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */`           |
| `drop-shadow-neutral-900`               | `--tw-drop-shadow-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */`           |
| `drop-shadow-neutral-950`               | `--tw-drop-shadow-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */`           |
| `drop-shadow-stone-50`                  | `--tw-drop-shadow-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */`    |
| `drop-shadow-stone-100`                 | `--tw-drop-shadow-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */`     |
| `drop-shadow-stone-200`                 | `--tw-drop-shadow-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */`    |
| `drop-shadow-stone-300`                 | `--tw-drop-shadow-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */`    |
| `drop-shadow-stone-400`                 | `--tw-drop-shadow-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */`     |
| `drop-shadow-stone-500`                 | `--tw-drop-shadow-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */`    |
| `drop-shadow-stone-600`                 | `--tw-drop-shadow-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */`    |
| `drop-shadow-stone-700`                 | `--tw-drop-shadow-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */`     |
| `drop-shadow-stone-800`                 | `--tw-drop-shadow-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */`    |
| `drop-shadow-stone-900`                 | `--tw-drop-shadow-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */`    |
| `drop-shadow-stone-950`                 | `--tw-drop-shadow-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */`     |

## Examples

### Basic example

Use utilities like `drop-shadow-sm` and `drop-shadow-xl` to add a drop shadow to an element:

```html
<svg class="drop-shadow-md ...">
  <!-- ... -->
</svg>
<svg class="drop-shadow-lg ...">
  <!-- ... -->
</svg>
<svg class="drop-shadow-xl ...">
  <!-- ... -->
</svg>
```

This is useful for applying shadows to irregular shapes, like text and SVG elements. For applying shadows to regular elements, you probably want to use [box shadow](/docs/box-shadow) instead.

### Changing the opacity

Use the opacity modifier to adjust the opacity of the drop shadow:

```html
<svg class="fill-white drop-shadow-xl ...">...</svg>
<svg class="fill-white drop-shadow-xl/25 ...">...</svg>
<svg class="fill-white drop-shadow-xl/50 ...">...</svg>
```

The default drop shadow opacities are quite low (15% or less), so increasing the opacity (to like 50%) will make the drop shadows more pronounced.

### Setting the shadow color

Use utilities like `drop-shadow-indigo-500` and `drop-shadow-cyan-500/50` to change the color of a drop shadow:

```html
<svg class="fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50 ...">...</svg>
<svg class="fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 ...">...</svg>
```

By default colored shadows have an opacity of 100% but you can adjust this using the opacity modifier.

### Removing a drop shadow

Use the `drop-shadow-none` utility to remove an existing drop shadow from an element:

```html
<svg class="drop-shadow-lg dark:drop-shadow-none">
  <!-- ... -->
</svg>
```

### Using a custom value

Use the `drop-shadow-[<value>]` syntax to set the drop shadow based on a completely custom value:

```html
<div class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] ...">...</div>
```

For CSS variables, you can also use the `drop-shadow-(<custom-property>)` syntax:

```html
<div class="drop-shadow-(--my-drop-shadow) ...">...</div>
```

This is just a shorthand for `drop-shadow-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `filter: drop-shadow()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

## Customizing your theme

### Customizing drop shadows

Use the `--drop-shadow-*` theme variables to customize the drop shadow utilities in your project:

```css
@theme {
  --drop-shadow-3xl: 0 35px 35px rgba(0, 0, 0, 0.25);
}
```

Now the `drop-shadow-3xl` utility can be used in your markup:

```html
<div class="drop-shadow-3xl">...</div>
```

Learn more about customizing your theme in the [theme documentation](/docs/theme#customizing-your-theme).

### Customizing shadow colors

Use the `--color-*` theme variables to customize the color utilities in your project:

```css
@theme {
  --color-regal-blue: #243c5a;
}
```

Now the `drop-shadow-regal-blue` utility can be used in your markup:

```html
<div class="drop-shadow-regal-blue">...</div>
```

Learn more about customizing your theme in the [theme documentation](/docs/theme#customizing-your-theme).