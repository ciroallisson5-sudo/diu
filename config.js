/*
  CONFIGURAÇÃO CENTRAL DO SITE
  - Esta chave do Supabase é pública/publishable e pode ficar no front-end.
  - O token do Mercado Pago NÃO fica aqui. Ele fica no Netlify: Environment variables.
*/
window.ADEILDA_CONFIG = {
  STORE_NAME: "Adeilda Variações",
  SUPABASE_URL: "https://kckutvcihnnmbdrdopui.supabase.co",
  SUPABASE_KEY: "sb_publishable_t4FJ0z1ZvxEHzcCy6S5Chw_xeNFr7af",
  ADMIN_PHONE: "558796241243",
  WHATSAPP: "558796241243",
  CHECKOUT_ENDPOINT: "/.netlify/functions/checkout",
  SITE_URL: window.location.origin
};
