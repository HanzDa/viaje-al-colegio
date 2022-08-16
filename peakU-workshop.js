let personaje = 'Smith'

const BOLSO = {
    cuadernos: 5,
    lapices: 3,
    borrador: 1,
    colores: ['azul', 'rojo', 'verde'],
    tiene_desayuno: true
}

function viajeAlColegio() {

    let historia = ''

    historia += `
    El joven ${personaje}, Salio de su casa a las 7am para abordar el bus
    que lo llevara hacia el colegio...\n
    `
    
    historia += `Cuando ${personaje} llegó a la estación, se dirigió
    a la señorita de la tiquetera y le pregunto 
    --¿El bus que va hacia el colegio ya salió? `
    
    const elBusYaPaso = true // Respuesta de la señorita
    if (elBusYaPaso) {
        historia += "A lo que ella respondió que sí.\n"
        
        historia += `${personaje}, evidentemente decepcionado, recordó que aún tenia mucho tiempo,
        así que decidió hacer un poco de ejercicio, por lo que se iría caminando.
        
        Emprendió entonces rumbo al sur por: `
        
        for (let i = 1; i <= 3; i++) {
            historia += `${i}, `
        }
        
        historia += 'Cuadras, para luego girar a la derecha y continuar caminando por: '
        
        let cuadra = 1;
        let noEstaEnElColegio = true;
        while (noEstaEnElColegio) {
        historia += `${cuadra}, `
        if (cuadra == 5) {
            historia += `Cuadras más. Finalmente, luego de 30 minutos de caminata, ${personaje}
            llega a su destino.`

            noEstaEnElColegio = false;
        }
        cuadra++;
    }
    }else {
        historia += "A lo que ella respondió que no"
        
        historia += `${personaje} aborda el bus unos minutos después y llega a su destino.`
    }

    return historia;
}


console.log(viajeAlColegio())
