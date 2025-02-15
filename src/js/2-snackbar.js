import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault();

    const delay = parseInt(event.target.delay.value, 10);
    const state = event.target.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            state === "fulfilled" ? resolve(delay) : reject(delay);
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.success({
                title: "✅ Success",
                message: `Fulfilled promise in ${delay}ms`,
                position: "topRight",
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: "❌ Error",
                message: `Rejected promise in ${delay}ms`,
                position: "topRight",
            });
        });

    event.target.reset();
});
