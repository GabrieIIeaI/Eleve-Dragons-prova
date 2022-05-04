export const submitValidation = (name, email) => {

    const validation = {
        isValid: true,
        name: {
            errorText: ""
        },
        email: {
            errorText: ""
        }
    }

    //Validação do campo nome
    if(!name){
       validation.name.errorText = "Campo não pode ser vazio";
       validation.isValid = false;
    } else if (typeof name !== "undefined") {
        if(!name.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)) {
            validation.name.errorText = "Apenas letras são permitidas";
            validation.isValid = false;
        } else if(name.length < 4){
            validation.name.errorText = "Nome precisa ter mais de 3 letras";
            validation.isValid = false;
        } 
    }

    //Validação do campo email
    if(!email){
        validation.email.errorText = "Campo não pode ser vazio";
        validation.isValid = false;
     } else if (typeof email !== "undefined") {
         if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
             validation.email.errorText = "Email inválido";
             validation.isValid = false;
         }
     }

    return validation;
}