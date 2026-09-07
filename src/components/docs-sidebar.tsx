import { NavList, NavListHeading, NavListItem, NavListItems } from "@/components/nav-list";
import index from "../app/(docs)/docs/index";
import { DocsSidebarLink } from "./docs-sidebar-link";

export function DocsSidebar() {
  return (
    <nav className="flex flex-col gap-8">
      {Object.entries(index).map(([category, entries]) => (
        <NavList key={category} data-autoscroll>
          <NavListHeading>{category}</NavListHeading>
          <NavListItems>
            {entries.map(([title, path, children]) => (
              <NavListItem key={path}>
                <DocsSidebarLink title={title} path={path} />

                {Array.isArray(children) && children.length > 0 && (
                  <NavListItems nested>
                    {children.map(([title, path]) => (
                      <NavListItem key={path}>
                        <DocsSidebarLink title={title} path={path} nested />
                      </NavListItem>
                    ))}
                  </NavListItems>
                )}
              </NavListItem>
            ))}
          </NavListItems>
        </NavList>
      ))}
    </nav>
  );
}
