document.addEventListener("DOMContentLoaded", () => {
  
    const modal = document.getElementById("myModal");
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");

    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

   
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
