async function loadIncludes() {
  const elements = document.querySelectorAll('[data-include]');

  for (const element of elements) {
    const file = element.getAttribute('data-include');

    try {
      const response = await fetch(file);

      if (!response.ok) {
        throw new Error(`No se pudo cargar ${file}`);
      }

      const html = await response.text();
      element.innerHTML = html;
    } catch (error) {
      element.innerHTML = `<p style="color:red;">Error cargando ${file}</p>`;
      console.error(error);
    }
  }
}

document.addEventListener('DOMContentLoaded', loadIncludes);