import { Tab, TabList, TabPanel } from "@headlessui/react";
import clsx from "clsx";

export function TabButtonContainer({ children }: { children: React.ReactNode }) {
  return (
    <TabList className="grid grid-cols-[repeat(auto-fit,calc(var(--spacing)*42))] overflow-x-auto text-gray-950 dark:text-white">
      {children}
    </TabList>
  );
}

export function TabButton(
  props: React.ComponentProps<typeof Tab> & {
    children: React.ReactNode;
    value: string;
    color?: string;
  },
) {
  let activeStyles;
  let color = props.color;
  switch (true) {
    case color === "indigo":
      activeStyles = "dark:data-selected:text-indigo-500 data-selected:bg-indigo-500/5 data-selected:text-indigo-600";
      break;

    case color === "violet":
      activeStyles = "dark:data-selected:text-violet-500 data-selected:bg-violet-500/5 data-selected:text-violet-600";
      break;

    case color === "purple":
      activeStyles = "dark:data-selected:text-purple-500 data-selected:bg-purple-500/5 data-selected:text-purple-600";
      break;
    case color === "fuchsia":
      activeStyles =
        "dark:data-selected:text-fuchsia-500 data-selected:bg-fuchsia-500/5 data-selected:text-fuchsia-600";
      break;

    case color === "pink":
      activeStyles = "dark:data-selected:text-pink-500 data-selected:bg-pink-500/5 data-selected:text-pink-600";
      break;

    default:
      activeStyles = "dark:data-selected:text-blue-500 data-selected:bg-blue-500/5 data-selected:text-blue-600";
      break;
  }
  return (
    <Tab
      className={clsx(
        "group grid place-items-center gap-4 border-r border-r-gray-950/10 p-6 font-mono text-sm/7 focus:outline-none dark:border-r-white/10",
        activeStyles,
      )}
      {...props}
    >
      <div>
        {/* <div className="transition-transform duration-300 group-hover:-translate-y-1"> */}
        {/* svg goes here */}
        {props.children}
      </div>
      <p className="text-sm font-semibold tracking-widest uppercase">{props.value}</p>
    </Tab>
  );
}

export function TabPanelContent({ children }: { children: React.ReactNode }) {
  return <TabPanel className="h-213 w-full bg-gray-950/5 dark:bg-white/10">{children}</TabPanel>;
}
