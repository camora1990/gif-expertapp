import Swal from "sweetalert2";

const Alerts = {
  alertError(message) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  },
};

export default Alerts;
