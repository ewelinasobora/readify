// function to generate markdown for README
function generateMarkdown(data) {
  const content = `# ${data.title}\n`;
  const sections = data.sections.split(",");

  sectionContent = "";

  sections.forEach(section => {
    if (section === "Description") {
      sectionContent += `## ${section}\n\n${data.description}\n\n`;
    } else if (section === "Table of Contents") {
      sectionContent += `## ${section}\n\n${data.tableOfContents}\n\n`;
    } else if (section === "Installation") {
      sectionContent += `## ${section}\n\n${data.installation}\n\n`;
    } else if (section === "Usage") {
      sectionContent += `## ${section}\n\n${data.usage}\n\n`;
    } else if (section === "License") {
      sectionContent += `## ${section}\n\n${data.license}\n\n`;
    } else if (section === "Contributing") {
      sectionContent += `## ${section}\n\n${data.contributing}\n\n`;
    } else if (section === "Tests") {
      sectionContent += `## ${section}\n\n${data.tests}\n\n`;
    } else if (section === "Questions") {
      sectionContent += `## ${section}\n\n${data.questions}\n\n`;
    } else {
      sectionContent += `## ${section}\n\n${data.other}\n\n`;
    }
  });

  return content + sectionContent;

}


module.exports = generateMarkdown;
