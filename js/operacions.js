document.addEventListener('DOMContentLoaded', (event) => {
    const organico = document.getElementById('organico');
    const valor = document.getElementById('valor'); // Corregir el ID del label
    const res = document.getElementById('res');

    organico.addEventListener('input', () => {
        const ValorActual = organico.value; // Cambiar a una variable local dentro del evento
        valor.textContent = ValorActual;
    });

    res.addEventListener('click', () => {
        const en = document.getElementById('en');
        const sw = document.getElementById('sw');
        const pn = document.getElementById('pn');
        const ep = document.getElementById('ep');
        const ece = document.getElementById('ece');
        const bs = document.getElementById('bs');
        const entrada = parseFloat(document.getElementById('entrada').value); // Convertir a número
        const salida = parseFloat(document.getElementById('salida').value); // Convertir a número
        const ch = parseFloat(document.getElementById('ch').value); // Convertir a número
        const ldc = document.getElementById('ldc');
        const mldc = document.getElementById('mldc');

        const ldc2 = (entrada + salida) * parseFloat(organico.value); // Usar directamente el valor actual del input
        ldc.textContent = ldc2;

        const ldc3 = ldc2 / 1000;
        mldc.textContent = ldc3;

        const ldc4 = 3.2 * ldc3 ** 1.05;
        en.textContent = ldc4;

        const ldc5 = 1.5 * ldc4 ** 0.38;
        sw.textContent = ldc5;

        const ldc6 = ldc4 / ldc5;
        pn.textContent = ldc6;

        const ldc7 = ldc2 / ldc4;
        ep.textContent = ldc7;

        const ldc8 = ch * ldc4;
        ece.textContent = ldc8;

        const ldc9 = ldc8 / ldc2;
        bs.textContent = ldc9;
    });
});
