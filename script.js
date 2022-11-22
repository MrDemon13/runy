var a=0;

function runy(){
  if(document.getElementById("1").checked || document.getElementById("2").checked || document.getElementById("3").checked || document.getElementById("4").checked){
      document.getElementById("o0").src="obrazki/pustka.png";
      document.getElementById("o1").src="obrazki/pustka.png";
      document.getElementById("o2").src="obrazki/pustka.png";
      document.getElementById("o3").src="obrazki/pustka.png";

      if(document.getElementById("1").checked) document.getElementById("o0").src="obrazki/Dagaz.png";
      if(document.getElementById("2").checked) document.getElementById("o1").src="obrazki/fehu.png";
      if(document.getElementById("3").checked) document.getElementById("o2").src="obrazki/othala.png";
      if(document.getElementById("4").checked) document.getElementById("o3").src="obrazki/Urus.png";
      }
  else{
    a+=1;

    document.getElementById("o0").src="obrazki/pustka.png";
    document.getElementById("o1").src="obrazki/pustka.png";
    document.getElementById("o2").src="obrazki/pustka.png";
    document.getElementById("o3").src="obrazki/pustka.png";

    if(a==1){
      document.getElementById("o0").src="obrazki/Dagaz.png";
    }
    if(a==2){
      document.getElementById("o1").src="obrazki/fehu.png";
    }
    if(a==3){
      document.getElementById("o2").src="obrazki/othala.png";
    }
    if(a==4){
      document.getElementById("o3").src="obrazki/Urus.png";
      a=0;
    }
  }
  setTimeout("runy()",900)
}

runy();
