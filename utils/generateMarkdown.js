// function to generate markdown for README
function generateMarkdown(data) {
  const content = `# ${data.title}\n`
  const sectionsContent = sections(data);

  return content + sectionsContent;
}

// function to generate sections
function sections(data) {
  let sectionsContent = "";
  data.sections.split(",").forEach(section => {

    const modifiedSection = section[0].toUpperCase() + section.slice(1).toLowerCase();

    if (modifiedSection === "Description") {
      sectionsContent += `## ${section + "\n" + data.description}` + "\ntest";
    }
  }
  );
  return sectionsContent;
}




module.exports = generateMarkdown;
