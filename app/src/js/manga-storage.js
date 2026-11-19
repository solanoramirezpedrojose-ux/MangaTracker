//Con esta clase se identiica la biblioteca guardada
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
//Convierte la lista a JSON y la almacena localmente
export function saveMangas(mangas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mangas));
}

// Actualiza un manga existente.
//Busca el registro por ID y modifica sus propiedades
export function updateManga(id, changes) {
  const mangas = getMangas();

  const exists = mangas.some(
    (manga) => String(manga.id) === String(id)
  );

  if (!exists) return false;

  const updatedMangas = mangas.map((manga) =>
    String(manga.id) === String(id)
      ? { ...manga, ...changes }
      : manga
  );

  saveMangas(updatedMangas);
  return true;
}

// Elimina un manga de la biblioteca.
//Filtra el registro por ID y guarda la lista actualizada
export function deleteManga(id) {
  const mangas = getMangas();

  const updatedMangas = mangas.filter(
    (manga) => String(manga.id) !== String(id)
  );

  if (updatedMangas.length === mangas.length) {
    return false;
  }

  saveMangas(updatedMangas);
  return true;
}
