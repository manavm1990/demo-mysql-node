export const countBooksByInStock = (connection) =>
  connection.execute(
    "SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock"
  );

export const generateSectionStats = (connection) =>
  connection.execute(
    "SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section"
  );
