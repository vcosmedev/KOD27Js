// Se necesita saber si un texto cualquiera tiene dentro otro string:
// "Víctor" "or" - sí lo incluye
// "Víctor" "ar" - no lo incluye

function includeString(searchvalue, string) {
    if (string.includes(searchvalue)) {
        console.log(`Sí incluye "${searchvalue}" en ${string}`);
    } else {
        console.log(`No incluye "${searchvalue}" en ${string}`);
    }
}

includeString("or", "Víctor");
includeString("ar", "Víctor");