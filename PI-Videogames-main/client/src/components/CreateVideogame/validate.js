export default function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "The name is required";
  }

  if (!input.description) {
    errors.description = "The description is required";
  }

  if (input.description.length > 250) {
    errors.description = "Description must be less than 250 characters";
  }

  if (!input.rating) {
    errors.rating = "Rating is required";
  }
  if (
    !/^(?:[1-9]\d{0,2}(?:,\d{3})*|0)(?:\.\d+)?$/.test(input.rating) ||
    input.rating < 0 ||
    input.rating > 5
  ) {
    errors.rating = "Rating must be a number between 0 and 5";
  }
  if (input.platforms.length === 0) {
    errors.platforms = "Please select at least one platform";
  }
  if (input.genres.length === 0) {
    errors.genres = "Please select at least one genre";
  }
  return errors;
}
