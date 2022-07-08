// En base un problema que detectes en la vida real, escribir un párrafo que lo explique.
// Con ello detectar las entidades y los pasos a seguir para resolverlo.

// Luego, escribir dos  códigos.
//  El primero tiene que resolver tu problema utilizando for
// El segundo tiene que resolver tu problema utilizando while

// tienen el code que hicimos en la clase para guiarse.

// nombre del proyecto: ciclos_js

// comprobacion de ingreso por contraseña
// con mas de 3 intentos se sale del ingreso
// con while
const password = 12345;
let i = 1;
while (i < 4) {
  let ingresaPassword = prompt(`Ingresar la contraseña`);
  if (password != ingresaPassword ) {
      console.log(`Error!, Intento N° ${i}`)
    } else {
        console.log(`Pudes ingresar`);
        break;
      }
      if (i == 3) {
          console.log(`Numero de intentos superados`);
          break;
        }
        i++;
      }
      
      // con for
      const passwordFor = 12345;
      let ii ;
      for (ii = 1; ii < 4; ii++ ) {
        let ingresaPasswordFor = prompt(`Ingresar la contraseña`);
        if (passwordFor == ingresaPasswordFor) {
          console.log(`Bienvenido`);
          break;
        } else {
          console.log(`Error, Intento N°${ii}`);
          if (ii == 3) {
            console.log(`Ha superado el número de intentos`);
          }
        }

        // console.log(i);
        
      }