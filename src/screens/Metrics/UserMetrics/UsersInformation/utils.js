export const getAge = (birthdate) => {
  const birthdateYear = birthdate.slice(0, 4);
  const birthdateMonth = birthdate.slice(5, 7);
  const birthdateDay = birthdate.slice(8, 10);

  var today = new Date();
  var age = today.getFullYear() - birthdateYear;
  var m = today.getMonth() - birthdateMonth;

  if (m < 0 || (m === 0 && today.getDate() < birthdateDay)) age--;

  return age;
};

export const average = (array) =>
  array.reduce((a, b) => a + b, 0) / array.length || 0;
