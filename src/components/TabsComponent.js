import { Tab, TabPanel, Tabs, TabList } from 'react-tabs'

// works as a container for props, but don't rended smth directly.
// its children are used in TabsComponent
export function TabsItem() {
  return null;
}

export function TabsComponent({ children = [] }) {
  return (
    <Tabs>
      <TabList className="flex not-prose">
        {children.map((tabItem, i) => {
          return (
            <Tab
              key={i}
              className="w-[9.188rem] text-center hover:bg-smoke hover:rounded-md py-2 font-roboto text-[0.875rem] font-semibold cursor-pointer"
              selectedClassName="border-orange border-b-2 text-orange hover:rounded-b-none"
            >
              {tabItem.props.title}
            </Tab>
          )
        })}
      </TabList>
      {children.map((tabsItem, index) => (
        <TabPanel key={index}>{tabsItem?.props?.children}</TabPanel>
      ))}
    </Tabs>
  )
}
