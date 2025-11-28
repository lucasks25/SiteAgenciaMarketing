"use server"

export async function subscribeToNewsletter(formData: FormData) {
    const email = formData.get("email")

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Validate email
    if (!email || typeof email !== "string" || !email.includes("@")) {
        return {
            success: false,
            message: "Por favor, insira um e-mail válido.",
        }
    }

    // TODO: Here you would send the email to your database or Google Sheets
    // For now, we'll just log it to the server console
    console.log("New Newsletter Subscriber:", email)

    return {
        success: true,
        message: "Obrigado por se inscrever!",
    }
}
