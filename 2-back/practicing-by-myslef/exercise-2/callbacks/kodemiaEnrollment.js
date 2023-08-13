/* 
 Proceso de inscripción a KODEMIA:
 
 1-· Recibir info | entrevista
 2-· Enviar oferta
 3-· Inscripción
 4-· Prebootcamp

 Objetivo: plasmar en funciones + callbacks dicho proceso

 const enrollment = {
    isInterviewed: false, // true
    hasAnOffer: false,
    isEnrolled: false,
    canTakeClass: false,
};
 
 */

const enrollment = {
    name: 'Víctor Cosme',
    interviewed: false,
    proposed: false,
    enrolled: false,
    admitted: false,
};

const interview = (object, callback) => {
    console.log(`Entrevistando a ${object.name} 🆕`);
    setTimeout(() => {
        let error = null;
        object.interviewed = true;
        error = !object.interviewed
            ? `No se ha logrado entrevistar a ${object.name}.`
            : null;
        // callback(null, `${object.name} ha sido entrevistado 🤓`);
        callback(error, object);
    }, 1000);
};

const propose = (object, callback) => {
    console.log(`Realizando una propuesta a ${object.name} 🆕`);
    setTimeout(() => {
        let error = null;
        object.proposed = true;
        error =
            !object.proposed &&
            `Me temo que no hemos podido hacer una propuesta a ${object.name}.`;
        // callback(null, `${object.name} ha recibido una propuesta 💭`);
        callback(error, object);
    }, 2000);
};

const enroll = (object, callback) => {
    console.log(`Preparando la solicitud de matrícula de ${object.name} 🆕`);
    setTimeout(() => {
        let error = null;
        object.enrolled = true;
        error =
            !object.enrolled &&
            `Me temo que el/la koder ${object.name} no ha podido realizar la matrícula.`;
        // callback(null, `${object.name} ha solicitado matricularse ⏳`);
        callback(error, object);
    }, 3000);
};

const admit = (object, callback) => {
    console.log(
        `Estudiando la solicitud de matrícula recibida del koder ${object.name} para su posterior admisión 👀`
    );
    setTimeout(() => {
        let error = null;
        object.admitted = false;
        error = !object.admitted && `No ha podido ser admitid@ ${object.name}.`;
        // callback(null, `${object.name} ha sido finalmente admitid@ 🎉`);
        callback(error, object);
    }, 4000);
};

interview(enrollment, (error, message) => {
    if (error) {
        console.log('Ha ocurrido un error.', error);
        return;
    }
    console.log(`${enrollment.name} ha sido entrevistado 🤓`);
    console.log(message);

    propose(enrollment, (error, message) => {
        if (error) {
            console.log('Error.', error);
            return;
        }
        console.log(`${enrollment.name} ha recibido una propuesta 💭`);
        console.log(message);

        enroll(enrollment, (error, message) => {
            if (error) {
                console.log('Lo siento, hubo un error.', error);
                return;
            }
            console.log(`${enrollment.name} ha solicitado matricularse ⏳`);
            console.log(message);

            admit(enrollment, (error, message) => {
                if (error) {
                    console.log('Me temo que hubo un error.', error);
                    return;
                }
                console.log(
                    `${enrollment.name} ha sido finalmente admitid@ 🎉`
                );
                console.log(message);
            });
        });
    });
});
