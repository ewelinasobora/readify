function sectionTemplate(sectionTitle, sectionContent) {
  return `## ${sectionTitle}\n\n${sectionContent}\n\n`;
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
      case "table of contents":
        sectionContent += sectionTemplate(section, tableOfContents);
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
        sectionContent += sectionTemplate(section, questions);
        break;
      default:
        sectionContent += sectionTemplate(section, license);
        break;
    }
  });

  const contactSection = `## Contact\n\nGitHub: ${github}\nEmail: ${email}\n\n`;
  const licenseBadge = `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`;
  return `${licenseBadge} \n # ${title}\n ## ${sectionContent}${contactSection}`;
}

module.exports = generateMarkdown;
