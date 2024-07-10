export default async function sendEmail(formData) {
  try {
    console.log(formData);
    const response = await fetch("http://localhost:3000/api/email", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      return response;
    }
  } catch (error) {
    throw error;
  }
}
