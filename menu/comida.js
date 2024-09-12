let mesaSeleccionada = 1;

const mesas = {
    1: {
        contador1: 0, contador2: 0, contador3: 0,
        contador4: 0, contador5: 0, contador6: 0,
        cantidad1: 0, cantidad2: 0, cantidad3: 0,
        cantidad4: 0, cantidad5: 0, cantidad6: 0,
        totalAmount: 0,
    },
    2: {
        contador1: 0, contador2: 0, contador3: 0,
        contador4: 0, contador5: 0, contador6: 0,
        cantidad1: 0, cantidad2: 0, cantidad3: 0,
        cantidad4: 0, cantidad5: 0, cantidad6: 0,
        totalAmount: 0,
    },
    3: {
        contador1: 0, contador2: 0, contador3: 0,
        contador4: 0, contador5: 0, contador6: 0,
        cantidad1: 0, cantidad2: 0, cantidad3: 0,
        cantidad4: 0, cantidad5: 0, cantidad6: 0,
        totalAmount: 0,
    }
};

const prices = {
    1: 15000, // Hamburguesa
    2: 10000, // Pizza
    3: 5000, // Papas Fritas
    4: 3000, // Coca-Cola
    5: 2500, // Jugo
    6: 2000  // Agua
};

function seleccionarMesa(mesa) {
    mesaSeleccionada = mesa;
    actualizarTodo();
}

function incrementar(type) {
    let id = document.getElementById(type).value;
    id = parseInt(id);
    if (id >= 1 && id <= 6) {
        switch(id) {
            case 1: mesas[mesaSeleccionada].cantidad1++; mesas[mesaSeleccionada].contador1 += prices[id]; actualizar('cantidad1', 'item1-total', mesas[mesaSeleccionada].cantidad1, mesas[mesaSeleccionada].contador1); break;
            case 2: mesas[mesaSeleccionada].cantidad2++; mesas[mesaSeleccionada].contador2 += prices[id]; actualizar('cantidad2', 'item2-total', mesas[mesaSeleccionada].cantidad2, mesas[mesaSeleccionada].contador2); break;
            case 3: mesas[mesaSeleccionada].cantidad3++; mesas[mesaSeleccionada].contador3 += prices[id]; actualizar('cantidad3', 'item3-total', mesas[mesaSeleccionada].cantidad3, mesas[mesaSeleccionada].contador3); break;
            case 4: mesas[mesaSeleccionada].cantidad4++; mesas[mesaSeleccionada].contador4 += prices[id]; actualizar('cantidad4', 'item4-total', mesas[mesaSeleccionada].cantidad4, mesas[mesaSeleccionada].contador4); break;
            case 5: mesas[mesaSeleccionada].cantidad5++; mesas[mesaSeleccionada].contador5 += prices[id]; actualizar('cantidad5', 'item5-total', mesas[mesaSeleccionada].cantidad5, mesas[mesaSeleccionada].contador5); break;
            case 6: mesas[mesaSeleccionada].cantidad6++; mesas[mesaSeleccionada].contador6 += prices[id]; actualizar('cantidad6', 'item6-total', mesas[mesaSeleccionada].cantidad6, mesas[mesaSeleccionada].contador6); break;
        }
        actualizarCarrito();
    }
}

function decrementar(type) {
    let id = document.getElementById(type).value;
    id = parseInt(id);
    if (id >= 1 && id <= 6) {
        switch(id) {
            case 1: if (mesas[mesaSeleccionada].cantidad1 > 0) { mesas[mesaSeleccionada].cantidad1--; mesas[mesaSeleccionada].contador1 -= prices[id]; actualizar('cantidad1', 'item1-total', mesas[mesaSeleccionada].cantidad1, mesas[mesaSeleccionada].contador1); } break;
            case 2: if (mesas[mesaSeleccionada].cantidad2 > 0) { mesas[mesaSeleccionada].cantidad2--; mesas[mesaSeleccionada].contador2 -= prices[id]; actualizar('cantidad2', 'item2-total', mesas[mesaSeleccionada].cantidad2, mesas[mesaSeleccionada].contador2); } break;
            case 3: if (mesas[mesaSeleccionada].cantidad3 > 0) { mesas[mesaSeleccionada].cantidad3--; mesas[mesaSeleccionada].contador3 -= prices[id]; actualizar('cantidad3', 'item3-total', mesas[mesaSeleccionada].cantidad3, mesas[mesaSeleccionada].contador3); } break;
            case 4: if (mesas[mesaSeleccionada].cantidad4 > 0) { mesas[mesaSeleccionada].cantidad4--; mesas[mesaSeleccionada].contador4 -= prices[id]; actualizar('cantidad4', 'item4-total', mesas[mesaSeleccionada].cantidad4, mesas[mesaSeleccionada].contador4); } break;
            case 5: if (mesas[mesaSeleccionada].cantidad5 > 0) { mesas[mesaSeleccionada].cantidad5--; mesas[mesaSeleccionada].contador5 -= prices[id]; actualizar('cantidad5', 'item5-total', mesas[mesaSeleccionada].cantidad5, mesas[mesaSeleccionada].contador5); } break;
            case 6: if (mesas[mesaSeleccionada].cantidad6 > 0) { mesas[mesaSeleccionada].cantidad6--; mesas[mesaSeleccionada].contador6 -= prices[id]; actualizar('cantidad6', 'item6-total', mesas[mesaSeleccionada].cantidad6, mesas[mesaSeleccionada].contador6); } break;
        }
        actualizarCarrito();
    }
}

function actualizar(cantidadId, totalId, cantidad, total) {
    document.getElementById(cantidadId).innerText = cantidad;
    document.getElementById(totalId).innerText = `$${total.toLocaleString()}`;
    mesas[mesaSeleccionada].totalAmount = mesas[mesaSeleccionada].contador1 + mesas[mesaSeleccionada].contador2 + mesas[mesaSeleccionada].contador3 +
                                           mesas[mesaSeleccionada].contador4 + mesas[mesaSeleccionada].contador5 + mesas[mesaSeleccionada].contador6;
    document.getElementById(`total${mesaSeleccionada}`).innerText = mesas[mesaSeleccionada].totalAmount.toLocaleString();
}

function actualizarCarrito() {
    let totalAmount = mesas[mesaSeleccionada].contador1 + mesas[mesaSeleccionada].contador2 + mesas[mesaSeleccionada].contador3 +
                      mesas[mesaSeleccionada].contador4 + mesas[mesaSeleccionada].contador5 + mesas[mesaSeleccionada].contador6;
    let totalItems = mesas[mesaSeleccionada].cantidad1 + mesas[mesaSeleccionada].cantidad2 + mesas[mesaSeleccionada].cantidad3 +
                     mesas[mesaSeleccionada].cantidad4 + mesas[mesaSeleccionada].cantidad5 + mesas[mesaSeleccionada].cantidad6;
    document.getElementById('total-value').innerText = totalAmount.toLocaleString();
}

function actualizarTodo() {
    actualizar('cantidad1', 'item1-total', mesas[mesaSeleccionada].cantidad1, mesas[mesaSeleccionada].contador1);
    actualizar('cantidad2', 'item2-total', mesas[mesaSeleccionada].cantidad2, mesas[mesaSeleccionada].contador2);
    actualizar('cantidad3', 'item3-total', mesas[mesaSeleccionada].cantidad3, mesas[mesaSeleccionada].contador3);
    actualizar('cantidad4', 'item4-total', mesas[mesaSeleccionada].cantidad4, mesas[mesaSeleccionada].contador4);
    actualizar('cantidad5', 'item5-total', mesas[mesaSeleccionada].cantidad5, mesas[mesaSeleccionada].contador5);
    actualizar('cantidad6', 'item6-total', mesas[mesaSeleccionada].cantidad6, mesas[mesaSeleccionada].contador6);
}

function resetearMesa(mesa) {
    mesas[mesa].contador1 = 0; mesas[mesa].contador2 = 0; mesas[mesa].contador3 = 0;
    mesas[mesa].contador4 = 0; mesas[mesa].contador5 = 0; mesas[mesa].contador6 = 0;
    mesas[mesa].cantidad1 = 0; mesas[mesa].cantidad2 = 0; mesas[mesa].cantidad3 = 0;
    mesas[mesa].cantidad4 = 0; mesas[mesa].cantidad5 = 0; mesas[mesa].cantidad6 = 0;
    actualizarTodo();
    actualizarCarrito();
}

seleccionarMesa(1); // Selecciona la mesa 1 por defecto al cargar la página