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
