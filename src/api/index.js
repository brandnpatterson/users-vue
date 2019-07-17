const usersUrl = "https://reqres.in/api/users?page=1&per_page=6";

export async function getUsers() {
  const rawRes = await fetch(usersUrl);
  const res = await rawRes.json();

  return res.data;
}
