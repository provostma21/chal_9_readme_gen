const licenseList = [
  {name: 'MIT', badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`,link:`(https://opensource.org/licenses/MIT)`},
  {name: 'Apache', badge: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`,link:`(https://opensource.org/licenses/Apache-2.0)`},
  {name: 'BSD3', badge: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`,link:`(https://opensource.org/licenses/BSD-3-Clause)`},
  {name: 'CC0', badge: `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`,link:`(http://creativecommons.org/publicdomain/zero/1.0/)`},
  {name: 'GNU GPL v3', badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`,link:`(https://www.gnu.org/licenses/gpl-3.0)`}
];



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === licenseList.name) {
      return licenseList.badge;
    } 
    else return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license ===licenseList.name) {
      return licenseList.link;
    }
    else return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `Licensed under the following license: [${license}](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribute](#contribute)
  -[Tests](#tests)
  -[License](#license)
  -[Creator](#creator)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Tests
  ${data.test}

  ## License
  ${renderLicenseSection(data.license)}

  ## Creator
  Thank you very much your your time. Feel free to take a look at my other projects at (https://github.com/${data.username}).
  If you have any questions, you can also email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
