require('dotenv').config(); // Carga las variables del archivo .env
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

// Carga las credenciales desde las variables de entorno
const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,      // Utiliza CLIENT_ID desde .env
    process.env.CLIENT_SECRET,  // Utiliza CLIENT_SECRET desde .env
    process.env.REDIRECT_URI    // Utiliza REDIRECT_URI desde .env
);

// Establecer las credenciales usando el REFRESH_TOKEN desde .env
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const sendMail = async (to, subject, text) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL,  // Utiliza tu correo de Gmail desde .env
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from: `"Task Tracker" <${process.env.EMAIL}>`,
            to,
            subject,
            text,
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', result);
        return result;
    } catch (error) {
        console.error('Error enviando el correo:', error);
        throw error;
    }
};

module.exports = { sendMail };
