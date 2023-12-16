// function to generate markdown for README
function generateMarkdown(data) {
  const content = `# ${data.title}\n`;
  const sections = data.sections.split(",");

  let i = 0;
  sectionContent = "";

  while (i < sections.length) {
    if (sections[i] === "Description") {
      sectionContent += `## ${sections[i]}\n\n${data.description}\n\n`;
    }
    i++;
  }

  return content + sectionContent;
}


module.exports = generateMarkdown;
