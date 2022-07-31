// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'GPL') {
      badge = '![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}

// function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
    if(license === 'MIT') {
      licenseLink = 'https://choosealicense.com/licenses/mit/'
    } else if (license === 'GPL') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ""
    }
    return licenseLink;
}

// function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// function to generate markdown for the README.md
function generateMarkdown(answer) {

  return`
  # ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Table of Contents:
  ###  * [Title](#title)
  ###  * [License](#license)
  ###  * [Description](#description)
  ###  * [Username](#username)
  ###  * [Email](#email)
`;
}

//ReadMe video link
https://drive.google.com/file/d/1wJvV1ius2WvJhjL4Ceu-LV94aqM0j56K/view

// exports
module.exports = generateMarkdown;