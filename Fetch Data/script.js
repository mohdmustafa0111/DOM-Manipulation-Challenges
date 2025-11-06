// const userList = document.getElementById("user-list");
// const loader = document.getElementById("loader");

// loader.style.display = "block"; // show loader

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((user) => {
//       const li = document.createElement("li");
//       li.textContent = `${user.name} (${user.email})`;
//       userList.appendChild(li);
//     });
//   })
//   .catch((error) => {
//     console.log("Error fetching data:", error);
//   })
//   .finally(() => {
//     loader.style.display = "none"; // ✅ Hide loader whether success or error
//   });

// 🎯 If interviewer asks for async/await

const userList = document.getElementById("user-list");
const loader = document.getElementById("loader");

async function loadUsers() {
  loader.style.display = "block"; // show loader

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  } finally {
    loader.style.display = "none"; // hide loader always
  }
}

loadUsers();
