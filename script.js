function Calcular(){
    Carro=parseFloat(document.getElementById("Carro").value);
    Distância=parseFloat(document.getElementById("Distância").value);
    Horas=parseFloat(document.getElementById("Horas").value);
    Dia=parseFloat(document.getElementById("Dia").value);
    Total = 0;

    if(Carro == 1 && Distância <= 100 && Horas == 1 && Dia <=7){
        Total = (Distância*2.5)*1.20;
    }
    if(Carro == 1 && Distância > 100 && Horas == 1 && Dia <=7){
        Total = ((Distância*2.5)*1.20) + 50;
    }
    if(Carro == 1 && Distância <= 100 && Horas == 2 && Dia <=5){
        Total = (Distância*2.5)*1.15;
    }
    if(Carro == 1 && Distância > 100 && Horas == 2 && Dia <=5){
        Total = ((Distância*2.5)*1.15) + 50;
    }
    if(Carro == 1 && Distância <= 100 && Horas == 3 && Dia == 7){
        Total = (Distância*2.5)*0.9;
    }
    if(Carro == 1 && Distância > 100 && Horas == 3 && Dia == 7){
        Total = ((Distância*2.5)*0.9) + 50;
    }
    if(Carro == 2 && Distância <= 100 && Horas == 1 && Dia <=7){
        Total = (Distância*4.5)*1.20;
    }
    if(Carro == 2 && Distância > 100 && Horas == 1 && Dia <=7){
        Total = ((Distância*4.5)*1.20) + 50;
    }
    if(Carro == 2 && Distância <= 100 && Horas == 2 && Dia <=5){
        Total = (Distância*4.5)*1.15;
    }
    if(Carro == 2 && Distância > 100 && Horas == 2 && Dia <=5){
        Total = ((Distância*4.5)*1.15) + 50;
    }
    if(Carro == 2 && Distância <= 100 && Horas == 3 && Dia == 7){
        Total = (Distância*4.5)*0.9;
    }
    if(Carro == 2 && Distância > 100 && Horas == 3 && Dia == 7){
        Total = ((Distância*4.5)*0.9) + 50;
    }
    if(Carro == 3 && Distância <= 100 && Horas == 1 && Dia <=7){
        Total = (Distância*7.8)*1.20;
    }
    if(Carro == 3 && Distância > 100 && Horas == 1 && Dia <=7){
        Total = ((Distância*7.8)*1.20) + 50;
    }
    if(Carro == 3 && Distância <= 100 && Horas == 2 && Dia <=5){
        Total = (Distância*7.8)*1.15;
    }
    if(Carro == 3 && Distância > 100 && Horas == 2 && Dia <=5){
        Total = ((Distância*7.8)*1.15) + 50;
    }
    if(Carro == 3 && Distância <= 100 && Horas == 3 && Dia == 7){
        Total = (Distância*7.8)*0.9;
    }
    if(Carro == 3 && Distância > 100 && Horas == 3 && Dia == 7){
        Total = ((Distância*7.8)*0.9) + 50;
    }
    if(Horas == 3 && Dia <=6){
        alert("A tarifa de baixíssima demanda é somente no dia 7 (Domingo)");
    }
    if(Carro <=0 || Carro > 3 || Distância <=0 || Horas <=0 || Horas > 3 || Dia <=0 || Dia > 7){
        alert("Valores inválidos! Por favor insira um número de acordo com as informações pedidas abaixo.");
    }
    document.getElementById("resultado").innerHTML=`O valor total da viagem foi de R$${Total.toFixed(2)}`;
}