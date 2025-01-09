const { google } = require('googleapis');
const readline = require('readline-sync');

const oAuth2Client = new google.auth.OAuth2(
    '7678670468-2n685v5rpk6de8pkqs2esbirsgf6bt3o.apps.googleusercontent.com',  // Reemplaza con tu CLIENT_ID
    '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',  // Reemplaza con tu CLIENT_SECRET
    'http://localhost:3000/dashboard'  // Reemplaza con tu REDIRECT_URI
);

// Genera la URL de autorización
const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',  // Necesario para obtener un refresh token
    scope: ['https://www.googleapis.com/auth/gmail.send']  // Permiso para enviar correos
});

console.log('Autoriza esta aplicación visitando este URL:', authUrl);

// Esperar a que el usuario ingrese el código de autorización
const code = readline.question('Introduce el código de autorización aquí: ');

// Intercambiar el código por un access_token y un refresh_token
async function getRefreshToken() {
    const { tokens } = await oAuth2Client.getToken(code);
    console.log('Tokens:', tokens);
    console.log('REFRESH_TOKEN:', tokens.refresh_token);  // Aquí es donde obtienes el REFRESH_TOKEN
}

getRefreshToken().catch(console.error);
