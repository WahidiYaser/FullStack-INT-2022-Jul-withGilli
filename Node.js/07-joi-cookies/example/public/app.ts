async function handleLogin(ev: any) {
  try {
    ev.preventDefault();
    const password = ev.target.elements.password.value;
    const email = ev.target.elements.email.value;
    console.log(password, email);

    //@ts-ignore
    const { data } = await axios.post("/api/users/login", { password, email });
    console.log(data);
    const { ok } = data;
    if (ok) {
      console.log("suuccesful Login");
      window.location.href = "./home.html";
    }
  } catch (error) {
    console.error(error);
  }
}

async function handleRegister(ev: any) {
  try {
    ev.preventDefault();
    const password = ev.target.elements.password.value;
    const email = ev.target.elements.email.value;
    if(!email || ! password) throw new Error("password and email is required")
    console.log(password, email);

    //@ts-ignore
    const { data } = await axios.post("/api/users/register", {
      password,
      email,
    });
    console.log(data);
    const { register, error } = data;

    // const register = data.register; // register = undifiend
    // const error = data.error // error: ""

    if (error) throw error
    if (register) window.location.href = "./home.html";
  } catch (error) {
    console.error(error);
  }
}

async function getUserFromCookie() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/get-user-by-cookie");
    const { userDB } = data;
    const username = document.querySelector("#username");
    username.innerHTML = `${userDB.email}`;
  } catch (error) {
    console.error(error);
  }
}

async function handleCheckIfUserIsconnected() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/get-user-by-cookie");
    const { userDB } = data;
    if (userDB) window.location.href = "./home.html"
  } catch (error) {
    console.error(error);
  }
}

async function handleLogout() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users/logout");
    const { logout } = data;
    if (logout) window.location.href = "./index.html"
  } catch (error) {
    console.error(error);
  }
}

async function handlegetAllUsers() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/api/users");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function getUserById(event) {
  try {
    event.preventDefault();
    const userId = event.target.elements.userId.value;
    //@ts-ignore
    const { data } = await axios.get(`/api/users/${userId}`);
    console.log(data);
  } catch (error) {}
}

async function handleUpdateUser(event) {
  try {
    const password = event.target.elements.password.value;
    const userId = event.target.elements.userId.value;
    //@ts-ignore
    const { data } = await axios.patch(`/api/users/${userId}`, { password });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
