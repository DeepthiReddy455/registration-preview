function preview(){
    document.getElementById("mypreview").innerHTML="PREVIEW DETAILS";   
    document.getElementById('mydate').innerHTML = Date(); 
    let x=document.getElementById("fname").value;
    console.log(typeof(x));
    let y=document.getElementById("lname").value;
    console.log(typeof(y));
    let z=x+y;
    document.getElementById("mydetails").innerHTML=z;
    let mail=document.getElementById("email").value;
    console.log(typeof(mail));
    document.getElementById("mymail").innerHTML=mail;
    let pasd=document.getElementById("psw").value;
    document.getElementById("mypsw").innerHTML=pasd;
    let d=document.getElementById("dob").value;
    document.getElementById("mydob").innerHTML=d;
    let gen= document.getElementsByName('Gender');
			
			for(i = 0; i < gen.length; i++) {
				if(gen[i].checked)
				document.getElementById("result").innerHTML
						= gen[i].value;
			}
    let fa=document.getElementById("father").value;
    document.getElementById("myfather").innerHTML=fa;
    let m=document.getElementById("mother").value;
    document.getElementById("mymother").innerHTML=m;
    let addr=document.getElementById("address").value;
    document.getElementById("myaddress").innerHTML=addr;
    let state= document.getElementsByName('OriginState');
			
			for(i = 0; i < state.length; i++) {
				if(state[i].selected)
				document.getElementById("mystate").innerHTML
						= state[i].value;
			}
    let pcard=document.getElementById("PAN").value;
    document.getElementById("myPAN").innerHTML=pcard;
    let adaar=document.getElementById("adhaar").value;
    document.getElementById("myadhaar").innerHTML=adaar;
    let pincode=document.getElementById("pin").value;
    document.getElementById("mypin").innerHTML=pincode;
    
    let high= document.getElementsByName('LoEQ');
			
			for(i = 0; i < high.length; i++) {
				if(high[i].selected)
				document.getElementById("myhigh").innerHTML
						= high[i].value;
			}
    let zip=document.getElementById("pin").value;
    document.getElementById("mypin").innerHTML=zip;
    //missing
    let ms=document.getElementById("sname").value;
    document.getElementById("mysname").innerHTML=ms;
    //missing
    let mobnum=document.getElementById("MobileNum").value;
    document.getElementById("myMobileNum").innerHTML=mobnum;
    //missing
    let cllg=document.getElementById("cname").value; 
    document.getElementById("mycname").innerHTML=cllg;
    }










