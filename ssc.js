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
     let English2 = document.getElementById("Eng2").value;
     let math = document.getElementById("Math").value;
     let Bw = document.getElementById("BW").value;
     let Re = document.getElementById("re").value;
     let ICT = document.getElementById("ict").value;
     let Physics = document.getElementById("phy").value;
     let Chemistry = document.getElementById("Chm").value;
     let Higher_Math = document.getElementById("HM").value;
     let Biology  = document.getElementById("Bio").value;

     Bangla = parseInt(Bangla1)+parseInt(Bangla2);
     English = parseInt(English1)+parseInt(English2);

     let Bgrade,Bpoint,Epoint,Egrade,Mpoint,Mgrade,Bwpoint,Bwgrade,Rpoint,Rgrade,Tpoint,Ipoint,Igrade,Ppoint,Pgrade,Cpoint,Cgrade,Hpoint,Hgrade,Bipoint,Bigrade;


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


     if(math>79)
     {
         Mpoint = 5.00;
         Mgrade = "A+";
     }
     else if(math<80 && math>69)
     {
         Mpoint = 4.00;
         Mgrade = "A";
     }
     else if(math<70 && math>59)
     {
         Mpoint = 3.50;
         Mgrade = "A-";
     }
     else if(math<60 && math>49)
     {
         Mpoint = 3.00;
         Mgrade = "B";
     }
     else if (math<50 && math>39)
     {
         Mpoint = 2.00;
         Mgrade = "C";
     }
     else if(math<40 && math>32)
     {
         Mpoint = 1.00;
         Mgrade = "D";
     }
     else
     {
         Mpoint = 0.00;
         Mgrade = "F";
     }


     if(Bw>79)
     {
         Bwpoint = 5.00;
         Bwgrade = "A+";
     }
     else if(Bw<80 && Bw>69)
     {
         Bwpoint = 4.00;
         Bwgrade = "A";
     }
     else if(Bw<70 && Bw>59)
     {
         Bwpoint = 3.50;
         Bwgrade = "A-";
     }
     else if(Bw<60 && Bw>49)
     {
         Bwpoint = 3.00;
         Bwgrade = "B";
     }
     else if (Bw<50 && Bw>39)
     {
         Bwpoint = 2.00;
         Bwgrade = "C";
     }
     else if(Bw<40 && Bw>32)
     {
         Bwpoint = 1.00;
         Bwgrade = "D";
     }
     else
     {
         Bwpoint = 0.00;
         Bwgrade = "F";
     }



     if(Re>79)
     {
         Rpoint = 5.00;
         Rgrade = "A+";
     }
     else if(Re<80 && Re>69)
     {
         Rpoint = 4.00;
         Rgrade = "A";
     }
     else if(Re<70 && Re>59)
     {
         Rpoint = 3.50;
         Rgrade = "A-";
     }
     else if(Re<60 && Re>49)
     {
         Rpoint = 3.00;
         Rgrade = "B";
     }
     else if (Re<50 && Re>39)
     {
         Rpoint = 2.00;
         Rgrade = "C";
     }
     else if(Re<40 && Re>32)
     {
         Rpoint = 1.00;
         Rgrade = "D";
     }
     else
     {
         Rpoint = 0.00;
         Rgrade = "F";
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




     if(Physics>79)
     {
         Ppoint = 5.00;
         Pgrade = "A+";
     }
     else if(Physics<80 && Physics>69)
     {
         Ppoint = 4.00;
         Pgrade = "A";
     }
     else if(Physics<70 && Physics>59)
     {
         Ppoint = 3.50;
         Pgrade = "A-";
     }
     else if(Physics<60 && Physics>49)
     {
         Ppoint = 3.00;
         Pgrade = "B";
     }
     else if (Physics<50 && Physics>39)
     {
         Ppoint = 2.00;
         Pgrade = "C";
     }
     else if(Physics<40 && Physics>32)
     {
         Ppoint = 1.00;
         Pgrade = "D";
     }
     else
     {
         Ppoint = 0.00;
         Pgrade = "F";
     }



     if(Chemistry>79)
     {
         Cpoint = 5.00;
         Cgrade = "A+";
     }
     else if(Chemistry<80 && Chemistry>69)
     {
         Cpoint = 4.00;
         Cgrade = "A";
     }
     else if(Chemistry<70 && Chemistry>59)
     {
         Cpoint = 3.50;
         Cgrade = "A-";
     }
     else if(Chemistry<60 && Chemistry>49)
     {
         Cpoint = 3.00;
         Cgrade = "B";
     }
     else if (Chemistry<50 && Chemistry>39)
     {
         Cpoint = 2.00;
         Cgrade = "C";
     }
     else if(Chemistry<40 && Chemistry>32)
     {
         Cpoint = 1.00;
         Cgrade = "D";
     }
     else
     {
         Cpoint = 0.00;
         Cgrade = "F";
     }



     if(Higher_Math>79)
     {
         Hpoint = 5.00;
         Hgrade = "A+";
     }
     else if(Higher_Math<80 && Higher_Math>69)
     {
         Hpoint = 4.00;
         Hgrade = "A";
     }
     else if(Higher_Math<70 && Higher_Math>59)
     {
         Hpoint = 3.50;
         Hgrade = "A-";
     }
     else if(Higher_Math<60 && Higher_Math>49)
     {
         Hpoint = 3.00;
         Hgrade = "B";
     }
     else if (Higher_Math<50 && Higher_Math>39)
     {
         Hpoint = 2.00;
         Hgrade = "C";
     }
     else if(Higher_Math<40 && Higher_Math>32)
     {
         Hpoint = 1.00;
         Hgrade = "D";
     }
     else
     {
         Hpoint = 0.00;
         Hgrade = "F";
     }



     if(Biology>79)
     {
         Bipoint = 5.00;
         Bigrade = "A+";
     }
     else if(Biology<80 && Biology>69)
     {
         Bipoint = 4.00;
         Bigrade = "A";
     }
     else if(Biology<70 && Biology>59)
     {
         Bipoint = 3.50;
         Bigrade = "A-";
     }
     else if(Biology<60 && Biology>49)
     {
         Bipoint = 3.00;
         Bigrade = "B";
     }
     else if (Biology<50 && Biology>39)
     {
         Bpoint = 2.00;
         Bgrade = "C";
     }
     else if(Biology<40 && Biology>32)
     {
         Bipoint = 1.00;
         Bigrade = "D";
     }
     else
     {
         Bipoint = 0.00;
         Bigrade = "F";
     }


     let Total = parseInt(Bangla)+parseInt(English)+parseInt(math)+parseInt(ICT)+parseInt(Bw)+parseInt(Re)+parseInt(Physics)+parseInt(Chemistry)+
     parseInt(Higher_Math)+parseInt(Biology);

     let totalgpa = parseFloat(Bpoint)+parseFloat(Epoint)+parseFloat(Mpoint)+parseFloat(Ipoint)+parseFloat(Bwpoint)+parseFloat(Rpoint)+
     parseFloat(Ppoint)+parseFloat(Cpoint)+parseFloat(Hpoint)+parseFloat(Bipoint);

     let gpa = parseFloat(parseFloat(totalgpa) - 2.00);

     let avarage_gpa = parseFloat(parseFloat(gpa)/9);
     let Tgrade;

     if(Bgrade== "F"|| Egrade=="F" || Mgrade == "F" || Bwgrade == "F" || Rgrade == "F" || Pgrade == "F" || Cgrade == "F" || Igrade == "F")
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
     document.getElementById("A1").innerHTML = "- - - -";

     
     document.getElementById("sl2").innerHTML = "2";
     document.getElementById("S2").innerHTML = "English";
     document.getElementById("A2").innerHTML = "- - - -";

     
     document.getElementById("sl3").innerHTML = "3";
     document.getElementById("S3").innerHTML = "Genarel Math";
     document.getElementById("A3").innerHTML = "- - - -";

     
     document.getElementById("sl4").innerHTML = "4";
     document.getElementById("S4").innerHTML = "ICT";
     document.getElementById("A4").innerHTML  = "- - - -"


     
     document.getElementById("sl5").innerHTML = "5";
     document.getElementById("S5").innerHTML = "Bangladesh and World Intruduction";
     document.getElementById("A5").innerHTML = "- - - -";


     
     document.getElementById("sl6").innerHTML = "6";
     document.getElementById("S6").innerHTML = "Religious Studies";
     document.getElementById("A6").innerHTML = "- - - -";


     
     document.getElementById("sl7").innerHTML = "7";
     document.getElementById("S7").innerHTML = "Physics";
     document.getElementById("A7").innerHTML = "- - - -";

     
        document.getElementById("sl8").innerHTML = "8";
        document.getElementById("S8").innerHTML = "Chemistry";
        document.getElementById("A8").innerHTML = "- - - -";


     
        document.getElementById("sl9").innerHTML = "9";
        document.getElementById("S9").innerHTML = "Higher math";
        document.getElementById("A9").innerHTML = "- - - -";



     
        document.getElementById("sl10").innerHTML = "10";
        document.getElementById("S10").innerHTML = "Biology";
        document.getElementById("A10").innerHTML = "- - - -"


        document.getElementById("sl11").innerHTML = "Total";
        document.getElementById("S11").innerHTML = "- - - -";




        document.getElementById("BaN").innerHTML = Bangla;
        document.getElementById("EaN").innerHTML = English;
        document.getElementById("MaN").innerHTML = math;
        document.getElementById("BWaN").innerHTML = Bw;
        document.getElementById("RaN").innerHTML = Re;
        document.getElementById("IaN").innerHTML = ICT;
        document.getElementById("PaN").innerHTML = Physics;
        document.getElementById("CaN").innerHTML = Chemistry;
        document.getElementById("HaN").innerHTML = Higher_Math;
        document.getElementById("BiaN").innerHTML = Biology;	



        document.getElementById("BaP").innerHTML = Bpoint.toFixed(2);
        document.getElementById("EaP").innerHTML = Epoint.toFixed(2);
        document.getElementById("MaP").innerHTML = Mpoint.toFixed(2);
        document.getElementById("BWaP").innerHTML = Bwpoint.toFixed(2);
        document.getElementById("RaP").innerHTML = Rpoint.toFixed(2);
        document.getElementById("IaP").innerHTML = Ipoint.toFixed(2);
        document.getElementById("PaP").innerHTML = Ppoint.toFixed(2);
        document.getElementById("CaP").innerHTML = Cpoint.toFixed(2);
        document.getElementById("HaP").innerHTML = Hpoint.toFixed(2);
        document.getElementById("BiaP").innerHTML = Bipoint.toFixed(2);


        document.getElementById("BaG").innerHTML = Bgrade;
        document.getElementById("EaG").innerHTML = Egrade;
        document.getElementById("MaG").innerHTML = Mgrade;
        document.getElementById("BWaG").innerHTML = Bwgrade;
        document.getElementById("RaG").innerHTML = Rgrade;
        document.getElementById("IaG").innerHTML = Igrade;
        document.getElementById("PaG").innerHTML = Pgrade;
        document.getElementById("HaG").innerHTML = Hgrade;
        document.getElementById("BiaG").innerHTML = Bigrade;
        document.getElementById("CaG").innerHTML = Cgrade;

        document.getElementById("TaN").innerHTML = Total;
        document.getElementById("TaP").innerHTML = totalgpa.toFixed(2);
        document.getElementById("TaaP").innerHTML = avarage_gpa.toFixed(2); 
        document.getElementById("TaG").innerHTML = Tgrade;
 }