# Donaciones con Link Fijo de Mercado Pago (sin backend)

Esta solución permite recibir donaciones usando un link de pago fijo de Mercado Pago, sin necesidad de backend ni programación avanzada.

---

## ¿Cómo funciona?

- El usuario hace clic en el botón "Donar ahora".
- Es redirigido a un link de pago de Mercado Pago generado manualmente.
- El pago se realiza en Mercado Pago y tú recibes la donación en tu cuenta.

---


## ¿Cómo crear tu link de pago en Mercado Pago?

1. **Ingresa a tu cuenta de Mercado Pago**  
	Ve a https://www.mercadopago.com.ar/ e inicia sesión.

2. **Accede a la sección de “Cobrar”**  
	En el menú principal, busca la opción “Cobrar” o “Solicitar dinero”.

3. **Selecciona “Crear link de pago”**  
	Busca la opción “Crear link de pago”, “Link de pago” o “Solicitar dinero por link”.

4. **Completa los datos del cobro**  
	- Ingresa el monto que deseas cobrar (puedes dejarlo fijo o permitir que el pagador lo modifique, según la opción que te ofrezca Mercado Pago).
	- Escribe un concepto o motivo (ejemplo: “Donación”, “Aporte solidario”, etc.).
	- Configura otras opciones si lo deseas (por ejemplo, permitir pagos con tarjeta, cuotas, etc.).

5. **Genera y copia el link**  
	- Haz clic en “Crear link” o “Generar link”.
	- Copia el enlace que te proporciona Mercado Pago.

6. **Pega el link en tu web**  
	- Abre el archivo `main.js` de la carpeta `linkmp`.
	- Reemplaza el valor de `LINK_MERCADO_PAGO` por el link que copiaste.

---

## ¿Cómo usar este proyecto?

1. Abre el archivo `main.js`.
2. Reemplaza el valor de `LINK_MERCADO_PAGO` por tu link de pago:

```js
const LINK_MERCADO_PAGO = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=TU_LINK_DE_PAGO';
```

3. Abre `index.html` en tu navegador y prueba el botón.

---

## Personalización

- Puedes editar los textos en `index.html`.
- Modifica los estilos en `styles.css` para adaptarlo a tu imagen.

---

## Limitaciones

- No permite ingresar montos personalizados desde la web.
- No hay confirmación automática ni notificaciones de pago.
- Es la forma más simple y rápida, ideal para campañas puntuales o links en redes sociales.

---

¿Dudas? Consulta la ayuda de Mercado Pago o pregunta por detalles específicos.
