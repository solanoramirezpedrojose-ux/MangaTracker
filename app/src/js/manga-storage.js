// Clave donde se guarda la biblioteca.
const STORAGE_KEY = 'mangatracker_mangas';

// Recupera los mangas guardados.
export function getMangas() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const mangas = data ? JSON.parse(data) : [];

    return Array.isArray(mangas) ? mangas : [];
  } catch (error) {
    console.error('Error al recuperar mangas:', error);
    return [];
  }
}

// Guarda la biblioteca.
export function saveMangas(mangas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mangas));
}

// Actualiza los datos de un manga existente.
export function updateManga(id, changes) {
  const mangas = getMangas();

  const exists = mangas.some(
    (manga) => String(manga.id) === String(id)
  );

  if (!exists) {
    return false;
  }

  const updatedMangas = mangas.map((manga) =>
    String(manga.id) === String(id)
      ? { ...manga, ...changes }
      : manga
  );

  saveMangas(updatedMangas);

  return true;
}