// function to generate section template
function sectionTemplate(sectionTitle, sectionContent) {
  return `## ${sectionTitle}\n\n${sectionContent}\n\n`;
}
// function to generate table of contents
function tableOfContentsTemplate(sections) {
  let tableOfContents = "## Table of Contents\n\n";

  sections.split(",").forEach(section => {
    tableOfContents += `- [${section}](#${section.toLowerCase()})\n`;
  });

  tableOfContents += "\n";
  return tableOfContents;
}

// function to generate markdown for README
function generateMarkdown(data) {
  const { sections, title, description, tableOfContents, installation, usage, license, contributing, tests, questions, other, github, email } = data;
  let sectionContent = "";

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
        sectionContent += sectionTemplate(section, license);
        break;
      case "contributing":
        sectionContent += sectionTemplate(section, contributing);
        break;
      case "tests":
        sectionContent += sectionTemplate(section, tests);
        break;
      case "questions":
        sectionContent += `## Contact\n\nGitHub: ${github}\nEmail: ${email}\n\n`;
        break;
      default:
        sectionContent += sectionTemplate(section, other);
        break;
    }
  });

  const licenseBadge = `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
  return `${licenseBadge}\n\n #${title}\n${tableOfContentsTemplate(sections)}${sectionContent}`;
}

module.exports = generateMarkdown;
