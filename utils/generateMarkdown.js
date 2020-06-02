function generateMarkdown(data) {
  return `
# Title \n ${data.title} \n
## Description \n ${data.description} \n
## Table of Contents \n ${data.tableofcontents} \n
## Installation \n${data.installation} \n
## Usage \n ${data.usage} \n
## Licensing \n ${data.licensing} \n
[![Generic badge](https://img.shields.io/badge/Licensing-${data.licensing}-<COLOR>.svg)](https://shields.io/)
## Contributing \n${data.contributing} \n
## Tests \n${data.tests} \n




`;
}

module.exports = generateMarkdown;

