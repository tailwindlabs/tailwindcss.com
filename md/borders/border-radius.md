# border-radius

Utilities for controlling the border radius of an element.

| Class                            | Styles                                                                                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `rounded-xs`                     | `border-radius: var(--radius-xs); /* 0.125rem (2px) */`                                                                                |
| `rounded-sm`                     | `border-radius: var(--radius-sm); /* 0.25rem (4px) */`                                                                                 |
| `rounded-md`                     | `border-radius: var(--radius-md); /* 0.375rem (6px) */`                                                                                |
| `rounded-lg`                     | `border-radius: var(--radius-lg); /* 0.5rem (8px) */`                                                                                  |
| `rounded-xl`                     | `border-radius: var(--radius-xl); /* 0.75rem (12px) */`                                                                                |
| `rounded-2xl`                    | `border-radius: var(--radius-2xl); /* 1rem (16px) */`                                                                                  |
| `rounded-3xl`                    | `border-radius: var(--radius-3xl); /* 1.5rem (24px) */`                                                                                |
| `rounded-4xl`                    | `border-radius: var(--radius-4xl); /* 2rem (32px) */`                                                                                  |
| `rounded-none`                   | `border-radius: 0;`                                                                                                                    |
| `rounded-full`                   | `border-radius: calc(infinity * 1px);`                                                                                                 |
| `rounded-(<custom-property>)`    | `border-radius: var(<custom-property>);`                                                                                               |
| `rounded-[<value>]`              | `border-radius: <value>;`                                                                                                              |
| `rounded-s-xs`                   | `border-start-start-radius: var(--radius-xs); /* 0.125rem (2px) */
border-end-start-radius: var(--radius-xs); /* 0.125rem (2px) */`    |
| `rounded-s-sm`                   | `border-start-start-radius: var(--radius-sm); /* 0.25rem (4px) */
border-end-start-radius: var(--radius-sm); /* 0.25rem (4px) */`      |
| `rounded-s-md`                   | `border-start-start-radius: var(--radius-md); /* 0.375rem (6px) */
border-end-start-radius: var(--radius-md); /* 0.375rem (6px) */`    |
| `rounded-s-lg`                   | `border-start-start-radius: var(--radius-lg); /* 0.5rem (8px) */
border-end-start-radius: var(--radius-lg); /* 0.5rem (8px) */`        |
| `rounded-s-xl`                   | `border-start-start-radius: var(--radius-xl); /* 0.75rem (12px) */
border-end-start-radius: var(--radius-xl); /* 0.75rem (12px) */`    |
| `rounded-s-2xl`                  | `border-start-start-radius: var(--radius-2xl); /* 1rem (16px) */
border-end-start-radius: var(--radius-2xl); /* 1rem (16px) */`        |
| `rounded-s-3xl`                  | `border-start-start-radius: var(--radius-3xl); /* 1.5rem (24px) */
border-end-start-radius: var(--radius-3xl); /* 1.5rem (24px) */`    |
| `rounded-s-4xl`                  | `border-start-start-radius: var(--radius-4xl); /* 2rem (32px) */
border-end-start-radius: var(--radius-4xl); /* 2rem (32px) */`        |
| `rounded-s-none`                 | `border-start-start-radius: 0;
border-end-start-radius: 0;`                                                                            |
| `rounded-s-full`                 | `border-start-start-radius: calc(infinity * 1px);
border-end-start-radius: calc(infinity * 1px);`                                      |
| `rounded-s-(<custom-property>)`  | `border-start-start-radius: var(<custom-property>);
border-end-start-radius: var(<custom-property>);`                                  |
| `rounded-s-[<value>]`            | `border-start-start-radius: <value>;
border-end-start-radius: <value>;`                                                                |
| `rounded-e-xs`                   | `border-start-end-radius: var(--radius-xs); /* 0.125rem (2px) */
border-end-end-radius: var(--radius-xs); /* 0.125rem (2px) */`        |
| `rounded-e-sm`                   | `border-start-end-radius: var(--radius-sm); /* 0.25rem (4px) */
border-end-end-radius: var(--radius-sm); /* 0.25rem (4px) */`          |
| `rounded-e-md`                   | `border-start-end-radius: var(--radius-md); /* 0.375rem (6px) */
border-end-end-radius: var(--radius-md); /* 0.375rem (6px) */`        |
| `rounded-e-lg`                   | `border-start-end-radius: var(--radius-lg); /* 0.5rem (8px) */
border-end-end-radius: var(--radius-lg); /* 0.5rem (8px) */`            |
| `rounded-e-xl`                   | `border-start-end-radius: var(--radius-xl); /* 0.75rem (12px) */
border-end-end-radius: var(--radius-xl); /* 0.75rem (12px) */`        |
| `rounded-e-2xl`                  | `border-start-end-radius: var(--radius-2xl); /* 1rem (16px) */
border-end-end-radius: var(--radius-2xl); /* 1rem (16px) */`            |
| `rounded-e-3xl`                  | `border-start-end-radius: var(--radius-3xl); /* 1.5rem (24px) */
border-end-end-radius: var(--radius-3xl); /* 1.5rem (24px) */`        |
| `rounded-e-4xl`                  | `border-start-end-radius: var(--radius-4xl); /* 2rem (32px) */
border-end-end-radius: var(--radius-4xl); /* 2rem (32px) */`            |
| `rounded-e-none`                 | `border-start-end-radius: 0;
border-end-end-radius: 0;`                                                                                |
| `rounded-e-full`                 | `border-start-end-radius: calc(infinity * 1px);
border-end-end-radius: calc(infinity * 1px);`                                          |
| `rounded-e-(<custom-property>)`  | `border-start-end-radius: var(<custom-property>);
border-end-end-radius: var(<custom-property>);`                                      |
| `rounded-e-[<value>]`            | `border-start-end-radius: <value>;
border-end-end-radius: <value>;`                                                                    |
| `rounded-t-xs`                   | `border-top-left-radius: var(--radius-xs); /* 0.125rem (2px) */
border-top-right-radius: var(--radius-xs); /* 0.125rem (2px) */`       |
| `rounded-t-sm`                   | `border-top-left-radius: var(--radius-sm); /* 0.25rem (4px) */
border-top-right-radius: var(--radius-sm); /* 0.25rem (4px) */`         |
| `rounded-t-md`                   | `border-top-left-radius: var(--radius-md); /* 0.375rem (6px) */
border-top-right-radius: var(--radius-md); /* 0.375rem (6px) */`       |
| `rounded-t-lg`                   | `border-top-left-radius: var(--radius-lg); /* 0.5rem (8px) */
border-top-right-radius: var(--radius-lg); /* 0.5rem (8px) */`           |
| `rounded-t-xl`                   | `border-top-left-radius: var(--radius-xl); /* 0.75rem (12px) */
border-top-right-radius: var(--radius-xl); /* 0.75rem (12px) */`       |
| `rounded-t-2xl`                  | `border-top-left-radius: var(--radius-2xl); /* 1rem (16px) */
border-top-right-radius: var(--radius-2xl); /* 1rem (16px) */`           |
| `rounded-t-3xl`                  | `border-top-left-radius: var(--radius-3xl); /* 1.5rem (24px) */
border-top-right-radius: var(--radius-3xl); /* 1.5rem (24px) */`       |
| `rounded-t-4xl`                  | `border-top-left-radius: var(--radius-4xl); /* 2rem (32px) */
border-top-right-radius: var(--radius-4xl); /* 2rem (32px) */`           |
| `rounded-t-none`                 | `border-top-left-radius: 0;
border-top-right-radius: 0;`                                                                               |
| `rounded-t-full`                 | `border-top-left-radius: calc(infinity * 1px);
border-top-right-radius: calc(infinity * 1px);`                                         |
| `rounded-t-(<custom-property>)`  | `border-top-left-radius: var(<custom-property>);
border-top-right-radius: var(<custom-property>);`                                     |
| `rounded-t-[<value>]`            | `border-top-left-radius: <value>;
border-top-right-radius: <value>;`                                                                   |
| `rounded-r-xs`                   | `border-top-right-radius: var(--radius-xs); /* 0.125rem (2px) */
border-bottom-right-radius: var(--radius-xs); /* 0.125rem (2px) */`   |
| `rounded-r-sm`                   | `border-top-right-radius: var(--radius-sm); /* 0.25rem (4px) */
border-bottom-right-radius: var(--radius-sm); /* 0.25rem (4px) */`     |
| `rounded-r-md`                   | `border-top-right-radius: var(--radius-md); /* 0.375rem (6px) */
border-bottom-right-radius: var(--radius-md); /* 0.375rem (6px) */`   |
| `rounded-r-lg`                   | `border-top-right-radius: var(--radius-lg); /* 0.5rem (8px) */
border-bottom-right-radius: var(--radius-lg); /* 0.5rem (8px) */`       |
| `rounded-r-xl`                   | `border-top-right-radius: var(--radius-xl); /* 0.75rem (12px) */
border-bottom-right-radius: var(--radius-xl); /* 0.75rem (12px) */`   |
| `rounded-r-2xl`                  | `border-top-right-radius: var(--radius-2xl); /* 1rem (16px) */
border-bottom-right-radius: var(--radius-2xl); /* 1rem (16px) */`       |
| `rounded-r-3xl`                  | `border-top-right-radius: var(--radius-3xl); /* 1.5rem (24px) */
border-bottom-right-radius: var(--radius-3xl); /* 1.5rem (24px) */`   |
| `rounded-r-4xl`                  | `border-top-right-radius: var(--radius-4xl); /* 2rem (32px) */
border-bottom-right-radius: var(--radius-4xl); /* 2rem (32px) */`       |
| `rounded-r-none`                 | `border-top-right-radius: 0;
border-bottom-right-radius: 0;`                                                                           |
| `rounded-r-full`                 | `border-top-right-radius: calc(infinity * 1px);
border-bottom-right-radius: calc(infinity * 1px);`                                     |
| `rounded-r-(<custom-property>)`  | `border-top-right-radius: var(<custom-property>);
border-bottom-right-radius: var(<custom-property>);`                                 |
| `rounded-r-[<value>]`            | `border-top-right-radius: <value>;
border-bottom-right-radius: <value>;`                                                               |
| `rounded-b-xs`                   | `border-bottom-right-radius: var(--radius-xs); /* 0.125rem (2px) */
border-bottom-left-radius: var(--radius-xs); /* 0.125rem (2px) */` |
| `rounded-b-sm`                   | `border-bottom-right-radius: var(--radius-sm); /* 0.25rem (4px) */
border-bottom-left-radius: var(--radius-sm); /* 0.25rem (4px) */`   |
| `rounded-b-md`                   | `border-bottom-right-radius: var(--radius-md); /* 0.375rem (6px) */
border-bottom-left-radius: var(--radius-md); /* 0.375rem (6px) */` |
| `rounded-b-lg`                   | `border-bottom-right-radius: var(--radius-lg); /* 0.5rem (8px) */
border-bottom-left-radius: var(--radius-lg); /* 0.5rem (8px) */`     |
| `rounded-b-xl`                   | `border-bottom-right-radius: var(--radius-xl); /* 0.75rem (12px) */
border-bottom-left-radius: var(--radius-xl); /* 0.75rem (12px) */` |
| `rounded-b-2xl`                  | `border-bottom-right-radius: var(--radius-2xl); /* 1rem (16px) */
border-bottom-left-radius: var(--radius-2xl); /* 1rem (16px) */`     |
| `rounded-b-3xl`                  | `border-bottom-right-radius: var(--radius-3xl); /* 1.5rem (24px) */
border-bottom-left-radius: var(--radius-3xl); /* 1.5rem (24px) */` |
| `rounded-b-4xl`                  | `border-bottom-right-radius: var(--radius-4xl); /* 2rem (32px) */
border-bottom-left-radius: var(--radius-4xl); /* 2rem (32px) */`     |
| `rounded-b-none`                 | `border-bottom-right-radius: 0;
border-bottom-left-radius: 0;`                                                                         |
| `rounded-b-full`                 | `border-bottom-right-radius: calc(infinity * 1px);
border-bottom-left-radius: calc(infinity * 1px);`                                   |
| `rounded-b-(<custom-property>)`  | `border-bottom-right-radius: var(<custom-property>);
border-bottom-left-radius: var(<custom-property>);`                               |
| `rounded-b-[<value>]`            | `border-bottom-right-radius: <value>;
border-bottom-left-radius: <value>;`                                                             |
| `rounded-l-xs`                   | `border-top-left-radius: var(--radius-xs); /* 0.125rem (2px) */
border-bottom-left-radius: var(--radius-xs); /* 0.125rem (2px) */`     |
| `rounded-l-sm`                   | `border-top-left-radius: var(--radius-sm); /* 0.25rem (4px) */
border-bottom-left-radius: var(--radius-sm); /* 0.25rem (4px) */`       |
| `rounded-l-md`                   | `border-top-left-radius: var(--radius-md); /* 0.375rem (6px) */
border-bottom-left-radius: var(--radius-md); /* 0.375rem (6px) */`     |
| `rounded-l-lg`                   | `border-top-left-radius: var(--radius-lg); /* 0.5rem (8px) */
border-bottom-left-radius: var(--radius-lg); /* 0.5rem (8px) */`         |
| `rounded-l-xl`                   | `border-top-left-radius: var(--radius-xl); /* 0.75rem (12px) */
border-bottom-left-radius: var(--radius-xl); /* 0.75rem (12px) */`     |
| `rounded-l-2xl`                  | `border-top-left-radius: var(--radius-2xl); /* 1rem (16px) */
border-bottom-left-radius: var(--radius-2xl); /* 1rem (16px) */`         |
| `rounded-l-3xl`                  | `border-top-left-radius: var(--radius-3xl); /* 1.5rem (24px) */
border-bottom-left-radius: var(--radius-3xl); /* 1.5rem (24px) */`     |
| `rounded-l-4xl`                  | `border-top-left-radius: var(--radius-4xl); /* 2rem (32px) */
border-bottom-left-radius: var(--radius-4xl); /* 2rem (32px) */`         |
| `rounded-l-none`                 | `border-top-left-radius: 0;
border-bottom-left-radius: 0;`                                                                             |
| `rounded-l-full`                 | `border-top-left-radius: calc(infinity * 1px);
border-bottom-left-radius: calc(infinity * 1px);`                                       |
| `rounded-l-(<custom-property>)`  | `border-top-left-radius: var(<custom-property>);
border-bottom-left-radius: var(<custom-property>);`                                   |
| `rounded-l-[<value>]`            | `border-top-left-radius: <value>;
border-bottom-left-radius: <value>;`                                                                 |
| `rounded-ss-xs`                  | `border-start-start-radius: var(--radius-xs); /* 0.125rem (2px) */`                                                                    |
| `rounded-ss-sm`                  | `border-start-start-radius: var(--radius-sm); /* 0.25rem (4px) */`                                                                     |
| `rounded-ss-md`                  | `border-start-start-radius: var(--radius-md); /* 0.375rem (6px) */`                                                                    |
| `rounded-ss-lg`                  | `border-start-start-radius: var(--radius-lg); /* 0.5rem (8px) */`                                                                      |
| `rounded-ss-xl`                  | `border-start-start-radius: var(--radius-xl); /* 0.75rem (12px) */`                                                                    |
| `rounded-ss-2xl`                 | `border-start-start-radius: var(--radius-2xl); /* 1rem (16px) */`                                                                      |
| `rounded-ss-3xl`                 | `border-start-start-radius: var(--radius-3xl); /* 1.5rem (24px) */`                                                                    |
| `rounded-ss-4xl`                 | `border-start-start-radius: var(--radius-4xl); /* 2rem (32px) */`                                                                      |
| `rounded-ss-none`                | `border-start-start-radius: 0;`                                                                                                        |
| `rounded-ss-full`                | `border-start-start-radius: calc(infinity * 1px);`                                                                                     |
| `rounded-ss-(<custom-property>)` | `border-start-start-radius: var(<custom-property>);`                                                                                   |
| `rounded-ss-[<value>]`           | `border-start-start-radius: <value>;`                                                                                                  |
| `rounded-se-xs`                  | `border-start-end-radius: var(--radius-xs); /* 0.125rem (2px) */`                                                                      |
| `rounded-se-sm`                  | `border-start-end-radius: var(--radius-sm); /* 0.25rem (4px) */`                                                                       |
| `rounded-se-md`                  | `border-start-end-radius: var(--radius-md); /* 0.375rem (6px) */`                                                                      |
| `rounded-se-lg`                  | `border-start-end-radius: var(--radius-lg); /* 0.5rem (8px) */`                                                                        |
| `rounded-se-xl`                  | `border-start-end-radius: var(--radius-xl); /* 0.75rem (12px) */`                                                                      |
| `rounded-se-2xl`                 | `border-start-end-radius: var(--radius-2xl); /* 1rem (16px) */`                                                                        |
| `rounded-se-3xl`                 | `border-start-end-radius: var(--radius-3xl); /* 1.5rem (24px) */`                                                                      |
| `rounded-se-4xl`                 | `border-start-end-radius: var(--radius-4xl); /* 2rem (32px) */`                                                                        |
| `rounded-se-none`                | `border-start-end-radius: 0;`                                                                                                          |
| `rounded-se-full`                | `border-start-end-radius: calc(infinity * 1px);`                                                                                       |
| `rounded-se-(<custom-property>)` | `border-start-end-radius: var(<custom-property>);`                                                                                     |
| `rounded-se-[<value>]`           | `border-start-end-radius: <value>;`                                                                                                    |
| `rounded-ee-xs`                  | `border-end-end-radius: var(--radius-xs); /* 0.125rem (2px) */`                                                                        |
| `rounded-ee-sm`                  | `border-end-end-radius: var(--radius-sm); /* 0.25rem (4px) */`                                                                         |
| `rounded-ee-md`                  | `border-end-end-radius: var(--radius-md); /* 0.375rem (6px) */`                                                                        |
| `rounded-ee-lg`                  | `border-end-end-radius: var(--radius-lg); /* 0.5rem (8px) */`                                                                          |
| `rounded-ee-xl`                  | `border-end-end-radius: var(--radius-xl); /* 0.75rem (12px) */`                                                                        |
| `rounded-ee-2xl`                 | `border-end-end-radius: var(--radius-2xl); /* 1rem (16px) */`                                                                          |
| `rounded-ee-3xl`                 | `border-end-end-radius: var(--radius-3xl); /* 1.5rem (24px) */`                                                                        |
| `rounded-ee-4xl`                 | `border-end-end-radius: var(--radius-4xl); /* 2rem (32px) */`                                                                          |
| `rounded-ee-none`                | `border-end-end-radius: 0;`                                                                                                            |
| `rounded-ee-full`                | `border-end-end-radius: calc(infinity * 1px);`                                                                                         |
| `rounded-ee-(<custom-property>)` | `border-end-end-radius: var(<custom-property>);`                                                                                       |
| `rounded-ee-[<value>]`           | `border-end-end-radius: <value>;`                                                                                                      |
| `rounded-es-xs`                  | `border-end-start-radius: var(--radius-xs); /* 0.125rem (2px) */`                                                                      |
| `rounded-es-sm`                  | `border-end-start-radius: var(--radius-sm); /* 0.25rem (4px) */`                                                                       |
| `rounded-es-md`                  | `border-end-start-radius: var(--radius-md); /* 0.375rem (6px) */`                                                                      |
| `rounded-es-lg`                  | `border-end-start-radius: var(--radius-lg); /* 0.5rem (8px) */`                                                                        |
| `rounded-es-xl`                  | `border-end-start-radius: var(--radius-xl); /* 0.75rem (12px) */`                                                                      |
| `rounded-es-2xl`                 | `border-end-start-radius: var(--radius-2xl); /* 1rem (16px) */`                                                                        |
| `rounded-es-3xl`                 | `border-end-start-radius: var(--radius-3xl); /* 1.5rem (24px) */`                                                                      |
| `rounded-es-4xl`                 | `border-end-start-radius: var(--radius-4xl); /* 2rem (32px) */`                                                                        |
| `rounded-es-none`                | `border-end-start-radius: 0;`                                                                                                          |
| `rounded-es-full`                | `border-end-start-radius: calc(infinity * 1px);`                                                                                       |
| `rounded-es-(<custom-property>)` | `border-end-start-radius: var(<custom-property>);`                                                                                     |
| `rounded-es-[<value>]`           | `border-end-start-radius: <value>;`                                                                                                    |
| `rounded-tl-xs`                  | `border-top-left-radius: var(--radius-xs); /* 0.125rem (2px) */`                                                                       |
| `rounded-tl-sm`                  | `border-top-left-radius: var(--radius-sm); /* 0.25rem (4px) */`                                                                        |
| `rounded-tl-md`                  | `border-top-left-radius: var(--radius-md); /* 0.375rem (6px) */`                                                                       |
| `rounded-tl-lg`                  | `border-top-left-radius: var(--radius-lg); /* 0.5rem (8px) */`                                                                         |
| `rounded-tl-xl`                  | `border-top-left-radius: var(--radius-xl); /* 0.75rem (12px) */`                                                                       |
| `rounded-tl-2xl`                 | `border-top-left-radius: var(--radius-2xl); /* 1rem (16px) */`                                                                         |
| `rounded-tl-3xl`                 | `border-top-left-radius: var(--radius-3xl); /* 1.5rem (24px) */`                                                                       |
| `rounded-tl-4xl`                 | `border-top-left-radius: var(--radius-4xl); /* 2rem (32px) */`                                                                         |
| `rounded-tl-none`                | `border-top-left-radius: 0;`                                                                                                           |
| `rounded-tl-full`                | `border-top-left-radius: calc(infinity * 1px);`                                                                                        |
| `rounded-tl-(<custom-property>)` | `border-top-left-radius: var(<custom-property>);`                                                                                      |
| `rounded-tl-[<value>]`           | `border-top-left-radius: <value>;`                                                                                                     |
| `rounded-tr-xs`                  | `border-top-right-radius: var(--radius-xs); /* 0.125rem (2px) */`                                                                      |
| `rounded-tr-sm`                  | `border-top-right-radius: var(--radius-sm); /* 0.25rem (4px) */`                                                                       |
| `rounded-tr-md`                  | `border-top-right-radius: var(--radius-md); /* 0.375rem (6px) */`                                                                      |
| `rounded-tr-lg`                  | `border-top-right-radius: var(--radius-lg); /* 0.5rem (8px) */`                                                                        |
| `rounded-tr-xl`                  | `border-top-right-radius: var(--radius-xl); /* 0.75rem (12px) */`                                                                      |
| `rounded-tr-2xl`                 | `border-top-right-radius: var(--radius-2xl); /* 1rem (16px) */`                                                                        |
| `rounded-tr-3xl`                 | `border-top-right-radius: var(--radius-3xl); /* 1.5rem (24px) */`                                                                      |
| `rounded-tr-4xl`                 | `border-top-right-radius: var(--radius-4xl); /* 2rem (32px) */`                                                                        |
| `rounded-tr-none`                | `border-top-right-radius: 0;`                                                                                                          |
| `rounded-tr-full`                | `border-top-right-radius: calc(infinity * 1px);`                                                                                       |
| `rounded-tr-(<custom-property>)` | `border-top-right-radius: var(<custom-property>);`                                                                                     |
| `rounded-tr-[<value>]`           | `border-top-right-radius: <value>;`                                                                                                    |
| `rounded-br-xs`                  | `border-bottom-right-radius: var(--radius-xs); /* 0.125rem (2px) */`                                                                   |
| `rounded-br-sm`                  | `border-bottom-right-radius: var(--radius-sm); /* 0.25rem (4px) */`                                                                    |
| `rounded-br-md`                  | `border-bottom-right-radius: var(--radius-md); /* 0.375rem (6px) */`                                                                   |
| `rounded-br-lg`                  | `border-bottom-right-radius: var(--radius-lg); /* 0.5rem (8px) */`                                                                     |
| `rounded-br-xl`                  | `border-bottom-right-radius: var(--radius-xl); /* 0.75rem (12px) */`                                                                   |
| `rounded-br-2xl`                 | `border-bottom-right-radius: var(--radius-2xl); /* 1rem (16px) */`                                                                     |
| `rounded-br-3xl`                 | `border-bottom-right-radius: var(--radius-3xl); /* 1.5rem (24px) */`                                                                   |
| `rounded-br-4xl`                 | `border-bottom-right-radius: var(--radius-4xl); /* 2rem (32px) */`                                                                     |
| `rounded-br-none`                | `border-bottom-right-radius: 0;`                                                                                                       |
| `rounded-br-full`                | `border-bottom-right-radius: calc(infinity * 1px);`                                                                                    |
| `rounded-br-(<custom-property>)` | `border-bottom-right-radius: var(<custom-property>);`                                                                                  |
| `rounded-br-[<value>]`           | `border-bottom-right-radius: <value>;`                                                                                                 |
| `rounded-bl-xs`                  | `border-bottom-left-radius: var(--radius-xs); /* 0.125rem (2px) */`                                                                    |
| `rounded-bl-sm`                  | `border-bottom-left-radius: var(--radius-sm); /* 0.25rem (4px) */`                                                                     |
| `rounded-bl-md`                  | `border-bottom-left-radius: var(--radius-md); /* 0.375rem (6px) */`                                                                    |
| `rounded-bl-lg`                  | `border-bottom-left-radius: var(--radius-lg); /* 0.5rem (8px) */`                                                                      |
| `rounded-bl-xl`                  | `border-bottom-left-radius: var(--radius-xl); /* 0.75rem (12px) */`                                                                    |
| `rounded-bl-2xl`                 | `border-bottom-left-radius: var(--radius-2xl); /* 1rem (16px) */`                                                                      |
| `rounded-bl-3xl`                 | `border-bottom-left-radius: var(--radius-3xl); /* 1.5rem (24px) */`                                                                    |
| `rounded-bl-4xl`                 | `border-bottom-left-radius: var(--radius-4xl); /* 2rem (32px) */`                                                                      |
| `rounded-bl-none`                | `border-bottom-left-radius: 0;`                                                                                                        |
| `rounded-bl-full`                | `border-bottom-left-radius: calc(infinity * 1px);`                                                                                     |
| `rounded-bl-(<custom-property>)` | `border-bottom-left-radius: var(<custom-property>);`                                                                                   |
| `rounded-bl-[<value>]`           | `border-bottom-left-radius: <value>;`                                                                                                  |

## Examples

### Basic example

Use utilities like `rounded-sm` and `rounded-md` to apply different border radius sizes to an element:

```html
<div class="rounded-sm ..."></div>
<div class="rounded-md ..."></div>
<div class="rounded-lg ..."></div>
<div class="rounded-xl ..."></div>
```

### Rounding sides separately

Use utilities like `rounded-t-md` and `rounded-r-lg` to only round one side of an element:

```html
<div class="rounded-t-lg ..."></div>
<div class="rounded-r-lg ..."></div>
<div class="rounded-b-lg ..."></div>
<div class="rounded-l-lg ..."></div>
```

### Rounding corners separately

Use utilities like `rounded-tr-md` and `rounded-tl-lg` utilities to only round one corner of an element:

```html
<div class="rounded-tl-lg ..."></div>
<div class="rounded-tr-lg ..."></div>
<div class="rounded-br-lg ..."></div>
<div class="rounded-bl-lg ..."></div>
```

### Using logical properties

Use utilities like `rounded-s-md` and `rounded-se-xl` to set the border radius using [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts), which map to the appropriate corners based on the text direction:

```html
<div dir="ltr">
  <div class="rounded-s-lg ..."></div>
</div>

<div dir="rtl">
  <div class="rounded-s-lg ..."></div>
</div>
```

Here are all the available border radius logical property utilities and their physical property equivalents in both LTR and RTL modes.

| Class          | Left-to-right  | Right-to-left  |
| -------------- | -------------- | -------------- |
| `rounded-s-*`  | `rounded-l-*`  | `rounded-r-*`  |
| `rounded-e-*`  | `rounded-r-*`  | `rounded-l-*`  |
| `rounded-ss-*` | `rounded-tl-*` | `rounded-tr-*` |
| `rounded-se-*` | `rounded-tr-*` | `rounded-tl-*` |
| `rounded-es-*` | `rounded-bl-*` | `rounded-br-*` |
| `rounded-ee-*` | `rounded-br-*` | `rounded-bl-*` |

For more control, you can also use the [LTR and RTL modifiers](/docs/hover-focus-and-other-states#rtl-support) to conditionally apply specific styles depending on the current text direction.

### Creating pill buttons

Use the `rounded-full` utility to create pill buttons:

```html
<button class="rounded-full ...">Save Changes</button>
```

### Removing the border radius

Use the `rounded-none` utility to remove an existing border radius from an element:

```html
<button class="rounded-none ...">Save Changes</button>
```

### Using a custom value

Use the `rounded-[<value>]` syntax to set the border radius based on a completely custom value:

```html
<div class="rounded-[2vw] ...">...</div>
```

For CSS variables, you can also use the `rounded-(<custom-property>)` syntax:

```html
<div class="rounded-(--my-radius) ...">...</div>
```

This is just a shorthand for `rounded-[var(<custom-property>)]` that adds the `var()` function for you automatically.

Prefix a `border-radius` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states).

## Customizing your theme

Use the `--radius-*` theme variables to customize the border radius utilities in your project:

```css
@theme {
  --radius-5xl: 3rem;
}
```

Now the `rounded-5xl` utility can be used in your markup:

```html
<div class="rounded-5xl">...</div>
```

Learn more about customizing your theme in the [theme documentation](/docs/theme#customizing-your-theme).