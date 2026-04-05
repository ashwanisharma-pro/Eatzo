function filterArrayBySearch(data, value, fields = []) {
  if (!value) return data;

  const search = value.toLowerCase().trim();
  return data.filter(item =>
    fields.some(field => String(item[field]).toLowerCase().includes(search))
  );
}