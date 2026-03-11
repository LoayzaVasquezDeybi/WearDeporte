const provinciasPorDepartamento = {
    // Datos de provincias (ejemplo estático basado en tus direcciones)
  Lima: ['Lima', 'Miraflores', 'Magdalena del Mar', 'Independencia'],
  Cusco: ['Cusco'],
  Arequipa: [],  // No hay direcciones para Arequipa en tu lista, pero lo dejamos por si acaso
  Trujillo: ['Trujillo'],
   // No específico, pero relacionado con Trujillo
  Piura: ['Piura']
};
// Datos de direcciones (basados en lo que proporcionaste)
const direcciones = [
  {
    department: "Lima",
    province: "Lima",
    name: "(4102) ALCANFORES",
    address: "Av. Benavides con Alcanfores, Miraflores, Lima, Lima, 150122, PE",
    phone: "611-3333",
    types: "Envío a domicilio, Retiro en Tienda"
  },
  {
    department: "Lima",
    province: "Magdalena del Mar",
    name: "(4123) DK MAGDALENA",
    address: "Jr. Amazonas 635, Magdalena del Mar, Lima, Lima, 150123, PE",
    phone: "611-3333",
    types: "Envío a domicilio, Retiro en Tienda"
  },
  {
    department: "Lima",
    province: "Miraflores",
    name: "(4115) LARCO",
    address: "Av. Larco 469, Miraflores, Lima, Lima, 150122, PE",
    phone: "611-3333",
    types: "Envío a domicilio, Retiro en Tienda"
  },
  {
    department: "La Libertad",
    province: "Trujillo",
    name: "(4110) MALL AVENTURA TRUJILLO",
    address: "Av. América Oeste 750 Urb. El Ingenio, Trujillo, La Libertad, 130101, PE",
    phone: "611-3333",
    types: "Envío a domicilio, Retiro en Tienda"
  },
  {
department: "Lima",
    province: "Independencia",
    name: "(4100) PLAZA LIMA NORTE",
    address: "Av. Alfredo Mendiola 1400, Independencia, Lima, 150112, PE",
    phone: "611-3333",
    types: "Envío a domicilio, Retiro en Tienda"
  },
  {
    department: "Cusco",
    province: "Cusco",
    name: "(4111) REAL PLAZA CUSCO",
    address: "Av. Collasuyo 2964, Cusco, 08003, PE",
    phone: "611-3333",
    types: "Envío a domicilio, Retiro en Tienda"
  },
  {
    department: "Piura",
    province: "Piura",
    name: "(4112) REAL PLAZA PIURA",
    address: "Av. Sánchez Cerro 1450, Piura, 20001, PE",
    phone: "611-3333",
    types: "Envío a domicilio, Retiro en Tienda"
  }
];
function cargarProvincias() {
  const departamentoSelect = document.getElementById('departamento');
  const provinciaSelect = document.getElementById('provincia');
  const departamento = departamentoSelect.value;
  
  provinciaSelect.innerHTML = '<option value="">Selecciona una provincia</option>';
  
  if (departamento && provinciasPorDepartamento[departamento]) {
    provinciasPorDepartamento[departamento].forEach(function(provincia) {
      let option = document.createElement('option');
      option.value = provincia;
      option.text = provincia;
      provinciaSelect.add(option);
    });
  }
}
function buscarLocales() {
  const departamento = document.getElementById('departamento').value;
  const provincia = document.getElementById('provincia').value;
  const resultadosDiv = document.getElementById('resultados');
  
  if (!departamento || !provincia) {
    resultadosDiv.innerHTML = '<p>Por favor, selecciona un departamento y una provincia.</p>';
    return;
  }
  
  const localesFiltrados = direcciones.filter(local => 
    local.department === departamento && local.province === provincia
  );
  
  if (localesFiltrados.length > 0) {
    let html = '<h6>Local(es) encontrados:</h6><div class="list-group">';
    localesFiltrados.forEach(local => {
      html += `
        <div class="card mb-3">
          <div class="card-body">
            <h5>${local.name}</h5>
            <p><strong>Dirección:</strong> ${local.address}</p>
            <p><strong>Tipo de Despacho:</strong> ${local.types}</p>
            <p><strong>Teléfono:</strong> ${local.phone}</p>
          </div>
        </div>
      `;
    });
    html += '</div>';
    resultadosDiv.innerHTML = html;
  } else {
    resultadosDiv.innerHTML = '<p>No se encontraron locales en esta provincia.</p>';
  }
}