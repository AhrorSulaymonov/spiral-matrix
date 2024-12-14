function generateSpiralMatrix(size, direction = "clockwise") {
  // Matritsani yaratamiz va barcha qiymatlarni 0 ga tenglashtiramiz
  let matrix = Array.from({ length: size }, () => Array(size).fill(0));
  let num = 1; // Matritsaga kiritiladigan raqamlar
  let top = 0,
    bottom = size - 1,
    left = 0,
    right = size - 1;

  if (direction === "clockwise") {
    while (num <= size * size) {
      // Chapdan o'ngga
      for (let i = left; i <= right && num <= size * size; i++) {
        matrix[top][i] = num++;
      }
      top++;

      // Yuqoridan pastga
      for (let i = top; i <= bottom && num <= size * size; i++) {
        matrix[i][right] = num++;
      }
      right--;

      // O'ngdan chapga
      for (let i = right; i >= left && num <= size * size; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;

      // Pastdan yuqoriga
      for (let i = bottom; i >= top && num <= size * size; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  } 

  return matrix;
}

// Matritsa o'lchami
const size = 7;

// Soat strelkasi bo'yicha
const clockwiseMatrix = generateSpiralMatrix(size, "clockwise");
console.log("Soat strelkasi bo'yicha:");
console.table(clockwiseMatrix);

