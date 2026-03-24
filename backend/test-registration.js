fetch("http://localhost:3001/api/auth/register/viewer", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "test.viewer@example.com",
    password: "Password123!",
    confirmPassword: "Password123!",
    full_name: "Test Viewer"
  })
})
.then(r => r.json().then(d => ({ status: r.status, data: d })))
.then(console.log)
.catch(console.error);
