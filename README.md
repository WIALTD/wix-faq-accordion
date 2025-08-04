# wix-faq-accordion

[![Live Demo](https://img.shields.io/badge/View-Live%20Demo-blue)](https://wialtd.github.io/wix-faq-accordion/)

Custom FAQ accordion for Wix Studio sites, used in **Global Guide Group** to replace the
default Wix FAQ widget, which is limited in functionality and visual appeal.

This project provides a **clean, collapsible FAQ** with smooth animations and support for multiple questions, all fully controllable from Wix Dev Mode.

---

## Features

- Smooth expand/collapse animations  
- Automatically collapses other questions when a new one is opened  
- Scrolls to the active question for better UX  
- Uses simple JS + Wix `$w` selectors (no external libraries)

---

## How to Use

1. **Enable Dev Mode in Wix Studio**  
   - Ensure you can access `$w` for element IDs

2. **Add Your FAQ Elements**
   - Create boxes for each FAQ title button, and answer section and assign IDs like:
     ```
     faqButton1, faqBox1, plus1, minus1
     faqButton2, faqBox2, plus2, minus2
     ```
   - Repeat for as many questions as needed

3. **Attach the Script**
   - Copy the `faqAccordion.js` content into your Wix site’s public JS file  
   - Ensure the IDs match the ones in your Wix page

4. **Test**
   - Preview your site and verify smooth accordion behavior

---

## Project Structure
