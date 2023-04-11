document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    });

    document.getElementById("open-modal-btn").addEventListener("click", function() {
        document.getElementById("modal").classList.add("open");
    });

    // btn x -> close modal
    document.getElementById("close-modal-btn").addEventListener("click", function() {
        document.getElementById("modal").classList.remove("open");
    });

        // Escape -> close modal
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.getElementById("modal").classList.remove("open")
        }
    });

    // Click out -> close modal
    document.querySelector("#modal .modal__box").addEventListener("click", event => {
        event._isClickWithInModal = true;
    });

    document.getElementById("modal").addEventListener("click", event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove("open");
    });    

});