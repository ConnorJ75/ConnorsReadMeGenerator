// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;}
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "none"){
    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
      'Boost1.0': 'https://opensource.org/licenses/BSL-1.0',
      'NPL2.0': 'https://opensource.org/licenses/NPL-2.0',
      'BSD2': 'https://opensource.org/licenses/BSD-2-Clause',
      'BSD3': 'https://opensource.org/licenses/BSD-3-Clause',
    };
    return licenseLinks[license];
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `${renderLicenseBadge(license)}
    Link: ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data = data.responses;
  console.log(data);
  return `# ${data.project}
  ${data.username}
  ${data.email}

  ##Description
  ${data.description}
  ##Installation
  ${data.installCommand}
  ##License
  ${renderLicenseSection(data.license)}
  ##Repo Info
  ${data.repoInfo}
  ##Contributions
  ${data.contribute}
  ##Tests
  ${data.testsCommand}
`;
}

module.exports = generateMarkdown;
