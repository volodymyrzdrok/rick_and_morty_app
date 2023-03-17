export const getUsersIdArr = totalUsers => {
  const countArrsUserId = Math.ceil(totalUsers / 8);
  let arrWithArrsUsersId = Array.from(
    { length: countArrsUserId },
    el => (el = [])
  );

  let indexArr = 0;
  for (let i = 1; i <= totalUsers; i++) {
    arrWithArrsUsersId[indexArr].push(i);
    if (arrWithArrsUsersId[indexArr].length === 8) {
      indexArr += 1;
    }
  }

  return arrWithArrsUsersId;
};
