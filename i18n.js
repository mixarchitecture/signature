const getMessages = (messages, def = 'en') => {
    const lang = navigator.language.split(/[-_]/)[0]; // language without region code
    return messages[lang] || messages[def];
}