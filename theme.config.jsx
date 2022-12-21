/** @type {import("nextra-theme-docs").DocsThemeConfig} */
export default {
  logo: <span>Atlaz DAO</span>,
  project: {
    link: "https://github.com/Atlaz-DAO/docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Atlaz DAO",
    };
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: () => <>Question? Give us feedback →</>,
    labels: "feedback",
  },
};
