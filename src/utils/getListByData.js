import { getStringPath } from './getStringPath';
export const getListByData = ({ data = [], element = '', type = '' }) =>
  data.map((e) => (type === 'path' ? getStringPath(e[element]) : e[element]));
