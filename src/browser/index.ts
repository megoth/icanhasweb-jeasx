/* This file is an example. Delete it at will. */

// @ts-ignore
document.querySelectorAll("[data-clipboard]").forEach((el) => {
  el.addEventListener("click", () => {
    navigator.clipboard.writeText(el.getAttribute("data-clipboard"));
  });
});
