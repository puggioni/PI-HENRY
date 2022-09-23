export default function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "El juego debe tener un nombre";
  }

  if (!input.description) {
    errors.description = "El juego debe tener alguna descripcion";
  }

  if (input.description.length > 250) {
    errors.description = "La descripcion debe tener menos de 250 caracteres";
  }

  if (!input.rating) {
    errors.rating = "El juego debe tener un rating";
  }
  if (
    !/^(?:[1-9]\d{0,2}(?:,\d{3})*|0)(?:\.\d+)?$/.test(input.rating) ||
    input.rating < 0 ||
    input.rating > 5
  ) {
    errors.rating = "El rating debe ser un numero entre 0 y 5";
  }
  if (!input.platforms) {
    errors.platforms = "El juego debe tener una plataforma";
  }
  if (!input.genres) {
    errors.genres = "El juego debe tener un genero";
  }
  return errors;
}
