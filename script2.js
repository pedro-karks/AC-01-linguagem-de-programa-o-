function VerificarCredito(){
    Saldo=parseFloat(document.getElementById("Saldo").value);
    Credito = 0;

    if(Saldo <= 1300){
        Credito = Saldo*0.2;
    }
    else if(Saldo > 1300 && Saldo <= 3000){
        Credito = Saldo*0.3;
    }
    else if(Saldo > 1300 && Saldo > 3000 && Saldo <= 8000){
        Credito = Saldo*0.45;
    }
    else if(Saldo > 1300 && Saldo > 3000 && Saldo > 8000 && Saldo <= 10000){
        Credito = Saldo*0.5;
    }
    else{
        Credito= Saldo*0.6;
    }
    if(Saldo < 0){
        alert("Saldo inválido! Por favor digite um número positivo para o saldo ser válidado");
    }
    document.getElementById("resposta").innerHTML=`O valor total do crédito disponível é de R$${Credito.toFixed(2)}`;
}