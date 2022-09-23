class Empresa{
	constructor(){
		this.e = new Empleado;
	}

	darEmpleado(){
		return this.e;
	}

	modificarsalario(modificars){
		this.e.salarioo(modificars);
	}

	modificarvacaciones(modificarv){
		this.e.vacacioness(modificarv);
	}

	calcularEdad(anon, mesn, dian, anoa, mesa, diaa){
		this.e.edad(anon, mesn, dian, anoa, mesa, diaa);
	}

	calcularAntiguedad(anoi, mesi, diai, anoac, mesac, diaac){
		this.e.ingreso(anoi, mesi, diai, anoac, mesac, diaac);
	}

	calcularPrestaciones(salar,anti){
		this.e.prestaciones(salar,anti);
	}

	calcularPrima(salar){
		this.e.prima(salar);
	}

	calcularVacaciones(salar,dias){
		this.e.vacaciones(salar,dias);
	}

	saberNombre(name){
		this.e.nombre1(name);
	}

	saberApellido(lastname){
		this.e.apellido1(lastname);
	}

	saberSexo(sex){
		this.e.sexo1(sex);
	}
}

class Empleado{
	constructor(){
		this.nombre;
		this.apellido;
		this.sexo;
		this.fechan = 0;
		this.fechai = 0;
		this.salario = 0;
		this.diasv = 0;
		this.calcularEdad = 0;
		this.calcularAntiguedad = 0;
		this.calcularPrestaciones = 0;
		this.calcularPrima = 0;
		this.calcularVacaciones = 0;
	}

	darNombre(){
		return this.nombre;
	}

	darApellido(){
		return this.apellido;
	}

	darSexo(){
		return this.sexo;
	}

	darFechaN(){
		return this.fechan;
	}

	darFechaI(){
		return this.fechai;
	}

	darSalario(){
		return this.salario;
	}

	darDiasV(){
		return this.diasv;
	}

	darCalcularEdad(){
		return this.calcularEdad;
	}

	darCalcularAntiguedad(){
		return this.calcularAntiguedad;
	}

	darCalcularPrestaciones(){
		return this.calcularPrestaciones;
	}

	darCalcularPrima(){
		return this.calcularPrima;
	}

	darCalcularVacaciones(){
		return this.calcularVacaciones;
	}

	salarioo(modificars){
		this.salario=modificars;
	}

	vacacioness(modificarv){
		this.diasv=modificarv;
	}

	edad(anon, mesn, dian, anoa, mesa, diaa){
		if(anon>anoa || anon==anoa && mesn>mesa || 
		   anon==anoa && mesn==mesa && dian>diaa){
			const err = 'ERROR';
			this.calcularEdad = err;
		}else{
			this.calcularEdad = anoa-anon;
			if(mesa>mesn){
				this.calcularEdad = anoa-anon;
			}else if(mesa<mesn){
				this.calcularEdad = (anoa-anon)-1;
			}else{
				if(diaa<dian){
					this.calcularEdad = (anoa-anon)-1;
				}else{
					this.calcularEdad = anoa-anon;
				}
			}
		}
	}

	ingreso(anoi, mesi, diai, anoac, mesac, diaac){
		if(anoi>anoac || anoi==anoac && mesi>mesac || 
		   anoi==anoac && mesi==mesac && diai>diaac){
			const err = 'ERROR';
			this.calcularAntiguedad = err;
		}else{
			this.calcularAntiguedad = anoac-anoi;
			if(mesac>mesi){
				this.calcularAntiguedad = anoac-anoi;
			}else if(mesac<mesi){
				this.calcularAntiguedad = (anoac-anoi)-1;
			}else{
				if(diaac<diai){
					this.calcularAntiguedad = (anoac-anoi)-1;
				}else{
					this.calcularAntiguedad = anoac-anoi;
				}
			}
		}
	}

	prestaciones(salar,anti){
		this.calcularPrestaciones = (anti*salar)/12;
	}

	prima(salar){
		this.calcularPrima = (salar*180)/360;
	}

	vacaciones(salar,dias){
		this.calcularVacaciones = (salar/30)*dias;
	}

	nombre1(name){
		this.nombre = name;
	}

	apellido1(lastname){
		this.apellido = lastname;
	}

	sexo1(sex){
		this.sexo = sex;
	}
}

let emp = new Empresa;

function mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
      document.getElementById("img1").src = reader.result;
      document.getElementById("img2").src = reader.result;
    }
  }
}

function modificar_salario() {
	let mod = prompt ("ingrese el nuevo valor");
	let m = parseInt(mod);

	emp.modificarsalario(m);

	const sala = emp.darEmpleado().darSalario();
	document.getElementById('sal').value = sala; 
}

function modificar_vacaciones() {
	let dias = prompt ("ingrese dias de vacaciones");
	let d = parseInt(dias);

	emp.modificarvacaciones(d);

	const vaca = emp.darEmpleado().darDiasV();
	document.getElementById('vac').value = vaca; 
}

function calcular_edad(){
	const fechaNacimiento = document.getElementById('fechaNacimiento').value;

	const fechaActual = new Date();
	const anoActual = parseInt(fechaActual.getFullYear());
	const mesActual = parseInt(fechaActual.getMonth()+1);
	const diaActual = parseInt(fechaActual.getDate());

	const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
	const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
	const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

	emp.calcularEdad(anoNacimiento, mesNacimiento, diaNacimiento, anoActual, mesActual, diaActual);

	const ed = emp.darEmpleado().darCalcularEdad();
	const err = 'Años';
	document.getElementById('calcedad').value = ed + ' ' + ' ' + err;
}

function calcular_antiguedad(){
	const fechaIngreso = document.getElementById('fechaIngreso').value;

	const fechaActual = new Date();
	const anoActual = parseInt(fechaActual.getFullYear());
	const mesActual = parseInt(fechaActual.getMonth()+1);
	const diaActual = parseInt(fechaActual.getDate());

	const anoIngreso = parseInt(String(fechaIngreso).substring(0, 4));
	const mesIngreso = parseInt(String(fechaIngreso).substring(5, 7));
	const diaIngreso = parseInt(String(fechaIngreso).substring(8, 10));

	emp.calcularAntiguedad(anoIngreso, mesIngreso, diaIngreso, anoActual, mesActual, diaActual);

	const ant = emp.darEmpleado().darCalcularAntiguedad();
	const err = 'Años';
	document.getElementById('calcantiguedad').value = ant + ' ' + ' ' + err;
}

function calcular_prestaciones(){
	var salario = document.getElementById('sal').value;
	var antigue1 = document.getElementById('calcantiguedad').value;
	const antigue = parseInt(String(antigue1).substring(0, 3));

	emp.calcularPrestaciones(salario, antigue);

	const resp = emp.darEmpleado().darCalcularPrestaciones();
	const err = '$';
	document.getElementById('calcprestaciones').value = err + ' ' +resp;
}

function calcular_prima(){
	/*
	Formula prima:
		prima=(Salario mensual*180)/360
	*/
	var salario1 = document.getElementById('sal').value;
	var nombr   = document.getElementById('nombre').value;
	var apellid = document.getElementById('apellido').value;
	var se   = document.getElementById('sex').value;

	emp.calcularPrima(salario1);
	emp.saberNombre(nombr);
	emp.saberApellido(apellid);
	emp.saberSexo(se);

	const resultado = emp.darEmpleado().darCalcularPrima();
	const s = emp.darEmpleado().darSexo();
	const n = emp.darEmpleado().darNombre();
	const a = emp.darEmpleado().darApellido();


	const err = '$';
	document.getElementById('calcprima').value = err + ' ' +resultado;	

	if(s==1){
		document.getElementById('pri').innerHTML = 'Señor ' + n + ' ' + a + '<br> su Prima tiene un valor de:';

	}else if(s==2){
		document.getElementById('pri').innerHTML = 'Señora ' + n + ' ' + a + '<br> su Prima tiene un valor de:';
	}
}

function calcular_vacaciones(){
	/*
	Formula vacaciones:
		prima=(Salario mensual/30)*dias de vacaciones
	*/
	var salario2 = document.getElementById('sal').value;
	var vacacion = document.getElementById('vac').value;
	var nombr  = document.getElementById('nombre').value;
	var apellid = document.getElementById('apellido').value;
	var se     = document.getElementById('sex').value;

	emp.calcularVacaciones(salario2,vacacion);
	emp.saberNombre(nombr);
	emp.saberApellido(apellid);
	emp.saberSexo(se);

	const resultado1 = emp.darEmpleado().darCalcularVacaciones();
	const s = emp.darEmpleado().darSexo();
	const n = emp.darEmpleado().darNombre();
	const a = emp.darEmpleado().darApellido();

	const err = '$';
	document.getElementById('calcvacaciones').value = err + ' ' +resultado1;

	if(s==1){
		document.getElementById('vaca').innerHTML = 'Señor ' + n + ' ' + a + '<br> sus Vacaciones tiene un valor de:';
	}else if(s==2){
		document.getElementById('vaca').innerHTML = 'Señora ' + n + ' ' + a + '<br> sus Vacaciones tiene un valor de:';
	} 
}