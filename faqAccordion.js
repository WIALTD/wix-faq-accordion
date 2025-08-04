
/**
 * faqAccordion.js
 * 
 * Custom FAQ Accordion for Wix Studio Sites
 * 
 * Project: Global Guide Group (GGG)
 * Purpose: Replaces the default Wix FAQ widget with a smooth, animated accordion
 * 
 * Features:
 *  - Smooth expand/collapse animations
 *  - Auto-collapse other FAQ answers when opening a new one
 *  - Scrolls the selected FAQ into view
 * 
 * Usage:
 *  1. Enable Wix Dev Mode and create boxes for each FAQ answer.
 *  2. Assign IDs like:
 *        faqButton1, faqBox1, plus1, minus1
 *        faqButton2, faqBox2, plus2, minus2
 *  3. Copy this script into your Wix site’s page code in dev mode at the bottom of the screen, or public JS file.
 *  4. Match the element IDs in Wix to the ones in this script.
 * 
 * Author: Alexander (WIALTD)
 * License: Free to use and modify with attribution
 */
import wixWindow from 'wix-window';

$w.onReady(function () {
    const faqButtons = $w('Box').filter(btn => btn.id.startsWith('faqButton'));

    faqButtons.forEach(btn => {
        const idx = btn.id.replace('faqButton', '');
        const box = $w(`#faqBox${idx}`);
        const plus = $w(`#plus${idx}`);
        const minus = $w(`#minus${idx}`);

        btn.onClick(() => {
            const isOpening = minus.hidden; // true if currently closed

            // Collapse all first
            faqButtons.forEach(otherBtn => {
                const otherIdx = otherBtn.id.replace('faqButton', '');
                const otherBox = $w(`#faqBox${otherIdx}`);
                const otherPlus = $w(`#plus${otherIdx}`);
                const otherMinus = $w(`#minus${otherIdx}`);

                otherBox.collapse({ duration: 400, easing: "easeOut" });
                otherPlus.show();
                otherMinus.hide();
            });

            // Expand the clicked one if it was closed
            if (isOpening) {
                box.expand({ duration: 400, easing: "easeOut" });
                plus.hide();
                minus.show();

                // Delay scroll slightly for smoother effect
                setTimeout(() => {
                    btn.scrollTo(); // Scrolls the page so the box is in view
                }, 150);
            }
        });
    });
});
