import moment from 'moment';
const inputDateFormat = 'MM/DD/YYYY';

const pluralize = (quantity, word) => {
  return quantity > 1 ? word + 's' : word;
};

const _moment = (date) => {
  return moment(date, inputDateFormat);
};

export const formatDate = (date) => {
  return _moment(date).format('MMM YYYY');
};

export const calculateDifference = (startDate, endDate, isCurrent) => {
  const endDateUnix = isCurrent ? moment().unix() : _moment(endDate).unix();
  const diffUnix = endDateUnix - _moment(startDate).unix();

  const months = Math.round((diffUnix / 2592000) % 12);
  const years = Math.floor(diffUnix / (2592000 * 12));

  if (years === 0) {
    return `${months} ${pluralize(months, 'mo')}`;
  }

  return `${years} ${pluralize(years, 'yr')} ${months} ${pluralize(
    months,
    'mo'
  )}`;
};
