// function to capitalize first letter of each word in section title
function modifySection(title) {
  return title.charAt(0).toUpperCase() + title.slice(1);
}

// function to generate section template
function sectionTemplate(sectionTitle, sectionContent) {
  return `## ${modifySection(sectionTitle)}\n\n${sectionContent}\n\n`;
}

// function to generate table of contents
function tableOfContentsTemplate(sections) {
  let tableOfContents = "## Table of Contents\n\n";

  sections.split(",").forEach(section => {
    tableOfContents += `- [${modifySection(section)}](#${section})\n`;
  });

  tableOfContents += "\n";
  return tableOfContents;
}

// function to generate markdown for README
function generateMarkdown(data) {
  const { sections, title, description, installation, usage, license, contributing, tests, other, github, email, licenseType } = data;
  let sectionContent = "";
  let badges = "";

  sections.split(",").forEach(section => {
    switch (section.toLowerCase()) {
      case "description":
        sectionContent += sectionTemplate(section, description);
        break;
      case "installation":
        sectionContent += sectionTemplate(section, installation);
        break;
      case "usage":
        sectionContent += sectionTemplate(section, usage);
        break;
      case "license":
        badges += `![GitHub license](https://img.shields.io/badge/license-${licenseType}-blue.svg)`;
        sectionContent += sectionTemplate(section, license);
        break;
      case "contributing":
        sectionContent += sectionTemplate(section, contributing);
        break;
      case "tests":
        sectionContent += sectionTemplate(section, tests);
        break;
      case "questions":
        sectionContent += `## ${modifySection(section)}?\n\n### Contact Me:\n\n- GitHub: [${github}](@${github})\n\n- Email: ${email}\n\n`;
        break;
      default:
        sectionContent += sectionTemplate(section, other);
        break;
    }
  });

  return `${badges}\n\n# ${modifySection(title)}\n${tableOfContentsTemplate(sections)}${sectionContent}`;
}

module.exports = generateMarkdown;
