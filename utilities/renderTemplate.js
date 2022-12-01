//takes html and prompt data as arguments and replaces html keys with prompts answers
function renderTemplate(template, values) {
  for (const [key, value] of Object.entries(values)) {
    template = template.replace(`{${key}}`, value);
  }
  return template;
}

module.exports = renderTemplate;
