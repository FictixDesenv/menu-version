import FeaturePage from "./FeaturePage";

const slides = [
  { id: 1, title: "Pagamentos integrados", desc: "Aceite múltiplos métodos de pagamento com segurança e praticidade em um só lugar." },
  { id: 2, title: "Pix instantâneo", desc: "Receba pagamentos via Pix em tempo real, sem taxas abusivas." },
  { id: 3, title: "Cartões e boletos", desc: "Suporte completo a cartões de crédito, débito e boleto bancário." },
  { id: 4, title: "Conciliação automática", desc: "Reconciliação financeira automática para simplificar sua gestão." },
];

const PaymentsPage = () => <FeaturePage pageTitle="Pagamentos" slides={slides} />;
export default PaymentsPage;
