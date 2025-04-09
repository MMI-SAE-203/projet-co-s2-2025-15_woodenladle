export async function POST({ request }) {
    try {
        const { message } = await request.json(); // ✅ .json() ici, pas .text()

        if (!message) {
            return new Response(
                JSON.stringify({ reply: "❌ Aucun message fourni." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await res.json();

        return new Response(
            JSON.stringify({
                reply: data.choices?.[0]?.message?.content || "❌ Pas de réponse reçue"
            }),
            { headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ reply: "❌ Erreur serveur", error: err.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
