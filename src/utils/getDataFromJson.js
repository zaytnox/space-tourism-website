export const getDataFromJson = async (section = 'destinations') => {
  try {
    const data = await import('/data.json');
    return data.default[section];
  } catch (error) {}
};
