const HF_TOKEN = "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"; // ⚠️ Remplace par ton token Hugging Face
const API_URL = "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta";

const chatContainer = document.getElementById("chatContainer");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const statusIndicator = document.getElementById("statusIndicator");

let messages = [
    { role: "system", content: "Tu es un assistant utile et amical." },
];

function addMessageToChat(content, role) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${role} my-2 p-3 font-montserrat rounded-xl ${role === "user" ? "bg-white ml-12 border-2 border-red" : "bg-white border-2 border-green mr-12"
        }`;
    messageElement.textContent = content;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    if (role !== "status") messages.push({ role, content });
}

async function sendMessage(userMessage) {
    userInput.disabled = true;
    sendButton.disabled = true;
    statusIndicator.textContent = "Réponse en cours...";

    const prompt =
        messages.map((m) => `<|${m.role}|>\n${m.content}`).join("\n") +
        "\n<|assistant|>\n";

    const payload = {
        inputs: prompt,
        parameters: {
            max_new_tokens: 300,
            temperature: 0.7,
            top_p: 0.9,
            do_sample: true,
        },
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${HF_TOKEN}`
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            addMessageToChat("Erreur : " + errorText, "assistant");
        } else {
            const data = await response.json();
            const fullText = data?.[0]?.generated_text || "";
            const answer = fullText.split("<|assistant|>\n").pop().trim();
            addMessageToChat(answer, "assistant");
        }
    } catch (err) {
        addMessageToChat("Erreur de réseau ou d’authentification.", "assistant");
        console.error(err);
    } finally {
        statusIndicator.textContent = "";
        userInput.disabled = false;
        sendButton.disabled = false;
    }
}

sendButton.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (!message) return;
    addMessageToChat(message, "user");
    userInput.value = "";
    sendMessage(message);
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendButton.click();
});

window.addEventListener("load", () => {
    addMessageToChat("Bonjour ! Posez votre question à l’IA 👋", "assistant");
});
