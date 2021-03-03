import { AbstractControl } from "@angular/forms";

export class ValidationsGenerics{
  static ValidaCpf(controle: AbstractControl) {
    const cpf = controle.value;

    let soma: number = 0;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp('[0-9]{11}');
    const regex11 = new RegExp('([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}-[0-9]{2})|([0-9]{11})');
    const regex000 = new RegExp("^(?:(?!000\\.?000\\.?000?00).)*$");
		const regex111 = new RegExp("^(?:(?!111\\.?111\\.?111-?11).)*$");
		const regex222 = new RegExp("^(?:(?!222\\.?222\\.?222-?22).)*$")
		const regex333 = new RegExp("^(?:(?!333\\.?333\\.?333-?33).)*$");
		const regex444 = new RegExp("^(?:(?!444\\.?444\\.?444-?44).)*$");
		const regex555 = new RegExp("^(?:(?!555\\.?555\\.?555-?55).)*$");
		const regex666 = new RegExp("^(?:(?!666\\.?666\\.?666-?66).)*$");
		const regex777 = new RegExp("^(?:(?!777\\.?777\\.?777-?77).)*$");
		const regex888 = new RegExp("^(?:(?!888\\.?888\\.?888-?88).)*$");
		const regex999 = new RegExp("^(?:(?!999\\.?999\\.?999-?99).)*$");
    if (
      !regex.test(cpf) ||
      !regex000.test(cpf) ||
      !regex11.test(cpf) ||
      !regex222.test(cpf) ||
      !regex111.test(cpf) ||
      !regex333.test(cpf) ||
      !regex444.test(cpf) ||
      !regex555.test(cpf) ||
      !regex666.test(cpf) ||
      !regex777.test(cpf) ||
      !regex888.test(cpf) ||
      !regex999.test(cpf)
    )
      valido = false;
    else {
      for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(9, 10))) valido = false;

      soma = 0;
      for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(10, 11))) valido = false;
      valido = true;
    }

    if (valido) return null;

    return { cpfInvalido: true };
  }
}
