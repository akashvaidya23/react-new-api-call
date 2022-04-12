export const getUsers = (page = 1) => {
  return fetch(`https://reqres.in/api/users?page=${page}`).then((res) =>
    res.json()
  );
};

// export const getUserwithAsyncAwait = async () => {
//   const res = await fetch("https://reqres.in/api/users?page=1");
//   return await res.json();
// };

export const deleteUser = (UserId) => {
  const ApiConfig = { method: "DELETE" };
  return fetch(`https://reqres.in/api/users/${UserId}`, ApiConfig).then(
    (res) => res.status === 204
  );
};
