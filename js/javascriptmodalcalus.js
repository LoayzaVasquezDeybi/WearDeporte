// Datos de las ubicaciones con números de teléfono
  const locationData = {
    4102: { name: "Alcanfores", phone: "01 - 622 - 3333" },
    4123: { name: "DK Magdalena", phone: "01 - 611 - 4000" },
    4115: { name: "Larco", phone: "01 - 620 - 3333" },
    4110: { name: "Mall Aventura Trujillo", phone: "01 - 771 - 3333" },
    4100: { name: "Plaza Lima Norte", phone: "01 - 611 - 3333" },
    4107: { name: "Plaza Vea Higuereta", phone: "01 - 611 - 3333" },
    4101: { name: "Real Plaza Pro", phone: "01 - 611 - 3333" },
    4120: { name: "Real Plaza Puruchuco", phone: "01 - 611 - 3333" },
    4111: { name: "Real Plaza Cusco", phone: "01 - 600 - 3333" },
    4112: { name: "Real Plaza Piura", phone: "01 - 622 - 2340" },
    4117: { name: "Real Plaza Salaverry", phone: "+51 917 623 989" },
  };

  // Función para mostrar el número de teléfono de la tienda seleccionada
  function showLocationPhone(storeId) {
    const store = locationData[storeId];
    
    // Mostrar el nombre de la tienda y el número de teléfono
    document.getElementById("storeName").innerText = store.name;
    document.getElementById("storePhone").innerText = `Teléfono: ${store.phone}`;

    // Mostrar los detalles de la tienda seleccionada
    document.getElementById("locationDetails").style.display = 'block';
  }

  // Función para mostrar el número de teléfono basado en la selección del checklist
  function showLocationPhoneFromSelect() {
    const select = document.getElementById("locationSelect");
    const storeId = select.value;
    
    if (storeId) {
      showLocationPhone(storeId);
    } else {
      document.getElementById("locationDetails").style.display = 'none';
    }
  }


