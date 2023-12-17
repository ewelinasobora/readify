function sectionTemplate(sectionTitle, sectionContent) {
  return `## ${sectionTitle}\n\n${sectionContent}\n\n`;
}
// function to generate markdown for README
function generateMarkdown(data) {
  const { title, sections, description, tableOfContents, installation, usage, license, contributing, tests, questions, other } = data;
  let sectionContent = "";

  sections.split(",").forEach(section => {
    console.log(section);
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
        sectionContent += sectionTemplate(section, other);
        break;
    }
  });

  return `# ${title}\n${sectionContent}`;
}

module.exports = generateMarkdown;
