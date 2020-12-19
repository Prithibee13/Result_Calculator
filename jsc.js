function Student()
{
    let name=document.getElementById("Sname").value;
    let roll = document.getElementById("Roll").value;
    if(name === undefined || roll === undefined)
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
    let Bangla = document.getElementById("bang").value;
    let English = document.getElementById("eng").value;
    let math = document.getElementById("math").value;
    let gs = document.getElementById("gs").value;
    let SS = document.getElementById("ss").value;
    let Re = document.getElementById("re").value;
    let ICT = document.getElementById("ICT").value;
    let Bgrade,Bpoint,Epoint,Egrade,Mpoint,Mgrade,Gpoint,Ggrade,Spoint,Sgrade,Rpoint,Rgrade,Tpoint,Ipoint,Igrade;



    if(Bangla>79)
    {
        Bpoint = 5.00;
        Bgrade = "A+";
    }
    else if(Bangla<80 && Bangla>69)
    {
        Bpoint = 4.00;
        Bgrade = "A";
    }
    else if(Bangla<70 && Bangla>59)
    {
        Bpoint = 3.50;
        Bgrade = "A-";
    }
    else if(Bangla<60 && Bangla>49)
    {
        Bpoint = 3.00;
        Bgrade = "B";
    }
    else if (Bangla<50 && Bangla>39)
    {
        Bpoint = 2.00;
        Bgrade = "C";
    }
    else if(Bangla<40 && Bangla>32)
    {
        Bpoint = 1.00;
        Bgrade = "D";
    }
    else
    {
        Bpoint = 0.00;
        Bgrade = "F"
    }
    if(English>79)
    {
        Epoint = 5.00;
        Egrade = "A+";
    }
    else if(English<80 && English>69)
    {
        Epoint = 4.00;
        Egrade = "A";
    }
    else if(English<70 && English>59)
    {
        Epoint = 3.50;
        Egrade = "A-";
    }
    else if(English<60 && English>49)
    {
        Epoint = 3.00;
        Egrade = "B";
    }
    else if (English<50 && English>39)
    {
        Epoint = 2.00;
        Egrade = "C";
    }
    else if(English<40 && English>32)
    {
        Epoint = 1.00;
        Egrade = "D";
    }
    else
    {
        Epoint = 0.00;
        Egrade = "F"
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
        Mgrade = "F"
    }
    if(gs>79)
    {
        Gpoint = 5.00;
        Ggrade = "A+";
    }
    else if(gs<80 && gs>69)
    {
        Gpoint = 4.00;
        Ggrade = "A";
    }
    else if(gs<70 && gs>59)
    {
        Gpoint = 3.50;
        Ggrade = "A-";
    }
    else if(gs<60 && gs>49)
    {
        Gpoint = 3.00;
        Ggrade = "B";
    }
    else if (gs<50 && gs>39)
    {
        Gpoint = 2.00;
        Ggrade = "C";
    }
    else if(gs<40 && gs>32)
    {
        Gpoint = 1.00;
        Ggrade = "D";
    }
    else
    {
        Gpoint = 0.00;
        Ggrade = "F"
    }
       if(SS>79)
    {
        Spoint = 5.00;
        Sgrade = "A+";
    }
    else if(SS<80 && SS>69)
    {
        Spoint = 4.00;
        Sgrade = "A";
    }
    else if(SS<70 && SS>59)
    {
        Spoint = 3.50;
        Sgrade = "A-";
    }
    else if(SS<60 && SS>49)
    {
        Spoint = 3.00;
        Sgrade = "B";
    }
    else if (SS<50 && SS>39)
    {
        Spoint = 2.00;
        Sgrade = "C";
    }
    else if(SS<40 && SS>32)
    {
        Spoint = 1.00;
        Sgrade = "D";
    }
    else
    {
        Spoint = 0.00;
        Sgrade = "F"
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
    if(ICT>39)
    {
        Ipoint = 5.00;
        Igrade = "A+";
    }
    else if(ICT<40 && ICT>34)
    {
        Ipoint = 4.00;
        Igrade = "A";
    }
    else if(ICT<35 && Re>29)
    {
        Ipoint = 3.50;
        Igrade = "A-";
    }
    else if(ICT<30 && ICT>24)
    {
        Ipoint = 3.00;
        Igrade = "B";
    }
    else if (Re<25 && Re>19)
    {
        Ipoint = 2.00;
        Igrade = "C";
    }
    else if(ICT<19 && ICT>16)
    {
        Ipoint = 1.00;
        Igrade = "D";
    }
    else
    {
        Ipoint = 0.00;
        Igrade = "F"
    }
        let Total = parseInt(Bangla)+parseInt(English)+parseInt(math)+parseInt(gs)+parseInt(SS)+parseInt(Re)+parseInt(ICT);
        let total_gpa = parseFloat(Bpoint)+parseFloat(Epoint)+parseFloat(Mpoint)+parseFloat(Gpoint)+parseFloat(Spoint)+parseFloat(Rpoint)+parseFloat(Ipoint);
        let avarage_gpa = parseFloat(total_gpa)/7;
        let Tgrade;

        if(Bangla<33 || English <33 || math<33 || gs<33 || SS <33 || Re <33 || ICT<16)
        {
            avarage_gpa = 0.00;
            Tgrade = "F";
        }

        else if(Bangla >79 && English>79 && math>79 && gs>79 && SS>79 && Re>79 && ICT>39)
        {
            Tgrade = "A+";
            avarage_gpa = 5.00;
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
     document.getElementById("S3").innerHTML = "Math";


     document.getElementById("sl4").innerHTML = "4";
     document.getElementById("S4").innerHTML = "Science";


     document.getElementById("sl5").innerHTML = "5";
     document.getElementById("S5").innerHTML = "Bangladesh and World Intruduction";

     document.getElementById("sl6").innerHTML = "6";
     document.getElementById("S6").innerHTML = "Religious Studies";

     document.getElementById("sl7").innerHTML = "7";
     document.getElementById("S7").innerHTML = "ICT";

     document.getElementById("sl8").innerHTML = "Total";
     document.getElementById("S8").innerHTML = "- - - -";


        document.getElementById("BaN").innerHTML = Bangla;
        document.getElementById("EaN").innerHTML = English;
        document.getElementById("MaN").innerHTML = math;
        document.getElementById("SaN").innerHTML = gs;
        document.getElementById("BWaN").innerHTML = SS;
        document.getElementById("RaN").innerHTML = Re;
        document.getElementById("IaN").innerHTML = ICT;

        document.getElementById("BaP").innerHTML = Bpoint.toFixed(2);
        document.getElementById("EaP").innerHTML = Epoint.toFixed(2);
        document.getElementById("MaP").innerHTML = Mpoint.toFixed(2);
        document.getElementById("SaP").innerHTML = Gpoint.toFixed(2);
        document.getElementById("BWaP").innerHTML = Spoint.toFixed(2);
        document.getElementById("RaP").innerHTML = Rpoint.toFixed(2);
        document.getElementById("IaP").innerHTML = Ipoint.toFixed(2);

        document.getElementById("BaG").innerHTML = Bgrade;
        document.getElementById("EaG").innerHTML = Egrade;
        document.getElementById("MaG").innerHTML = Mgrade;
        document.getElementById("SaG").innerHTML  = Ggrade;
        document.getElementById("BWaG").innerHTML = Sgrade;
        document.getElementById("RaG").innerHTML = Rgrade;
        document.getElementById("IaG").innerHTML = Igrade;

        document.getElementById("TaN").innerHTML = Total;
        document.getElementById("TaP").innerHTML = parseFloat(total_gpa).toFixed(2);
        document.getElementById("TaaP").innerHTML = parseFloat(avarage_gpa).toFixed(2); 
        document.getElementById("TaG").innerHTML = Tgrade;

        document.getElementById("hid").style.visibility = "visible";
    }