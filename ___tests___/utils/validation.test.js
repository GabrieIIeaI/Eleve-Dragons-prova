import { submitValidation } from '../../src/utils/validations';

describe("Validação da pasta Utils", () => {

    describe("Validations", () => {

        it("deve retornar isValid true quando o campo nome for Gabriel Leal De São João e email gabrielLeal@gmail.com", () => {
            const Validation =  submitValidation("Gabriel Leal De São João", "gabrielLeal@gmail.com");
            
            expect(Validation.isValid).toBe(true);
        });
        
    });
});