new Promise((resolve, reject) => {
  // Lógica assíncrona
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject("O número é menor que 0.5");
    }
  }, 2000);
});

promise
  .then((result) => {
    console.log("Sucesso:", result);
  })
  .catch((error) => {
    console.log("Falha:", error);
  });

async function fetchData() {
  // Lógica assíncrona
}

async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  // Utilize os dados retornados
}

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    // Utilize os dados retornados
  } catch (error) {
    console.log("Erro:", error);
  }
}

async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/user/${userId}`);
    const user = await response.json();
    const postsResponse = await fetch(
      `https://api.example.com/user/${userId}/posts`
    );
    const posts = await postsResponse.json();
    return { user, posts };
  } catch (error) {
    throw new Error("Falha ao buscar os dados do usuário");
  }
}

fetchUserData(123)
  .then((result) => {
    console.log("Resultado:", result);
  })
  .catch((error) => {
    console.log("Erro:", error);
  });
