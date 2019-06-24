colorPicker.addEventListener("input", actualizarPrimero, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
    p.style.color = event.targe.p;
  });
}