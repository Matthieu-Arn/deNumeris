# **De Numeris** 

The page is deployed here: https://matthieu-arn.github.io/deNumeris/


**De Numeris** (*Of Numbers*) is a simple-to-use HTMLweb-based application to convert numbers from the Arabic system (using place value notation) to the Roman numerals system (using subtractive notation) and back.
This site is useful for curious-minded people who wish to translate monumental date inscriptions on the go, and more generally for those who wish to play around with numbers.

![Am I Reponsive output for the De Numeris application](<assets/documentation/responsiveness/deNumeris Am I Responsive.jpg>)

## User Experience

### User Stories
 - As a **user**, I want to **enter a number in Roman numeral notation in the required field**, so that **I can get its equivalent in Arabic notation**.
 - As a **user**, I want to **enter a number in Arabic notation in the required field**, so that **I can get its equivalent in Roman numeral form**.
 - As a **user**, I want to **interact with a simple interface**, so that **I can get answers rapidly**.


## Features

### Existing Features
  - Structure
      - The site lives on a single HTML page, with a single input field, and a single submit button
      - A simple header introduces the name of the site ("De Numeris") along with a short description of its purpose ("Machine Translator for Roman Numerals")
      - A simple footer provides copyright information
      - There is no link towards secondary pages on the site or towrds third-party pages
  - Presentation
      - The landing page includes a picture of the Colosseum in Rome to convey the general theme and purpose of the application
      - The input field accepts numbers between 1 and 3,999 (included) in either notation 
      - The submit button, when pressed, returns the translated figure in the output field
      - The refresh button, when pressed, clears both input and output fields

### Future Features
  - Extra HTML page to provide a brief introduction to the Roman numeral system and the differences with the more widespread Arabic notation
  - Extra JavaScript code to improve the Roman numeral checking function so as to catch legitimate letters used in a nonsensical order e.g.: IVLX
  - Extra JavaScript code to expand the current value range to allow values in excess of 1 million
  - Extra JavaScript code to expand the current value range to allow fractional values using the duodecimal system
  - Extra JavaScript code to offer a quiz along the lines of "Love Maths" with questions asked in either Arabic or Roman notation and answers to be given in either Arabic or Roman notation

## Design

### Imagery
  - The background(hero) image was chosen because ot its obvious relation to the purpose of the website. It depicts a section of the Western facade of the Colosseum in Rome, including gate numbers in Roman numerals above each visible gate (these are faint and not visible on all screens sizes)

### Colour Scheme
  - The colour scheme use a neutral stone/earth shade for the header and footer, in keeping with the ruins depicted in the hero image

### Typography
  - A font reminiscent of Roman monumnetal epigraphic inscriptions was chosen to remain in keeping with the overall theme
  - To this end, **Cormorant Garamond** was imported using Google Fonts

### Wireframes
  - Wireframes were created in Balsamiq prior to development, in order to gauge proportions and overall organisations of the page on different devices/screen sizes

![De Numeris wireframe for mobile phone type devices](<assets/documentation/wireframes/deNumeris_Wireframe_1.jpg>)

![De Numeris wireframe for tablet type devices](<assets/documentation/wireframes/deNumeris_Wireframe_2.jpg>)

![De Numeris wireframe for desktop type devices](<assets/documentation/wireframes/deNumeris_Wireframe_3.jpg>)


## Technologies Used

### Languages Used
  - HTML5
  - CSS3
  - JavaScript

### Resources & Programmes Used
  - Google Fonts: for the Cormorant Garamond font used throughout the webpage
  - Emojipedia: for the emojis included in the browser tab and as refresh/reset button
  - GitPod & GitHub: for code development and code safekeeping respectively 
  - Balsamiq: to develop wireframes
  - Paint.net: to edit the images used in assets and documentation
  - Snipping Tool: to take screen captures of various documentaiton images

## Testing

## Deployment

## Credits