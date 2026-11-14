// Clave donde se guardará la biblioteca.
const STORAGE_KEY = 'mangatracker_mangas';

// Recupera los mangas guardados.
export function getMangas() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const mangas = data ? JSON.parse(data) : [];

    return Array.isArray(mangas) ? mangas : [];
  } catch (error) {
    console.error('Error al recuperar los mangas:', error);
    return [];
  }
}

// Guarda la biblioteca actualizada.
export function saveMangas(mangas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mangas));
}