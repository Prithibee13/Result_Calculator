function Student()
{
    let name=document.getElementById("Sname").value;
    let roll = document.getElementById("Roll").value;
    if(name==undefined || roll== undefined)
    {
        alert("Please Fill up them");
    }
    document.getElementById("section").innerHTML = "Your result Section";
    document.getElementById("nae").innerHTML = "Name : " + name;
      document.getElementById("rol").innerHTML = "ID : " + roll.toString();
}
function reset()
{
    document.getElementById("Sname").value = null;
    document.getElementById("Roll").value = null;
    document.getElementById("nae").innerHTML = null;
      document.getElementById("rol").innerHTML = null;		

 }

 function total()
 {
     let Bangla1 = document.getElementById("Bang1").value;
     let Bangla2 = document.getElementById("Bang2").value;
     let English1 = document.getElementById("Eng1").value;
     let English2 = document.getElementById("Eng1").value;
     let ICT = document.getElementById("ict").value;
     let Physics1 = document.getElementById("ph1").value;
     let Physics2 = document.getElementById("ph2").value;
     let Chemistry1 = document.getElementById("ch1").value;
     let Chemistry2 = document.getElementById("ch2").value;
     let HM1 = document.getElementById("HM1").value;
     let HM2 = document.getElementById("HM2").value;
     let Bio1 = document.getElementById("Bio1").value;
     let Bio2 = document.getElementById("Bio2").value;

     let Bgrade,Bpoint,Epoint,Egrade,Ipoint,Igrade,Ppoint,Pgrade,Cpoint,Cgrade,Hpoint,Hgrade,Bipoint,Bigrade;


     let Bangla = parseInt(Bangla1)+parseInt(Bangla2);
     let English = parseInt(English1)+parseInt(English2);
     let Physics = parseInt(Physics1)+parseInt(Physics2);
     let Chemistry = parseInt(Chemistry1)+parseInt(Chemistry2);
     let Higher_Math = parseInt(HM1)+parseInt(HM2);
     let Biology = parseInt(Bio1)+parseInt(Bio2);


     if(Bangla>159)
     {
         Bpoint = 5.00;
         Bgrade = "A+";
     }
     else if(Bangla<160 && Bangla>139)
     {
         Bpoint = 4.00;
         Bgrade = "A";
     }
     else if(Bangla<140 && Bangla>119)	
     {
         Bpoint = 3.50;
         Bgrade = "A-";
     }
     else if(Bangla<120 && Bangla>99)
     {
         Bpoint = 3.00;
         Bgrade = "B";
     }
     else if(Bangla<100 && Bangla>79)
     {
         Bpoint = 2.00;
         Bgrade = "C";
     }
     else if(Bangla<80 && Bangla>66)
     {
         Bpoint = 1.00;
         Bgrade = "D";
     }
     else
     {
         Bpoint = 0.00;
         Bgrade = "F";
     }


     if(English>159)
     {
         Epoint = 5.00;
         Egrade = "A+";
     }
     else if(English<160 && English>139)
     {
         Epoint = 4.00;
         Egrade = "A";
     }
     else if(English<140 && English>119)	
     {
         Epoint = 3.50;
         Egrade = "A-";
     }
     else if(English<120 && English>99)
     {
         Epoint = 3.00;
         Egrade = "B";
     }
     else if(English<100 && English>79)
     {
         Epoint = 2.00;
         Egrade = "C";
     }
     else if(English<80 && English>66)
     {
         Epoint = 1.00;
         Egrade = "D";
     }
     else
     {
         Epoint = 0.00;
         Egrade = "F";
     }


     if(ICT>79)
     {
         Ipoint = 5.00;
         Igrade = "A+";
     }
     else if(ICT<80 && ICT>69)
     {
         Ipoint = 4.00;
         Igrade = "A";
     }
     else if(ICT<70 && ICT>59)
     {
         Ipoint = 3.50;
         Igrade = "A-";
     }
     else if(ICT<60 && ICT>49)
     {
         Ipoint = 3.00;
         Igrade = "B";
     }
     else if (ICT<50 && ICT>39)
     {
         Ipoint = 2.00;
         Igrade = "C";
     }
     else if(ICT<40 && ICT>32)
     {
         Ipoint = 1.00;
         Igrade = "D";
     }
     else
     {
         Ipoint = 0.00;
         Igrade = "F";
     }


     if(Physics>159)
     {
         Ppoint = 5.00;
         Pgrade = "A+";
     }
     else if(Physics<160 && Physics>139)
     {
         Ppoint = 4.00;
         Pgrade = "A";
     }
     else if(Physics<140 && Physics>119)	
     {
         Ppoint = 3.50;
         Pgrade = "A-";
     }
     else if(Physics<120 && Physics>99)
     {
         Ppoint = 3.00;
         Pgrade = "B";
     }
     else if(Physics<100 && Physics>79)
     {
         Ppoint = 2.00;
         Pgrade = "C";
     }
     else if(Physics<80 && Physics>66)
     {
         Ppoint = 1.00;
         Pgrade = "D";
     }
     else
     {
         Ppoint = 0.00;
         Pgrade = "F";
     }



     if(Chemistry>159)
     {
         Cpoint = 5.00;
         Cgrade = "A+";
     }
     else if(Chemistry<160 && Chemistry>139)
     {
         Cpoint = 4.00;
         Cgrade = "A";
     }
     else if(Chemistry<140 && Chemistry>119)	
     {
         Cpoint = 3.50;
         Cgrade = "A-";
     }
     else if(Chemistry<120 && Chemistry>99)
     {
         Cpoint = 3.00;
         Cgrade = "B";
     }
     else if(Chemistry<100 && Chemistry>79)
     {
         Cpoint = 2.00;
         Cgrade = "C";
     }
     else if(Chemistry<80 && Chemistry>66)
     {
         Cpoint = 1.00;
         Cgrade = "D";
     }
     else
     {
         Cpoint = 0.00;
         Cgrade = "F";
     }


     if(Higher_Math>159)
     {
         Hpoint = 5.00;
         Hgrade = "A+";
     }
     else if(Higher_Math<160 && Higher_Math>139)
     {
         Hpoint = 4.00;
         Hgrade = "A";
     }
     else if(Higher_Math<140 && Higher_Math>119)	
     {
         Hpoint = 3.50;
         Hgrade = "A-";
     }
     else if(Higher_Math<120 && Higher_Math>99)
     {
         Hpoint = 3.00;
         Hgrade = "B";
     }
     else if(Higher_Math<100 && Higher_Math>79)
     {
         Hpoint = 2.00;
         Hgrade = "C";
     }
     else if(Higher_Math<80 && Higher_Math>66)
     {
         Hpoint = 1.00;
         Hgrade = "D";
     }
     else
     {
         Hpoint = 0.00;
         Hgrade = "F";
     }




     if(Biology>159)
     {
         Bipoint = 5.00;
         Bigrade = "A+";
     }
     else if(Biology<160 && Biology>139)
     {
         Bipoint = 4.00;
         Bigrade = "A";
     }
     else if(Biology<140 && Biology>119)	
     {
         Hpoint = 3.50;
         Hgrade = "A-";
     }
     else if(Biology<120 && Biology>99)
     {
         Bpoint = 3.00;
         Bgrade = "B";
     }
     else if(Biology<100 && Biology>79)
     {
         Bipoint = 2.00;
         Bigrade = "C";
     }
     else if(Biology<80 && Biology>66)
     {
         Bipoint = 1.00;
         Bigrade = "D";
     }
     else
     {
         Bipoint = 0.00;
         Bigrade = "F";
     }



     let Total = parseInt(Bangla)+parseInt(English)+parseInt(ICT)+parseInt(Physics)+parseInt(Chemistry)+parseInt(Higher_Math)+parseInt(Biology);


     let totalgpa = parseFloat(Bpoint)+parseFloat(Epoint)+parseFloat(Ipoint)+parseFloat(Ppoint)+parseFloat(Cpoint)+parseFloat(Hpoint)+
     parseFloat(Bipoint);

     let cgpa = parseFloat(parseFloat(totalgpa)-2.00);
     let avarage_gpa = parseFloat(parseFloat(cgpa)/6);
     let Tgrade;

     if(Bgrade== "F" || Egrade=="F" || Pgrade == "F" || Cgrade == "F" || Igrade == "F")
      {
         avarage_gpa = 0.00;
         Tgrade = "F";
     }
     else if(avarage_gpa>4.99)
     {
         avarage_gpa = 5.00;
         Tgrade = "A+"
     }
     else if (avarage_gpa>3.99 && avarage_gpa<5.00)
     {
         Tgrade = "A";
     }
     else if(avarage_gpa>3.49 && avarage_gpa<4.00)
     {
         Tgrade = "A-";
     }
     else if(avarage_gpa>2.99 && avarage_gpa<3.50)
     {
         Tgrade = "B";
     }
     else if(avarage_gpa>1.99 && avarage_gpa<3.00)
     {
         Tgrade = "C";
     }
     else if (avarage_gpa>=1.00 && avarage_gpa<2.00)
     {
         Tgrade = "D";
     }


     document.getElementById("H1").innerHTML = "Sl No.";
     document.getElementById("H2").innerHTML = "Subjects";
     document.getElementById("H3").innerHTML = "Number";
     document.getElementById("H4").innerHTML = "Points";
     document.getElementById("H5").innerHTML = "Grades";
     document.getElementById("H6").innerHTML =  "Avarage Point";


     document.getElementById("sl1").innerHTML = "1";
     document.getElementById("S1").innerHTML = "Bangla";

     
     document.getElementById("sl2").innerHTML = "2";
     document.getElementById("S2").innerHTML = "English";

     document.getElementById("sl3").innerHTML = "3";
     document.getElementById("S3").innerHTML = "ICT";


     document.getElementById("sl4").innerHTML = "4";
     document.getElementById("S4").innerHTML = "Physics";


     document.getElementById("sl5").innerHTML = "5";
     document.getElementById("S5").innerHTML = "Chemistry";

     document.getElementById("sl6").innerHTML = "6";
     document.getElementById("S6").innerHTML = "Higher Math";

     document.getElementById("sl7").innerHTML = "7";
     document.getElementById("S7").innerHTML = "Biology";

     document.getElementById("sl8").innerHTML = "Total";
     document.getElementById("S8").innerHTML = "- - - -";

     document.getElementById("BaN").innerHTML = Bangla;
     document.getElementById("EaN").innerHTML = English;
     document.getElementById("IaN").innerHTML = ICT;
     document.getElementById("PaN").innerHTML = Physics;
     document.getElementById("CaN").innerHTML = Chemistry;
     document.getElementById("HaN").innerHTML = Higher_Math;
     document.getElementById("BiaN").innerHTML = Biology;		



     document.getElementById("BaP").innerHTML = Bpoint.toFixed(2);
     document.getElementById("EaP").innerHTML = Epoint.toFixed(2);
     document.getElementById("IaP").innerHTML = Ipoint.toFixed(2);
     document.getElementById("PaP").innerHTML = Ppoint.toFixed(2);
     document.getElementById("CaP").innerHTML = Cpoint.toFixed(2);
     document.getElementById("HaP").innerHTML = Hpoint.toFixed(2);
     document.getElementById("BiaP").innerHTML = Bipoint.toFixed(2);


     document.getElementById("BaG").innerHTML = Bgrade;
     document.getElementById("EaG").innerHTML = Egrade;
     document.getElementById("IaG").innerHTML = Igrade;
     document.getElementById("PaG").innerHTML = Pgrade;
     document.getElementById("CaG").innerHTML = Cgrade;
     document.getElementById("HaG").innerHTML = Hgrade;
     document.getElementById("BiaG").innerHTML = Bigrade;

     document.getElementById("TaN").innerHTML = Total;
     document.getElementById("TaP").innerHTML = totalgpa.toFixed(2);
     document.getElementById("TaaP").innerHTML = avarage_gpa.toFixed(2); 
     document.getElementById("TaG").innerHTML = Tgrade;

     document.getElementById("hid").style.visibility = "visible";
}