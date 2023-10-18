"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from "react-cmdk";

enum CommandPalettePage {
  Root = "ROOT",
  Projects = "PROJECTS",
}

interface CommandPaletteComponentProps {
  // setIsOpenNAV: () => void;
  open: boolean;
}

const CommandPaletteComponent = ({ open }: CommandPaletteComponentProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSeaarch] = useState<string>("");
  const [page, setPage] = useState<CommandPalettePage>(CommandPalettePage.Root);

  const { theme, setTheme } = useTheme();

  useHandleOpenCommandPalette(setIsOpen);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  const filteredItems = filterItems(
    [
      {
        heading: "Home",
        id: "home",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            href: "/",
          },
          {
            id: "about",
            children: "About",
            icon: "GlobeAltIcon",
            href: "/about",
          },
          // {
          //   id: "projects",
          //   children: "Projects",
          //   icon: "RectangleStackIcon",
          //   closeOnSelect: false,
          //   onClick: () => {
          //     setPage(CommandPalettePage.Projects);
          //   },
          // },
        ],
      },
      {
        heading: "Other",
        id: "advanced",
        items: [
          {
            id: "theme-toggle",
            children: "Theme Toggle",
            icon: "SunIcon",
            closeOnSelect: false,
            onClick: () => {
              theme === "dark" ? setTheme("light") : setTheme("dark");
            },
          },
          // {
          //   id: "log-out",
          //   children: "Log out",
          //   icon: "ArrowRightOnRectangleIcon",
          //   onClick: () => {
          //     alert("Logging out...");
          //   },
          // },
        ],
      },
    ],
    search
  );
  return (
    <>
      <CommandPalette
        search={search}
        isOpen={isOpen}
        onChangeOpen={setIsOpen}
        onChangeSearch={setSeaarch}
        page={page}
      >
        <CommandPalette.Page id={CommandPalettePage.Root}>
          {filteredItems.length ? (
            filteredItems.map((list) => (
              <CommandPalette.List key={list.id} heading={list.heading}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    key={id}
                    index={getItemIndex(filteredItems, id)}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            ))
          ) : (
            <CommandPalette.FreeSearchAction />
          )}
          {/* <CommandPalette.List heading="Pages">
            <CommandPalette.ListItem index={0}>Home</CommandPalette.ListItem>
          </CommandPalette.List> */}
        </CommandPalette.Page>

        <CommandPalette.Page id={CommandPalettePage.Projects}>
          {/* Projects page */}
        </CommandPalette.Page>
      </CommandPalette>
    </>
  );
};

export default CommandPaletteComponent;
