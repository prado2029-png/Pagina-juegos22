export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            mensaje: "Método no permitido."
        });
    }

    const webhook = process.env.DISCORD_WEBHOOK_URL;

    if (!webhook) {
        return res.status(500).json({
            mensaje: "El servicio de contacto no está configurado."
        });
    }

    const { nombre, correo, mensaje } = req.body || {};

    if (
        typeof nombre !== "string" ||
        typeof correo !== "string" ||
        typeof mensaje !== "string" ||
        !nombre.trim() ||
        !correo.trim() ||
        !mensaje.trim() ||
        nombre.length > 80 ||
        correo.length > 254 ||
        mensaje.length > 2000
    ) {
        return res.status(400).json({
            mensaje: "Revisa los datos del formulario."
        });
    }

    try {
        const respuesta = await fetch(webhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                allowed_mentions: { parse: [] },
                embeds: [{
                    title: "Nuevo mensaje de GameZone",
                    color: 5793266,
                    fields: [
                        {
                            name: "Nombre",
                            value: nombre.trim().slice(0, 80)
                        },
                        {
                            name: "Correo",
                            value: correo.trim().slice(0, 254)
                        },
                        {
                            name: "Mensaje",
                            value: mensaje.trim().slice(0, 2000)
                        }
                    ]
                }]
            })
        });

        if (!respuesta.ok) {
            throw new Error("Discord rechazó el mensaje.");
        }

        return res.status(200).json({
            mensaje: "¡Mensaje enviado correctamente!"
        });
    } catch (error) {
        return res.status(502).json({
            mensaje: "No se pudo enviar el mensaje. Inténtalo más tarde."
        });
    }
}