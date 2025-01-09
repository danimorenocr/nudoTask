const { sendMail } = require('./emailService'); // Asegúrate de usar el camino correcto a tu archivo

// Llamada de prueba
sendMail('danimorenocr@gmail.com', 'Asunto de prueba', 'Este es un correo de prueba')
  .then(response => {
    console.log('Correo enviado con éxito', response);
  })
  .catch(error => {
    console.error('Error al enviar el correo', error);
  });
