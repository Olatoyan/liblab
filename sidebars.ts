import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "welcome",
    {
      type: "category",
      label: "Get started",
      link: {
        type: "doc",
        id: "get-started/getting-started",
      },
      items: ["get-started/getting-started", "get-started/into"],
    },
  ],
};

export default sidebars;
