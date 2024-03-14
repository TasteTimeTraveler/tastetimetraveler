
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element');
}

function scrollToForm() {
    const formSection = document.getElementById('tour-form');
    formSection.scrollIntoView({ behavior: 'smooth' });
}
