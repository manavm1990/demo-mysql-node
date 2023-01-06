// This is a utility function that we can use with a PREPARED STATEMENT to...
export const selectStar = (connection, tableName) =>
  connection.execute(`SELECT * FROM ${tableName}`);

export const delById = ({ connection, tableName, id }) => {
  connection.execute(`DELETE FROM ${tableName} WHERE id = ?`, [id]);
};
