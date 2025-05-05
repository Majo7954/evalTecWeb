function invertir() {
    const gallery = document.getElementById("gallery");
    const images = Array.from(gallery.querySelectorAll("img"));
    const reversed = images.reverse();
  
    // Limpiar el contenido actual
    gallery.innerHTML = "";
  
    // Crear nuevas filas con imágenes invertidas
    for (let i = 0; i < reversed.length; i += 3) {
      const row = document.createElement("div");
      row.className = "row";
      row.appendChild(reversed[i]);
      row.appendChild(reversed[i + 1]);
      row.appendChild(reversed[i + 2]);
      gallery.appendChild(row);
    }
  }
  