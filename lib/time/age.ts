const BIRTH_DATE = new Date(2008, 10, 18);

export function getCurrentAge(): number {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_DATE.getFullYear();
  const monthDiff = today.getMonth() - BIRTH_DATE.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < BIRTH_DATE.getDate())
  ) {
    age--;
  }

  return age;
}
