// Copy BibTeX to clipboard
function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');
    if (!bibtexElement || !button) return;

    const copyText = button.querySelector('.copy-text');
    const text = bibtexElement.textContent;

    function showCopied() {
        button.classList.add('copied');
        copyText.textContent = 'Copied!';
        setTimeout(function() {
            button.classList.remove('copied');
            copyText.textContent = 'Copy';
        }, 2000);
    }

    function fallbackCopy() {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showCopied();
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
        document.body.removeChild(textArea);
    }

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(showCopied).catch(fallbackCopy);
    } else {
        fallbackCopy();
    }
}

// Scroll to top
function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}

// Show/hide the scroll-to-top button
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (!scrollButton) return;
    scrollButton.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

// Show the "scroll sideways" hint only under containers whose content actually overflows
function markOverflowing() {
    document.querySelectorAll('.table-scroll, .strip-scroll').forEach(function(el) {
        el.classList.toggle('is-overflowing', el.scrollWidth > el.clientWidth + 1);
    });
}

window.addEventListener('load', markOverflowing);
window.addEventListener('resize', markOverflowing, { passive: true });
document.addEventListener('DOMContentLoaded', markOverflowing);
