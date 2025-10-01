// Reemplaza este link por tu link de pago generado manualmente en Mercado Pago
const LINK_MERCADO_PAGO = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=TU_LINK_DE_PAGO';

document.getElementById('mp-link').href = LINK_MERCADO_PAGO;

document.getElementById('mp-link').addEventListener('click', function() {
  document.getElementById('message').textContent = 'Serás redirigido a Mercado Pago en una nueva pestaña.';
});
