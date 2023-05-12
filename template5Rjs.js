
var userurl;
function addworkexperience(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3)
    
    let weOb=document.getElementById("we");
    let weaddbuttonOb=document.getElementById("addbtn");
    weOb.insertBefore(newNode,weaddbuttonOb);
    let  weField=document.getElementsByClassName("weField");
    let str=''
    for(let e of weField){
        str=str+ ` <li> ${e.value} </li>`
    }
    let weT=document.getElementById("weT");
    weT.innerHTML=str;
}


function addAcadmic(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3)
    
    let weOb=document.getElementById("aq");
    let weaddbuttonOb=document.getElementById("addbtn2");
    weOb.insertBefore(newNode,weaddbuttonOb);
}
function CVgenerator(){
  document.getElementById("cvggnbtn").style.display="block";
    //first name
   
    let Firstname=document.getElementById("First-Name-input").value;
    let FirstnameT=document.getElementById("FirstnameT");
    FirstnameT.innerHTML=Firstname;
 //Last name
    let Lastname=document.getElementById("Second-Name-input").value;
    let LastnameT=document.getElementById("LastnameT");
   LastnameT.innerHTML=Lastname;
 
  //Profession
  let ProfessionT=document.getElementById("ProfessionT");
  let Profession=document.getElementById("Profession-input").value;
  ProfessionT.innerHTML=Profession; 
  
   let  City=document.getElementById("City-input").value;
//    let CityT=document.getElementById("CityT");

 


  let    Country=document.getElementById("Country-input").value;
//   let CountryT=document.getElementById("CountryT");
  



     let PinCode2=document.getElementById("Pincode-input").value;
     
//   let pincodeT=document.getElementById("pincodeT");


  pincodeT.innerHTML=addres;
let address_Section=document.getElementById("addressT");
if(City==""&& Country==""&& PinCode2==""){
    address_Section.innerHTML=City;
    pincodeT.innerHTML=City;
}

else if(City!=""&&Country==""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+PinCode2;
    pincodeT.innerHTML=addres;
}
//for Country
else if(City==""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country;
    pincodeT.innerHTML=addres;
}
else if(City==""&&Country!=""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
//for Pincode
else if(City==""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=PinCode2;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+PinCode2;
    pincodeT.innerHTML=addres;
}
else if(City==""&&Country!=""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
else{
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
    let PhoneT=document.getElementById("PhoneT");
let PhoneIN=document.getElementById("Phone-input").value;
let PhoneNumberT=document.getElementById("PhoneNumberT");
    
let EmailIN=document.getElementById("Email-input").value;
let EmailidT=document.getElementById("EmailidT");
let EmailT=document.getElementById("EmailT");
EmailT.innerHTML=EmailIN;
if(PhoneIN!=""){
    PhoneT.innerHTML="<b>Phone</b>";
    PhoneNumberT.innerHTML=PhoneIN;
    
        }
        else{
            PhoneT.innerHTML=PhoneIN;
    PhoneNumberT.innerHTML=PhoneIN;
        }

        if(EmailIN!=""){
            EmailT.innerHTML="<b>Email</b>";
            EmailidT.innerHTML=EmailIN;
            
                }
                else{
                    EmailT.innerHTML=EmailIN;
            EmailidT.innerHTML=EmailIN;
                }
                if(City==""&&EmailIN==""&&PhoneIN==""&&Country==""&&PinCode2==""){
                    let contactT=document.getElementById("contactT");
                    contactT.style.display="none";

                }
                let Jobtitleinput=document.getElementById("Jobtitle-input").value;
                let JobtitleT=document.getElementById("JobtitleT");
                JobtitleT.innerHTML=Jobtitleinput;
                let Employerinput=document.getElementById("Employer-input").value;

                let CityinputWorkexperience=document.getElementById("City-input-Workexperience").value;
                let CountryinputWorkexperience=document.getElementById("Country-input-Workexperience").value;
                let WorkExaddress=document.getElementById("Work-Ex-address");
                if(Employerinput=="")
                {
                    WorkExaddress.innerHTML="";
                }
                else if(Employerinput!=""){
                    WorkExaddress.innerHTML=Employerinput;
                }
                else if(Employerinput!=""&&CityinputWorkexperience!=""&&CountryinputWorkexperience=="")
                {
                    WorkExaddress.innerHTML=Employerinput+","+CityinputWorkexperience;
                }
                else if(Employerinput!=""&&CityinputWorkexperience==""&&CountryinputWorkexperience!=""){
                    WorkExaddress.innerHTML=Employerinput+","+CountryinputWorkexperience; 
                }
                WorkExaddress.innerHTML=Employerinput+","+CityinputWorkexperience+","+CountryinputWorkexperience;
                let EndDateWorkExinput=document.getElementById("EndDate-WorkEx-input").value
                let StartDateWorkExinput=document.getElementById("StartDate-WorkEx-input").value
                let WorkExdateT=document.getElementById("Work-Ex-date")
                WorkExdateT.innerHTML=StartDateWorkExinput+"<br>"+EndDateWorkExinput;
             

          
let SchoolNameinput=document.getElementById("School-Name-input").value;
let SchoolLocationinput=document.getElementById("School-Location-input").value;
let Degreeinput=document.getElementById("Degree-input").value;
let FieldofStudy=document.getElementById("Field-of-Study").value
let GraduationStartDate=document.getElementById("Graduation-Start-Date").value;
let GraduationEndDate=document.getElementById("Graduation-End-Date").value;

let SchoolExdate=document.getElementById("School-Ex-date");
let DegreeT=document.getElementById("DegreeT");
let SchoolNameAddrres=document.getElementById("School-Name-Addrres");
SchoolNameAddrres.innerHTML=SchoolNameinput+","+SchoolLocationinput;
DegreeT.innerHTML=Degreeinput+":"+FieldofStudy;
SchoolExdate.innerHTML=GraduationStartDate+"<br>"+GraduationEndDate;
    let objectiveT=document.getElementById("objectiveT");
    let ObjectiveField=document.getElementById("ObjectiveField").value;
    objectiveT.innerHTML=ObjectiveField ;



    let eqField =document.getElementsByClassName("eqField ");
    let str2=''
    for(let e of eqField ){
        str2=str2+ ` <li> ${e.value} </li>`
    }
    let AcadmicT=document.getElementById("AcadmicT");
    AcadmicT.innerHTML=str;
}

window.onload = function () {
    document.getElementById("cvdownloadbtn")
    .addEventListener("click", () => {
            const invoice = this.document.getElementById("cv-template");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: -1,
              filename:'myfile.pdf',
                image: { type: 'pdf', quality: 1},
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set({
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
              });
            html2pdf().from(invoice).save();
        })
}
var files=[];
var reader=new FileReader();
var userimg=document.getElementById("photo");

var upload=document.getElementById("uimg");
var selectbtn=document.getElementById("previewText");
var input=document.createElement("input");
var changeimg=document.getElementById("changeicon");
var iname;
var imgname;
var extention;
var fname;
var pdfphoto=document.getElementById("photo2")
input.type='file'
function GetFileExt(file)
{
var temp=file.name.split('.');
var ext=temp.slice((temp.length-1),(temp.length));
return '.'+ext[0];
}

function GetFileName(file)
{
  var temp=file.name.split('.');
   fname=temp.slice(0,-1).join('.');
  return fname;
}
input.onchange=e=>{
  files=e.target.files;
  pdfphoto.setAttribute("src",reader.result)
   
 
  extention=GetFileExt(files[0]);
  iname=GetFileName(files[0]);
  console.log(iname);
  console.log(extention);
  reader.readAsDataURL(files[0]);
  selectbtn.style.display="none";
 
}

reader.onload=function(){
userimg.src=reader.result;
pdfphoto.setAttribute("src",userimg.src)
localStorage.setItem("pdfimage",userimg.src)
userimg.style.display="block";

 
}
function change()
{
  input.click();
  
}



selectbtn.onclick=function(){
  input.click();

}
 async function uploadprocess()
{


  var imagetoupload=files[0];
  imgname=iname+extention;
 
   const metaData={
   contentType:imagetoupload.type
  
  }
  const storage=firebase.storage();
 
  const storageref=storage.ref("Images/"+imgname);

  const uploadTask= storageref.put(imagetoupload,metaData);

  uploadTask.on("state-change",(snapshot)=>{
    var progress=(snapshot.byteTransferred/snapshot.totalBytes)*100;
    console.log(progress);
  },
  (error)=>{
    alert("Image not uploaded");
  },
  ()=>{
    uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl)=>{
      
      const database = firebase.database();
      var user = firebase.auth().currentUser;
      database.ref('users/'+user.uid+'/template5'+'/Personal-data').child('ImagesLinks').set(downloadUrl)
      userurl=downloadUrl
      console.log(userurl);
    })
  })
}


 

function geturlfromdatabase(URL)
{
  const realdb = firebase.database();
   const dbref = realdb.ref();
   const user = firebase.auth().currentUser;
   if (!user) {
     console.log("User is not signed in");
     return;
   }
  
   const userId = user.uid;
   const imageUrlRef = firebase.database().ref(`users/${userId}/template5/Personal-data/ImagesLinks`);
   
   imageUrlRef.once('value').then((snapshot) => {
     const imageUrl = snapshot.val();
     console.log(imageUrl);

     if (snapshot.exists()&&imageUrl) {
       userimg.src = imageUrl;
       var img= userimg.src = imageUrl;
       pdfphoto.setAttribute("src",localStorage.getItem("pdfimage"))




       userimg.style.display = "block";
       selectbtn.style.display = "none";

     }
     else{
      console.log("user not uploaded image");
     }
   }).catch((error) => {
     console.error(error);
   });
}

changeimg.addEventListener('click',change)


// function fainalize()
// {
//     document.getElementById("formid").style.display="none";
   
// }

// //photo change


// const file=document.querySelector('#uploadBtn');




// file.addEventListener('change',function(){

// const choosedFile=this.files[0];
// if(choosedFile){

//     const reader =new FileReader();
//     reader.addEventListener('load',function(){

//         img.setAttribute('src',reader.result)
//     });
//     reader.readAsDataURL(choosedFile);
// }

// });
let SchoolNameinput=document.getElementById("School-Name-input");
let SchoolLocationinput=document.getElementById("School-Location-input");
let Degreeinput=document.getElementById("Degree-input");
let FieldofStudy=document.getElementById("Field-of-Study")
 let GraduationStartDate=document.getElementById("Graduation-Start-Date");
let GraduationEndDate=document.getElementById("Graduation-End-Date");
let Educationtextarea=document.getElementById("Education-textarea");
let EducationtextareaT=document.getElementById("Education-textareaT");
 let SchoolExdate=document.getElementById("School-Ex-date");
let DegreeT=document.getElementById("DegreeT");
let SchoolNameAddrres=document.getElementById("School-Name-Addrres");
let cardEducationid=document.getElementById("cardEducationid");
                let Jobtitleinput=document.getElementById("Jobtitle-input");
                let JobtitleT=document.getElementById("JobtitleT");
              let WorkExtextarea=document.getElementById("Work-Ex-textarea");
              let workexpereincetextareaT=document.getElementById("work-expereince-textareaT");

                let Employerinput=document.getElementById("Employer-input");

                let CityinputWorkexperience=document.getElementById("City-input-Workexperience");
                let CountryinputWorkexperience=document.getElementById("Country-input-Workexperience");
                let WorkExaddress=document.getElementById("work-ex-address");
          
            
                let EndDateWorkExinput=document.getElementById("EndDate-WorkEx-input")
                let StartDateWorkExinput=document.getElementById("StartDate-WorkEx-input")
                let WorkExdateT=document.getElementById("Work-Ex-date")
                
var nameInput = document.getElementById('First-Name-input');
let FirstnameT=document.getElementById("FirstnameT");

let lastnameName=document.getElementById("Second-Name-input");
let lastnameT=document.getElementById("LastnameT");

let Introductioninput=document.getElementById("Introduction-input");
let IntroductionT=document.getElementById("IntroductionT");

let ProfessionT=document.getElementById("ProfessionT");
let ProfessionInput=document.getElementById("Profession-input");

let  CityInput=document.getElementById("City-input");
let CityT=document.getElementById("CityT");

let CountryInput=document.getElementById("Country-input");
let CountryT=document.getElementById("CountryT");

let PinCode2Input=document.getElementById("Pincode-input");
let pincodeT=document.getElementById("pincodeT");
let address_Section=document.getElementById("addressT");
 
let PhoneT=document.getElementById("PhoneT");
let PhoneIN=document.getElementById("Phone-input");
let PhoneNumberT=document.getElementById("PhoneNumberT");
    
let EmailIN=document.getElementById("Email-input");
let EmailidT=document.getElementById("EmailidT");
let EmailT=document.getElementById("EmailT");
//formdatabase
firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
        const database = firebase.database();
        //retirve data of firstname form firebase
        var nameInput = document.getElementById('First-Name-input')
        let FirstnameT=document.getElementById("FirstnameT");
        database.ref('users/' + user.uid +'/template5'+'/Personal-data').once('value')
        .then((snapshot) => {
           const Firstname = snapshot.child('firstname').val();
           const lastname = snapshot.child('lastname').val();
           FirstnameT.innerHTML=Firstname+" "+lastname;

           nameInput.value=Firstname;
           lastnameName.value=lastname;
         })
         //retirve data of secondname form firebase
       
         database.ref('users/' + user.uid +'/template5'+'/Personal-data'+'/Introduction').once('value')
         .then((snapshot) => {
            const Introduction = snapshot.val();
            Introductioninput.value=Introduction;
            IntroductionT.innerHTML=Introduction;
         
          })
      database.ref('users/' + user.uid +'/template5'+'/Personal-data'+'/lastname').once('value')
      .then((snapshot) => {
         const lastname = snapshot.val();
      
         lastnameT.innerHTML=lastname;
         lastnameName.value=lastname
       })
       database.ref('users/' + user.uid +'/template5'+'/Personal-data'+'/profession').once('value')
.then((snapshot) => {
   const Profession = snapshot.val();
   ProfessionT.innerHTML=Profession; 
   ProfessionInput.value=Profession
 })


 database.ref('users/' + user.uid +'/template5'+'/Personal-data'+'/city').once('value')
 .then((snapshot) => {
    const city = snapshot.val();
 
    CityInput.value=city
  })
  database.ref('users/' + user.uid +'/template5'+'/Personal-data'+'/country').once('value')
  .then((snapshot) => {
     const city = snapshot.val();
  
     CountryInput.value=city
   })
   database.ref('users/' + user.uid +'/template5'+'/Personal-data'+'/pincode').once('value')
   .then((snapshot) => {
      const city = snapshot.val();
   
      PinCode2Input.value=city
    })
    database.ref('users/'+user.uid+'/template5'+'/Personal-data'+'/phone').once('value')
    .then((snapshot) => {
      const phone = snapshot.val();
   
      PhoneIN.value=phone
    })
    database.ref('users/'+user.uid+'/template5'+'/Personal-data'+'/emailT').once('value')
    .then((snapshot) => {
      const emailt = snapshot.val();
   
     EmailIN.value=emailt
    })

    //---
    
 
    
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience'+'/Job-Title').once('value')
    .then((snapshot) => {
      const Jobtitleinputs = snapshot.val();
   
      Jobtitleinput.value=Jobtitleinputs;
    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience'+'/Employer-Position').once('value')
    .then((snapshot) => {
      const Employerinputs = snapshot.val();
   
      Employerinput.value=Employerinputs;

    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience'+'/City-Work').once('value')
    .then((snapshot) => {
      const CityinputWorkexperiences = snapshot.val();
   
      CityinputWorkexperience.value=CityinputWorkexperiences;

    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience'+'/Country').once('value')
    .then((snapshot) => {
      const CountryinputWorkexperiences = snapshot.val();
   
      CountryinputWorkexperience.value=CountryinputWorkexperiences;

    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience'+'/Start-Date').once('value')
    .then((snapshot) => {
      const  StartDateWorkExinputs = snapshot.val();
   
      StartDateWorkExinput.value= StartDateWorkExinputs;

    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience'+'/End-Date').once('value')
    .then((snapshot) => {
      const  EndDateWorkExinputs = snapshot.val();
   
      EndDateWorkExinput.value= EndDateWorkExinputs;

    })

    database.ref('users/'+user.uid+'/template5'+'/Work-Experience'+'/Work-Experience-Info').once('value')
    .then((snapshot) => {
      const WorkExtextareas = snapshot.val();
   
      WorkExtextarea.value= WorkExtextareas;

    })




 

  

 
  
    //workex-2
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience2'+'/Job-Title').once('value')
    .then((snapshot) => {
      const Jobtitleinputs = snapshot.val();
      var Jobtitleinputw2=document.getElementById("Jobtitle-input-w2").value=Jobtitleinputs;
   
    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience2'+'/Employer-Position').once('value')
    .then((snapshot) => {
      const Employerinputs = snapshot.val();
      let Employerinput=document.getElementById("Employer-input-w2").value=Employerinputs;
   

    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience2'+'/City-Work').once('value')
    .then((snapshot) => {
      const CityinputWorkexperiences = snapshot.val();
      let CityinputWorkexperience=document.getElementById("City-input-Workexperience-w2").value=CityinputWorkexperiences;


    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience2'+'/Country').once('value')
    .then((snapshot) => {
      const CountryinputWorkexperiences = snapshot.val();
      let CountryinputWorkexperience=document.getElementById("Country-input-Workexperience-w2").value=CountryinputWorkexperiences;


    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience2'+'/Start-Date').once('value')
    .then((snapshot) => {
      const  StartDateWorkExinputs = snapshot.val();
      let StartDateWorkExinput=document.getElementById("StartDate-WorkEx-input-w2").value=StartDateWorkExinputs;
  

    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience2'+'/End-Date').once('value')
    .then((snapshot) => {
      const  EndDateWorkExinputs = snapshot.val();
      let EndDateWorkExinput=document.getElementById("EndDate-WorkEx-input-w2").value=EndDateWorkExinputs;


    })

    database.ref('users/'+user.uid+'/template5'+'/Work-Experience2'+'/Work-Experience-Info').once('value')
    .then((snapshot) => {
      const WorkExtextareas = snapshot.val();
      let WorkExtextarea=document.getElementById("Work-Ex-textarea-w2").value=WorkExtextareas;
   

    })
    //work3
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience3'+'/Job-Title').once('value')
    .then((snapshot) => {
      const Jobtitleinputs = snapshot.val();
      var Jobtitleinputw2=document.getElementById("Jobtitle-input-w3").value=Jobtitleinputs;
  
    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience3'+'/Employer-Position').once('value')
    .then((snapshot) => {
      const Employerinputs = snapshot.val();
      let Employerinput=document.getElementById("Employer-input-w3").value=Employerinputs;
 

    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience3'+'/City-Work').once('value')
    .then((snapshot) => {
      const CityinputWorkexperiences = snapshot.val();
      let CityinputWorkexperience=document.getElementById("City-input-Workexperience-w3").value=CityinputWorkexperiences;
 

    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience3'+'/Country').once('value')
    .then((snapshot) => {
      const CountryinputWorkexperiences = snapshot.val();
      let CountryinputWorkexperience=document.getElementById("Country-input-Workexperience-w3").value=CountryinputWorkexperiences;

    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience3'+'/Start-Date').once('value')
    .then((snapshot) => {
      const  StartDateWorkExinputs = snapshot.val();
      let StartDateWorkExinput=document.getElementById("StartDate-WorkEx-input-w3").value=StartDateWorkExinputs;


    })
    database.ref('users/'+user.uid+'/template5'+'/Work-Experience3'+'/End-Date').once('value')
    .then((snapshot) => {
      const  EndDateWorkExinputs = snapshot.val();
      let EndDateWorkExinput=document.getElementById("EndDate-WorkEx-input-w3").value=EndDateWorkExinputs;


    })

    database.ref('users/'+user.uid+'/template5'+'/Work-Experience3'+'/Work-Experience-Info').once('value')
    .then((snapshot) => {
      const WorkExtextareas = snapshot.val();
      let WorkExtextarea=document.getElementById("Work-Ex-textarea-w3").value=WorkExtextareas;

    })


    database.ref('users/'+user.uid+'/template5'+'/Education'+'/School-Name').once('value')
    .then((snapshot) => {
      const   SchoolNameinputs= snapshot.val();
   
      SchoolNameinput.value=SchoolNameinputs ;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education'+'/School-Location').once('value')
    .then((snapshot) => {
      const   SchoolLocationinputs= snapshot.val();
   
      SchoolLocationinput.value=SchoolLocationinputs;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education'+'/Degree').once('value')
    .then((snapshot) => {
      const  Degreeinputs= snapshot.val();
   
      Degreeinput.value=Degreeinputs;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education'+'/Field-of-Study').once('value')
    .then((snapshot) => {
      const  FieldofStudys= snapshot.val();
   
      FieldofStudy.value= FieldofStudys;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education'+'/Graduation-Start-Date').once('value')
    .then((snapshot) => {
      const  GraduationStartDates= snapshot.val();
   
      GraduationStartDate.value= GraduationStartDates;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education'+'/Graduation-End-Date').once('value')
    .then((snapshot) => {
      const  GraduationEndDates= snapshot.val();
   
      GraduationEndDate.value= GraduationEndDates;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education'+'/Education-Info').once('value')
    .then((snapshot) => {
      const  EducationInfo= snapshot.val();
   
      Educationtextarea.value= EducationInfo;

    })


    //education2
  



    database.ref('users/'+user.uid+'/template5'+'/Education2'+'/School-Name').once('value')
    .then((snapshot) => {
      const   SchoolNameinputs= snapshot.val();
   
      let SchoolNameinput=document.getElementById("School-Name-input2").value=SchoolNameinputs ;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education2'+'/School-Location').once('value')
    .then((snapshot) => {
      const   SchoolLocationinputs= snapshot.val();
   
      let SchoolLocationinput=document.getElementById("School-Location-input2").value=SchoolLocationinputs;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education2'+'/Degree').once('value')
    .then((snapshot) => {
      const  Degreeinputs= snapshot.val();
   
      let Degreeinput=document.getElementById("Degree-input2").value=Degreeinputs;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education2'+'/Field-of-Study').once('value')
    .then((snapshot) => {
      const  FieldofStudys= snapshot.val();
   
      let FieldofStudy=document.getElementById("Field-of-Study2").value= FieldofStudys;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education2'+'/Graduation-Start-Date').once('value')
    .then((snapshot) => {
      const  GraduationStartDates= snapshot.val();
   
      let GraduationStartDate=document.getElementById("Graduation-Start-Date2").value= GraduationStartDates;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education2'+'/Graduation-End-Date').once('value')
    .then((snapshot) => {
      const  GraduationEndDates= snapshot.val();
   
      let GraduationEndDate=document.getElementById("Graduation-End-Date2").value= GraduationEndDates;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education2'+'/Education-Info').once('value')
    .then((snapshot) => {
      const  EducationInfo= snapshot.val();
   
      let Educationtextarea=document.getElementById("Education-textarea2").value= EducationInfo;

    })

    //education3

    

    database.ref('users/'+user.uid+'/template5'+'/Education3'+'/School-Name').once('value')
    .then((snapshot) => {
      const   SchoolNameinputs= snapshot.val();
   
      let SchoolNameinput=document.getElementById("School-Name-input3").value=SchoolNameinputs ;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education3'+'/School-Location').once('value')
    .then((snapshot) => {
      const   SchoolLocationinputs= snapshot.val();
   
      let SchoolLocationinput=document.getElementById("School-Location-input3").value=SchoolLocationinputs;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education3'+'/Degree').once('value')
    .then((snapshot) => {
      const  Degreeinputs= snapshot.val();
   
      let Degreeinput=document.getElementById("Degree-input3").value=Degreeinputs;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education3'+'/Field-of-Study').once('value')
    .then((snapshot) => {
      const  FieldofStudys= snapshot.val();
   
      let FieldofStudy=document.getElementById("Field-of-Study3").value= FieldofStudys;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education3'+'/Graduation-Start-Date').once('value')
    .then((snapshot) => {
      const  GraduationStartDates= snapshot.val();
   
      let GraduationStartDate=document.getElementById("Graduation-Start-Date3").value= GraduationStartDates;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education3'+'/Graduation-End-Date').once('value')
    .then((snapshot) => {
      const  GraduationEndDates= snapshot.val();
   
      let GraduationEndDate=document.getElementById("Graduation-End-Date3").value= GraduationEndDates;

    })
    database.ref('users/'+user.uid+'/template5'+'/Education3'+'/Education-Info').once('value')
    .then((snapshot) => {
      const  EducationInfo= snapshot.val();
   
      let Educationtextarea=document.getElementById("Education-textarea3").value= EducationInfo;

    })


    database.ref('users/' + user.uid +'/template5'+'/Work-Experience'+'/WorkExperienceCount').once('value')
    .then((snapshot) => {
       const WorkExperienceCount= snapshot.val();
       if(WorkExperienceCount<=0)
       {
         database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount=0);
         document.getElementById("Work-expereince-add-inputs-div2").style.display="none";
         document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
       }
       else if(WorkExperienceCount==1)
       {
         document.getElementById("Work-expereince-add-inputs-div2").style.display="block";
         document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
       }
       
     })

     database.ref('users/' + user.uid +'/template5'+'/Work-Experience'+'/WorkExperienceCount').once('value')
  .then((snapshot) => {
     const WorkExperienceCount= snapshot.val();
if(WorkExperienceCount<0)
{
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount=0);
  document.getElementById("Work-expereince-add-inputs-div2").style.display="none";
  document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
 
}
else if(WorkExperienceCount==1)
{
  document.getElementById("Work-expereince-add-inputs-div2").style.display="block";
  document.getElementById("Work-expereince-add-inputs-div3").style.display="none";

}
else if(WorkExperienceCount==2)
{
  document.getElementById("Work-expereince-add-inputs-div3").style.display="block";
  document.getElementById("Work-expereince-add-inputs-div2").style.display="block";
  
}
else if(WorkExperienceCount>=3)
{
  alert("Worexperence-add Limit is over")
}

   })


   //eduction

   database.ref('users/' + user.uid +'/template5'+'/Education'+'/EducationCount').once('value')
   .then((snapshot) => {
      const WorkExperienceCount= snapshot.val();
 if(WorkExperienceCount<0)
 {
   database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation=0);
   document.getElementById("Education-Form-add2").style.display="none";
   document.getElementById("Education-Form-add3").style.display="none";
   document.getElementById("education-ex-id-2T").style.display="none";
   document.getElementById("education-ex-id-3T").style.display="none";
 
 }
 else if(WorkExperienceCount==1)
 {
   document.getElementById("Education-Form-add2").style.display="block";
   document.getElementById("Education-Form-add3").style.display="none";
   // document.getElementById("work-ex-id-2T").style.display="block";
   // document.getElementById("work-ex-id-3T").style.display="none";
   document.getElementById("education-ex-id-2T").style.display="inline-flex";
   document.getElementById("education-ex-id-3T").style.display="none";
 }
 else if(WorkExperienceCount==2)
 {
   document.getElementById("Education-Form-add2").style.display="block";
   document.getElementById("Education-Form-add3").style.display="block";
   document.getElementById("education-ex-id-2T").style.display="inline-flex";
   document.getElementById("education-ex-id-3T").style.display="inline-flex";
 }
 else if(WorkExperienceCount>=2)
 {
   alert("Worexperence-add Limit is over")
   database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation=2);
 }
 
    })

    database.ref('users/' + user.uid +'/template5'+'/Education'+'/EducationCount').once('value')
  .then((snapshot) => {
     const WorkExperienceCount= snapshot.val();
     if(WorkExperienceCount<=0)
     {academicdatadeletefnc();
      database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation=0);
      document.getElementById("Education-Form-add2").style.display="none";
      document.getElementById("Education-Form-add3").style.display="none";
      document.getElementById("education-ex-id-2T").style.display="none";
      document.getElementById("education-ex-id-3T").style.display="none";

     }
     else if(WorkExperienceCount==1)
     {deleteworEx3();
     
      document.getElementById("Education-Form-add2").style.display="block";
      document.getElementById("Education-Form-add3").style.display="none";
       document.getElementById("education-ex-id-2T").style.display="inline-flex";
    
   
     }
     else if(WorkExperienceCount==2)
{ 
  document.getElementById("Education-Form-add2").style.display="block";
  document.getElementById("Education-Form-add3").style.display="block";
  document.getElementById("education-ex-id-2T").style.display="block";
  document.getElementById("education-ex-id-3T").style.display="block";
}
     
   })


   
   database.ref('users/' + user.uid +'/template5'+'/Add-Section').once('value')
   .then((snapshot) => {
     
      const Accomplishmentscheckbox =snapshot.child('Accomplishments-checkbox').val();
      const Affiliationscheckbox =snapshot.child('Affiliations-checkbox').val();
      const AdditionalInformationcheckbox =snapshot.child('Additional-Information-checkbox').val();
      const softwarecheckbox =snapshot.child('software-checkbox').val();
      const Languagescheckbox =snapshot.child('Languages-checkbox').val();
      const Certificationcheckbox=snapshot.child('Certification-checkbox').val();
      const Interset=snapshot.child('Interset').val();
      const perstionalsection=snapshot.child('perstionalsection-checkbox').val();
   
      if(Accomplishmentscheckbox==true)
      {
     
       var AcomplisTemplateDividT=document.getElementById("AcomplisTemplateDividT").style.display="block";
   
       var Accomplishments=document.getElementById("Accomplishments");
       Accomplishments.checked=true;
       
   
   
     var Accomplishmentsdivid=document.getElementById("Accomplishmentsdivid").style.display="block";
     
     }
     else{
       var Accomplishments=document.getElementById("Accomplishments");
       Accomplishments.checked=false;
       var Accomplishmentsdivid=document.getElementById("Accomplishmentsdivid").style.display="none";
       var AcomplisTemplateDividT=document.getElementById("AcomplisTemplateDividT").style.display="none";
     }
   
     
     if(Affiliationscheckbox==true)
     {var Affiliations=document.getElementById("Affiliations");
     var AffiliationsTdiv=document.getElementById("AffiliationsTdiv").style.display="block";
     Affiliations.checked=true;
    var Accomplishmentsdivid=document.getElementById("Affiliationsiddiv").style.display="block";
    }
    else{
     var Affiliations=document.getElementById("Affiliations");
     Affiliations.checked=false;
     var AffiliationsTdiv=document.getElementById("AffiliationsTdiv").style.display="none";
      var Accomplishmentsdivid=document.getElementById("Affiliationsiddiv").style.display="none";
    }
   
    if(AdditionalInformationcheckbox==true)
    {
     var AdditionalInformation=document.getElementById("Additional-Information");
     AdditionalInformation.checked=true;
     var AdditionalInformationdivT=document.getElementById("AdditionalInformationdivT").style.display="block";
     var Accomplishmentsdivid=document.getElementById("Additional-Informationid").style.display="block";
    }
   
    else{
     var AdditionalInformation=document.getElementById("Additional-Information");
     AdditionalInformation.checked=false;
     var AdditionalInformationdivT=document.getElementById("AdditionalInformationdivT").style.display="none";
     var Accomplishmentsdivid=document.getElementById("Additional-Informationid").style.display="none";
    }
   
   
    if(softwarecheckbox==true)
    {
     
   var Software=document.getElementById("Software");
   Software.checked=true;
     Software.checked=true;
     var Softwarediv=document.getElementById("Softwarediv").style.display="block";
     document.getElementById("SoftwareT").style.display="block";
    }
    else{
     var Software=document.getElementById("Software");
     Software.checked=false;
     var Softwarediv=document.getElementById("Softwarediv").style.display="none";
     document.getElementById("SoftwareT").style.display="none";
    }
   
    if(Languagescheckbox==true)
    {
     var Languages=document.getElementById("Languages");
     Languages.checked=true;
     document.getElementById("LanguagesT").style.display="block"
     var Softwarediv=document.getElementById("Languagesdiv").style.display="block";
    }
    else{
     var Languages=document.getElementById("Languages");
     Languages.checked=false;
     document.getElementById("LanguagesT").style.display="none"
     var Softwarediv=document.getElementById("Languagesdiv").style.display="none";
    }
   
   
    if(Certificationcheckbox==true)
    {var Certifications=document.getElementById("Certifications");
     Certifications.checked=true;
     document.getElementById("CertificationTdiv").style.display="block";
     var Softwarediv=document.getElementById("Certificationdiv").style.display="block";
    }
    else{var Certifications=document.getElementById("Certifications");
     Certifications.checked=false;
     document.getElementById("CertificationTdiv").style.display="none";
     var Softwarediv=document.getElementById("Certificationdiv").style.display="none";
    }
   
    if(Interset==true)
    {
     var Interestsinput=document.getElementById("Interests");
     Interestsinput.checked=true;
     var Softwarediv=document.getElementById("Interestsdiv").style.display="block";
     document.getElementById("IntersetdivT").style.display="block";
    }
    else{
     var Interestsinput=document.getElementById("Interests");
     Interestsinput.checked=false;
     document.getElementById("IntersetdivT").style.display="none";
     var Softwarediv=document.getElementById("Interestsdiv").style.display="none";
    }
    if(perstionalsection==true)
    {
   
     
   var perstionalsections=document.getElementById("perstional-section");
   perstionalsections.checked=true;
     var personalsectionaddinput=document.getElementById("personalsectionaddinput");

   var personalsectiondivT=document.getElementById("personal-section-divT").style.display="block";
   database.ref('users/' + user.uid +'/template5'+'/personal-section'+'/personal-section-heading').once('value')
   .then((snapshot) => {
      const personalsectionaddinput = snapshot.val();
      document.getElementById("user-added-sectionh1").innerHTML=personalsectionaddinput;
   document.getElementById("user-section-heading").innerHTML=personalsectionaddinput;
   document.getElementById("personalsectionaddinput").value=personalsectionaddinput;
    })
     var useraddedsection=document.getElementById("user-added-section").style.display="block";
    }
    else{
     
     var perstionalsections=document.getElementById("perstional-section");
   perstionalsections.checked=false;
     var personalsectiondivT=document.getElementById("personal-section-divT").style.display="none";
     var useraddedsection=document.getElementById("user-added-section").style.display="none";
    }
    })
   
  
    
   database.ref('users/' + user.uid +'/template5'+'/Certification').once('value')
   .then((snapshot) => {
    var Certificationinfo=document.getElementById("Certificationinfo");
    var CertificationDate=document.getElementById("CertificationDate");

      const Certificationinfos = snapshot.child('Certification-info').val();
      const CertificationDates = snapshot.child('CertificationDate').val();
      var CertificationDateinfo=document.getElementById("CertificationDateinfo").innerHTML=CertificationDates;
      var CertificationT=document.getElementById("CertificationT").innerHTML=Certificationinfos;
      CertificationDate.value=CertificationDates;
      Certificationinfo.value =Certificationinfos; 
    })


     
database.ref('users/' + user.uid +'/template5'+'/Interest').once('value')
.then((snapshot) => {
  var Interests1=document.getElementById("Interests1");
  var Interests2=document.getElementById("Interests2");
  var Interests3=document.getElementById("Interests3");

   const Interests1info = snapshot.child('Interests1-info').val();
   const Interests2info = snapshot.child('Interests2-info').val();
   const Interests3info = snapshot.child('Interests3-info').val();
   var IntersetdivT1=document.getElementById("IntersetdivT1").innerHTML=Interests1info;
   var IntersetdivT2=document.getElementById("IntersetdivT2").innerHTML=Interests2info;
   var IntersetdivT3=document.getElementById("IntersetdivT3").innerHTML=Interests3info;
   Interests1.value =Interests1info; 
   Interests2.value =Interests2info; 
   Interests3.value =Interests3info; 

 })
 

  database.ref('users/' + user.uid +'/template5'+'/Software').once('value')
  .then((snapshot) => {

    var Softwareinput1=document.getElementById("Softwareinput1");
    var Softwareinput2=document.getElementById("Softwareinput2");
    var Softwareinput3=document.getElementById("Softwareinput3");
    var Softwareinput4=document.getElementById("Softwareinput4");

     const Interests1info = snapshot.child('Softwareinput1-info').val();
     const Interests2info = snapshot.child('Softwareinput2-info').val();
     const Interests3info = snapshot.child('Softwareinput3-info').val();
     const Interests4info = snapshot.child('Softwareinput4-info').val();
     var Skill1T=document.getElementById("Skill1T").innerHTML=Interests1info;
     var Skill2T=document.getElementById("Skill2T").innerHTML=Interests2info;
     var Skill3T=document.getElementById("Skill3T").innerHTML=Interests3info;
     var Skill3T=document.getElementById("Skill3T").innerHTML=Interests3info;
     var Skill4T=document.getElementById("Skill4T").innerHTML=Interests4info;
     Softwareinput1.value =Interests1info; 
     Softwareinput2.value =Interests2info; 
     Softwareinput3.value =Interests3info; 
     Softwareinput4.value =Interests4info; 
  
   })



    database.ref('users/' + user.uid +'/template5'+'/personal-section'+'/personal-section-info').once('value')
    .then((snapshot) => {
      var Accomplishmentstextarea=document.getElementById("Accomplishments-textarea");
      var personalsectionT=document.getElementById("personal-section-T");
      var useraddedsectiontextarea=document.getElementById("user-added-section-textarea");

       const Accomplishmentsinfo = snapshot.val();
       var AcomplistextareaT=document.getElementById("personal-section-T").innerHTML=Accomplishmentsinfo;
       useraddedsectiontextarea.value =Accomplishmentsinfo; 
     })
   
   
      database.ref('users/' + user.uid +'/template5'+'/Language').once('value')
      .then((snapshot) => {
        var Language1=document.getElementById("Language1");
        var Language2=document.getElementById("Language2");
        var Language3=document.getElementById("Language3");
        var Language4=document.getElementById("Language4");

         const Interests1info = snapshot.child('Language1-info').val();
         const Interests2info = snapshot.child('Language2-info').val();
         const Interests3info = snapshot.child('Language3-info').val();
         const Interests4info = snapshot.child('Language4-info').val();
         var Skill1T=document.getElementById("Language1T").innerHTML=Interests1info;
         var Skill2T=document.getElementById("Language2T").innerHTML=Interests2info;
         var Skill3T=document.getElementById("Language3T").innerHTML=Interests3info;
          var Skill4T=document.getElementById("Language4T").innerHTML=Interests4info;
          Language1.value =Interests1info; 
          Language2.value =Interests2info; 
          Language3.value =Interests3info; 
          Language4.value =Interests4info;   })
   
          database.ref('users/' + user.uid +'/template5'+'/skill').once('value')
          .then((snapshot) => {
            var Skillinput1=document.getElementById("Skill-input1");
            var Skillinput2=document.getElementById("Skill-input2");
            var Skillinput3=document.getElementById("Skill-input3");
            var Skillinput4=document.getElementById("Skill-input4");

             const Interests1info = snapshot.child('Skill-input1').val();
             const Interests2info = snapshot.child('Skill-input2').val();
             const Interests3info = snapshot.child('Skill-input3').val();
             const Interests4info = snapshot.child('Skill-input4').val();
       
              if(Interests1info==""&&Interests2info ==""&&Interests3info ==""&& Interests4info=="")
              {
        
                document.getElementById("SkillT-H").style.display="none";
              }
          else{
            document.getElementById("SkillT-H").style.display="block";
                  var Skill1T=document.getElementById("skill1ST").innerHTML=Interests1info;
             var Skill2T=document.getElementById("skill2ST").innerHTML=Interests2info;
             var Skill3T=document.getElementById("skill3ST").innerHTML=Interests3info;
              var Skill4T=document.getElementById("skill4ST").innerHTML=Interests4info;
              Skillinput1.value =Interests1info; 
              Skillinput2.value =Interests2info; 
              Skillinput3.value =Interests3info; 
              Skillinput4.value =Interests4info; 
          }
          
          
           })
   
           database.ref('users/' + user.uid +'/template5'+'/Affiliations'+'/Affiliations-info').once('value')
           .then((snapshot) => {
              const Affiliationsinfo = snapshot.val();
           
              var AffiliationsT=document.getElementById("AffiliationsT").innerHTML=Affiliationsinfo;

              document.getElementById("Affiliations-textarea").value=Affiliationsinfo;
            })
            database.ref('users/' + user.uid +'/template5'+'/Additional-Information'+'/Additional-Information-info').once('value')
            .then((snapshot) => {
               const AdditionalInformationinfo = snapshot.val();
           
               var AdditionalInformationT=document.getElementById("Additional-InformationT").innerHTML=AdditionalInformationinfo;
               document.getElementById("Additional-Information-textarea").value =AdditionalInformationinfo; 
             })
           
    //retrieval of data (form) when auth is changed//
  addrees();   
  phoneandemail();
  workexperienceinputandinnerhtml();
  workexperienceinputandinnerhtml2();
  workexperienceinputandinnerhtml3()
  academicinputandinnerhtml();
  academicinputandinnerhtml2();
  academicinputandinnerhtml3();
  //photo retrieval ka calling yaha aayega
   geturlfromdatabase();

  //ek func bana vaha set kr aur vaha se get kr yaha se bhi
  database.ref('users/' + user.uid +'/template5'+'/Accompliments'+'/Accomplishments-info').once('value')
.then((snapshot) => {
   const Accomplishmentsinfo = snapshot.val();
   var Accomplishmentstextarea=document.getElementById("Accomplishments-textarea");
   var AcomplistextareaT=document.getElementById("Acomplis-textareaT").innerHTML=Accomplishmentsinfo;
   Accomplishmentstextarea.value =Accomplishmentsinfo; 
 })
    }
    
})

function academicdata()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  database.ref('users/'+user.uid+'/template5'+'/Education').child('School-Name').set(SchoolNameinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Education').child('School-Location').set(SchoolLocationinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Education').child('Degree').set(Degreeinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Education').child('Field-of-Study').set(FieldofStudy.value)
  database.ref('users/'+user.uid+'/template5'+'/Education').child('Graduation-Start-Date').set(GraduationStartDate.value)
  database.ref('users/'+user.uid+'/template5'+'/Education').child('Graduation-End-Date').set(GraduationEndDate.value)

  database.ref('users/'+user.uid+'/template5'+'/Education').child('Education-Info').set(Educationtextarea.value)
  academicinputandinnerhtml()
}


function academicdata2()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  
let SchoolNameinput=document.getElementById("School-Name-input2");
let SchoolLocationinput=document.getElementById("School-Location-input2");
let Degreeinput=document.getElementById("Degree-input2");
let FieldofStudy=document.getElementById("Field-of-Study2")
 let GraduationStartDate=document.getElementById("Graduation-Start-Date2");
let GraduationEndDate=document.getElementById("Graduation-End-Date2");
let Educationtextarea=document.getElementById("Education-textarea2");
// let EducationtextareaT=document.getElementById("Education-textareaT");
//  let SchoolExdate=document.getElementById("School-Ex-date");
// let DegreeT=document.getElementById("DegreeT");
// let SchoolNameAddrres=document.getElementById("School-Name-Addrres");
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('School-Name').set(SchoolNameinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('School-Location').set(SchoolLocationinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('Degree').set(Degreeinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('Field-of-Study').set(FieldofStudy.value)
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('Graduation-Start-Date').set(GraduationStartDate.value)
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('Graduation-End-Date').set(GraduationEndDate.value)

  database.ref('users/'+user.uid+'/template5'+'/Education2').child('Education-Info').set(Educationtextarea.value)
  academicinputandinnerhtml2();
}

function academicdata3()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  
let SchoolNameinput=document.getElementById("School-Name-input3");
let SchoolLocationinput=document.getElementById("School-Location-input3");
let Degreeinput=document.getElementById("Degree-input3");
let FieldofStudy=document.getElementById("Field-of-Study3")
 let GraduationStartDate=document.getElementById("Graduation-Start-Date3");
let GraduationEndDate=document.getElementById("Graduation-End-Date3");
let Educationtextarea=document.getElementById("Education-textarea3");
// let EducationtextareaT=document.getElementById("Education-textareaT");
//  let SchoolExdate=document.getElementById("School-Ex-date");
// let DegreeT=document.getElementById("DegreeT");
// let SchoolNameAddrres=document.getElementById("School-Name-Addrres");
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('School-Name').set(SchoolNameinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('School-Location').set(SchoolLocationinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Degree').set(Degreeinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Field-of-Study').set(FieldofStudy.value)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Graduation-Start-Date').set(GraduationStartDate.value)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Graduation-End-Date').set(GraduationEndDate.value)

  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Education-Info').set(Educationtextarea.value)
  academicinputandinnerhtml3();
}
function Workexperiencedata()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('Job-Title').set(Jobtitleinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('Employer-Position').set(Employerinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('City-Work').set(CityinputWorkexperience.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('Country').set(CountryinputWorkexperience.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('Start-Date').set(StartDateWorkExinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('End-Date').set(EndDateWorkExinput.value)

  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('Work-Experience-Info').set(WorkExtextarea.value)
  workexperienceinputandinnerhtml();
}

function Workexperiencedata2()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  var Jobtitleinputw2=document.getElementById("Jobtitle-input-w2");


let WorkExtextarea=document.getElementById("Work-Ex-textarea-w2");


  let Employerinput=document.getElementById("Employer-input-w2");
  let EndDateWorkExinput=document.getElementById("EndDate-WorkEx-input-w2")
  let StartDateWorkExinput=document.getElementById("StartDate-WorkEx-input-w2")
  let CityinputWorkexperience=document.getElementById("City-input-Workexperience-w2");
  let CountryinputWorkexperience=document.getElementById("Country-input-Workexperience-w2");
  let WorkExaddress=document.getElementById("work-ex-address-w2");
  let workexpereincetextareaT=document.getElementById("work-expereince-textareaT-w2");

 
  let WorkExdateT=document.getElementById("Work-Ex-date")
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('Job-Title').set(Jobtitleinputw2.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('Employer-Position').set(Employerinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('City-Work').set(CityinputWorkexperience.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('Country').set(CountryinputWorkexperience.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('Start-Date').set(StartDateWorkExinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('End-Date').set(EndDateWorkExinput.value)

  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('Work-Experience-Info').set(WorkExtextarea.value)
  workexperienceinputandinnerhtml2();
}

function Workexperiencedata3()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  var Jobtitleinputw2=document.getElementById("Jobtitle-input-w3");


let WorkExtextarea=document.getElementById("Work-Ex-textarea-w3");


  let Employerinput=document.getElementById("Employer-input-w3");
  let EndDateWorkExinput=document.getElementById("EndDate-WorkEx-input-w3")
  let StartDateWorkExinput=document.getElementById("StartDate-WorkEx-input-w3")
  let CityinputWorkexperience=document.getElementById("City-input-Workexperience-w3");
  let CountryinputWorkexperience=document.getElementById("Country-input-Workexperience-w3");
  let WorkExaddress=document.getElementById("work-ex-address-w3");
  let workexpereincetextareaT=document.getElementById("work-expereince-textareaT-w3");

 
  let WorkExdateT=document.getElementById("Work-Ex-date")
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('Job-Title').set(Jobtitleinputw2.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('Employer-Position').set(Employerinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('City-Work').set(CityinputWorkexperience.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('Country').set(CountryinputWorkexperience.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('Start-Date').set(StartDateWorkExinput.value)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('End-Date').set(EndDateWorkExinput.value)

  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('Work-Experience-Info').set(WorkExtextarea.value)
  workexperienceinputandinnerhtml3();
}

function academicinputandinnerhtml()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  database.ref('users/' + user.uid + '/template5'+'/Education').once('value')
  .then((snapshot) => {
    const SchoolNameinput = snapshot.child('School-Name').val();
   
    const SchoolLocationinput =snapshot.child('School-Location').val();
    const Degreeinput = snapshot.child('Degree').val();
    const FieldofStudy = snapshot.child('Field-of-Study').val();
    const GraduationStartDate =snapshot.child('Graduation-Start-Date').val();
    const GraduationEndDate =snapshot.child('Graduation-End-Date').val();
const Educationtextarea=snapshot.child('Education-Info').val();

if(Educationtextarea==""&&SchoolLocationinput==""&&Degreeinput==""&&FieldofStudy==""&&GraduationStartDate==""&&GraduationStartDate==""){
  cardEducationid.style.display="none";
}
else{
  cardEducationid.style.display="block";
EducationtextareaT.innerHTML=Educationtextarea;
if(Degreeinput!=""&&FieldofStudy!=""){

  DegreeT.innerHTML=Degreeinput+":"+FieldofStudy;
}
else if(Degreeinput!=""&&FieldofStudy==""){
  DegreeT.innerHTML=Degreeinput;
}
else if(Degreeinput==""&&FieldofStudy!=""){
  DegreeT.innerHTML=FieldofStudy;
}
else if(Degreeinput==""&&FieldofStudy==""){
  DegreeT.innerHTML="";
}

   

 if(SchoolLocationinput!=""&&SchoolNameinput!=""){
  SchoolNameAddrres.innerHTML=SchoolNameinput+","+SchoolLocationinput;
}
else if(SchoolNameinput!=""&&SchoolLocationinput==""){
  SchoolNameAddrres.innerHTML=SchoolNameinput;
}
else if(SchoolNameinput==""&&SchoolLocationinput!=""){
  SchoolNameAddrres.innerHTML=SchoolLocationinput;
}
else if(SchoolNameinput==""&&SchoolLocationinput==""){
  SchoolNameAddrres.innerHTML="";

}
 SchoolExdate.innerHTML=GraduationStartDate+"<br>"+GraduationEndDate;
}
})
}

function academicinputandinnerhtml3()
{
  let EducationtextareaT=document.getElementById("Education-textareaT3");
 let SchoolExdate=document.getElementById("education-date-3T");
let DegreeT=document.getElementById("DegreeT3");
let SchoolNameAddrres=document.getElementById("School-Name-Addrres3");
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  database.ref('users/' + user.uid + '/template5'+'/Education3').once('value')
  .then((snapshot) => {
    const SchoolNameinput = snapshot.child('School-Name').val();
   
    const SchoolLocationinput =snapshot.child('School-Location').val();
    const Degreeinput = snapshot.child('Degree').val();
    const FieldofStudy = snapshot.child('Field-of-Study').val();
    const GraduationStartDate =snapshot.child('Graduation-Start-Date').val();
    const GraduationEndDate =snapshot.child('Graduation-End-Date').val();
const Educationtextarea=snapshot.child('Education-Info').val();

if(Educationtextarea==""&&SchoolLocationinput==""&&Degreeinput==""&&FieldofStudy==""&&GraduationStartDate==""&&GraduationStartDate==""){

  document.getElementById("education-ex-id-3T").style.display="none";
}
else{
  document.getElementById("education-ex-id-3T").style.display="inline-flex";
EducationtextareaT.innerHTML=Educationtextarea;
if(Degreeinput!=""&&FieldofStudy!=""){

  DegreeT.innerHTML=Degreeinput+":"+FieldofStudy;
}
else if(Degreeinput!=""&&FieldofStudy==""){
  DegreeT.innerHTML=Degreeinput;
}
else if(Degreeinput==""&&FieldofStudy!=""){
  DegreeT.innerHTML=FieldofStudy;
}
else if(Degreeinput==""&&FieldofStudy==""){
  DegreeT.innerHTML="";
}

   

 if(SchoolLocationinput!=""&&SchoolNameinput!=""){
  SchoolNameAddrres.innerHTML=SchoolNameinput+","+SchoolLocationinput;
}
else if(SchoolNameinput!=""&&SchoolLocationinput==""){
  SchoolNameAddrres.innerHTML=SchoolNameinput;
}
else if(SchoolNameinput==""&&SchoolLocationinput!=""){
  SchoolNameAddrres.innerHTML=SchoolLocationinput;
}
else if(SchoolNameinput==""&&SchoolLocationinput==""){
  SchoolNameAddrres.innerHTML="";

}
 SchoolExdate.innerHTML=GraduationStartDate+"<br>"+GraduationEndDate;
}
})
}

function academicinputandinnerhtml2()
{
  let EducationtextareaT=document.getElementById("Education-textareaT2");
 let SchoolExdate=document.getElementById("education-date-2T");
let DegreeT=document.getElementById("DegreeT2");
let SchoolNameAddrres=document.getElementById("School-Name-Addrres2");
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  database.ref('users/' + user.uid + '/template5'+'/Education2').once('value')
  .then((snapshot) => {
    const SchoolNameinput = snapshot.child('School-Name').val();
   
    const SchoolLocationinput =snapshot.child('School-Location').val();
    const Degreeinput = snapshot.child('Degree').val();
    const FieldofStudy = snapshot.child('Field-of-Study').val();
    const GraduationStartDate =snapshot.child('Graduation-Start-Date').val();
    const GraduationEndDate =snapshot.child('Graduation-End-Date').val();
const Educationtextarea=snapshot.child('Education-Info').val();

if(Educationtextarea==""&&SchoolLocationinput==""&&Degreeinput==""&&FieldofStudy==""&&GraduationStartDate==""&&GraduationStartDate==""){

  document.getElementById("education-ex-id-2T").style.display="none";
}
else{
  document.getElementById("education-ex-id-2T").style.display="inline-flex";
EducationtextareaT.innerHTML=Educationtextarea;
if(Degreeinput!=""&&FieldofStudy!=""){

  DegreeT.innerHTML=Degreeinput+":"+FieldofStudy;
}
else if(Degreeinput!=""&&FieldofStudy==""){
  DegreeT.innerHTML=Degreeinput;
}
else if(Degreeinput==""&&FieldofStudy!=""){
  DegreeT.innerHTML=FieldofStudy;
}
else if(Degreeinput==""&&FieldofStudy==""){
  DegreeT.innerHTML="";
}

   

 if(SchoolLocationinput!=""&&SchoolNameinput!=""){
  SchoolNameAddrres.innerHTML=SchoolNameinput+","+SchoolLocationinput;
}
else if(SchoolNameinput!=""&&SchoolLocationinput==""){
  SchoolNameAddrres.innerHTML=SchoolNameinput;
}
else if(SchoolNameinput==""&&SchoolLocationinput!=""){
  SchoolNameAddrres.innerHTML=SchoolLocationinput;
}
else if(SchoolNameinput==""&&SchoolLocationinput==""){
  SchoolNameAddrres.innerHTML="";

}
 SchoolExdate.innerHTML=GraduationStartDate+"<br>"+GraduationEndDate;
}
})
}

function workexperienceinputandinnerhtml2()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;

var workexpereincetextareaT=document.getElementById("work-expereince-textareaT-w2")
  database.ref('users/' + user.uid + '/template5'+'/Work-Experience2').once('value')
  .then((snapshot) => {
    const Jobtitleinput = snapshot.child('Job-Title').val();
  
    document.getElementById("JobtitleT-w2").innerHTML=Jobtitleinput;
    var WorkExaddress= document.getElementById("work-ex-address-w2");
    const Employerinput=snapshot.child('Employer-Position').val();
    const CityinputWorkexperience = snapshot.child('City-Work').val();
    const CountryinputWorkexperience = snapshot.child('Country').val();
    const EndDateWorkExinput=snapshot.child('End-Date').val();
    const StartDateWorkExinput=snapshot.child('Start-Date').val()
    const  WorkExtextarea=snapshot.child('Work-Experience-Info').val()

   
    if(Jobtitleinput==""&&Employerinput==""&&CityinputWorkexperience==""&&CountryinputWorkexperience==""&&EndDateWorkExinput==""&&StartDateWorkExinput==""&&WorkExtextarea=="")
    {
      document.getElementById("work-ex-id-2T").style.display="none";
    }
  else{

    document.getElementById("work-ex-id-2T").style.display="inline-flex"

  if(Employerinput!=""&&CityinputWorkexperience!=""&&CountryinputWorkexperience!=""){
  WorkExaddress.innerHTML=Employerinput+" : "+CityinputWorkexperience+","+CountryinputWorkexperience;
  }
  else if(Employerinput!=""&&CityinputWorkexperience==""&&CountryinputWorkexperience=="")
  {
  WorkExaddress.innerHTML=Employerinput;
  }
  else if(Employerinput!==""&&CityinputWorkexperience!=""&&CountryinputWorkexperience=="")
  {
    WorkExaddress.innerHTML=Employerinput+" : "+CityinputWorkexperience;
  }
  else if(Employerinput!==""&&CityinputWorkexperience==""&&CountryinputWorkexperience!="")
  {
    WorkExaddress.innerHTML=Employerinput+" : "+CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience!=""&&CountryinputWorkexperience!=""){
    WorkExaddress.innerHTML=CityinputWorkexperience+","+CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience!=""+CountryinputWorkexperience==""){
    WorkExaddress.innerHTML=CityinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience==""+CountryinputWorkexperience!=""){
    WorkExaddress.innerHTML=CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience==""+CountryinputWorkexperience==""){
    WorkExaddress.innerHTML="";
  }
  
workexpereincetextareaT.innerHTML=WorkExtextarea;
  
  let WorkExdateT=document.getElementById("Work-Ex-date-w2")
  WorkExdateT.innerHTML=StartDateWorkExinput+"<br>"+EndDateWorkExinput;
    

}
  
})


}

function workexperienceinputandinnerhtml3()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;

var workexpereincetextareaT=document.getElementById("work-expereince-textareaT-w3")
  database.ref('users/' + user.uid + '/template5'+'/Work-Experience3').once('value')
  .then((snapshot) => {
    const Jobtitleinput = snapshot.child('Job-Title').val();
  
    document.getElementById("JobtitleT-w3").innerHTML=Jobtitleinput;
    var WorkExaddress= document.getElementById("work-ex-address-w3");
    const Employerinput=snapshot.child('Employer-Position').val();
    const CityinputWorkexperience = snapshot.child('City-Work').val();
    const CountryinputWorkexperience = snapshot.child('Country').val();
    const EndDateWorkExinput=snapshot.child('End-Date').val();
    const StartDateWorkExinput=snapshot.child('Start-Date').val()
    const  WorkExtextarea=snapshot.child('Work-Experience-Info').val()
  
    if(Jobtitleinput==""&&Employerinput==""&&CityinputWorkexperience==""&&CountryinputWorkexperience==""&&EndDateWorkExinput==""&&StartDateWorkExinput==""&&WorkExtextarea=="")
    {
      document.getElementById("work-ex-id-3T").style.display="none";
    }
  else{

    document.getElementById("work-ex-id-3T").style.display="inline-flex";
  if(Employerinput!=""&&CityinputWorkexperience!=""&&CountryinputWorkexperience!=""){
  WorkExaddress.innerHTML=Employerinput+" : "+CityinputWorkexperience+","+CountryinputWorkexperience;
  }
  else if(Employerinput!=""&&CityinputWorkexperience==""&&CountryinputWorkexperience=="")
  {
  WorkExaddress.innerHTML=Employerinput;
  }
  else if(Employerinput!==""&&CityinputWorkexperience!=""&&CountryinputWorkexperience=="")
  {
    WorkExaddress.innerHTML=Employerinput+" : "+CityinputWorkexperience;
  }
  else if(Employerinput!==""&&CityinputWorkexperience==""&&CountryinputWorkexperience!="")
  {
    WorkExaddress.innerHTML=Employerinput+" : "+CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience!=""&&CountryinputWorkexperience!=""){
    WorkExaddress.innerHTML=CityinputWorkexperience+","+CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience!=""+CountryinputWorkexperience==""){
    WorkExaddress.innerHTML=CityinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience==""+CountryinputWorkexperience!=""){
    WorkExaddress.innerHTML=CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience==""+CountryinputWorkexperience==""){
    WorkExaddress.innerHTML="";
  }
  
workexpereincetextareaT.innerHTML=WorkExtextarea;
  
  let WorkExdateT=document.getElementById("Work-Ex-date-w3")
  WorkExdateT.innerHTML=StartDateWorkExinput+"<br>"+EndDateWorkExinput;
    


}
})


}

function workexperienceinputandinnerhtml()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  const WorkExperienceDiv=document.getElementById("Work-Experience-Div");

  database.ref('users/' + user.uid + '/template5'+'/Work-Experience').once('value')
  .then((snapshot) => {
    const Jobtitleinput = snapshot.child('Job-Title').val();
    JobtitleT.innerHTML=Jobtitleinput;
    const Employerinput=snapshot.child('Employer-Position').val();
    const CityinputWorkexperience = snapshot.child('City-Work').val();
    const CountryinputWorkexperience = snapshot.child('Country').val();
    const EndDateWorkExinput=snapshot.child('End-Date').val();
    const StartDateWorkExinput=snapshot.child('Start-Date').val()
    const  WorkExtextarea=snapshot.child('Work-Experience-Info').val()
    if(Jobtitleinput==""&&Employerinput==""&&CityinputWorkexperience==""&&CountryinputWorkexperience==""&&EndDateWorkExinput==""&&StartDateWorkExinput==""&&WorkExtextarea=="")
    {
         WorkExperienceDiv.style.display="none";
    }
    else{
      WorkExperienceDiv.style.display="block";
  

  if(Employerinput!=""&&CityinputWorkexperience!=""&&CountryinputWorkexperience!=""){
  WorkExaddress.innerHTML=Employerinput+" : "+CityinputWorkexperience+","+CountryinputWorkexperience;
  }
  else if(Employerinput!=""&&CityinputWorkexperience==""&&CountryinputWorkexperience=="")
  {
  WorkExaddress.innerHTML=Employerinput;
  }
  else if(Employerinput!==""&&CityinputWorkexperience!=""&&CountryinputWorkexperience=="")
  {
    WorkExaddress.innerHTML=Employerinput+" : "+CityinputWorkexperience;
  }
  else if(Employerinput!==""&&CityinputWorkexperience==""&&CountryinputWorkexperience!="")
  {
    WorkExaddress.innerHTML=Employerinput+" : "+CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience!=""&&CountryinputWorkexperience!=""){
    WorkExaddress.innerHTML=CityinputWorkexperience+","+CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience!=""+CountryinputWorkexperience==""){
    WorkExaddress.innerHTML=CityinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience==""+CountryinputWorkexperience!=""){
    WorkExaddress.innerHTML=CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience==""+CountryinputWorkexperience==""){
    WorkExaddress.innerHTML="";
  }
  
workexpereincetextareaT.innerHTML=WorkExtextarea;
  
  let WorkExdateT=document.getElementById("Work-Ex-date")
  WorkExdateT.innerHTML=StartDateWorkExinput+"<br>"+EndDateWorkExinput;
    }


  
})


}

function handleSubmit() {

const database = firebase.database();
var user = firebase.auth().currentUser;
   //Storing data of firstname form firebase
database.ref('users/'+user.uid+'/template5'+'/Personal-data').child('firstname').set(nameInput.value);
database.ref('users/' + user.uid +'/template5'+'/Personal-data').once('value')
.then((snapshot) => {
   const Firstname = snapshot.child('firstname').val();
   const lastname = snapshot.child('lastname').val();
   FirstnameT.innerHTML=Firstname+lastname;

   nameInput.value=Firstname;
 })


 database.ref('users/'+user.uid+'/template5'+'/Personal-data').child('Introduction').set(Introductioninput.value);
database.ref('users/' + user.uid +'/template5'+'/Personal-data'+'/Introduction').once('value')
.then((snapshot) => {
   const Introduction = snapshot.val();

   IntroductionT.innerHTML=Introduction;

 })
   //Storing data of secondname form firebase
database.ref('users/'+user.uid+'/template5'+'/Personal-data').child('lastname').set(lastnameName.value);
database.ref('users/' + user.uid +'/template5'+'/Personal-data'+'/lastname').once('value')
.then((snapshot) => {
   const lastname = snapshot.val();
   lastnameT.innerHTML=lastname;
 })
//storing data of Profession form firebase

database.ref('users/'+user.uid+'/template5'+'/Personal-data').child('profession').set(ProfessionInput.value);
database.ref('users/' + user.uid +'/template5'+'/Personal-data'+'/profession').once('value')
.then((snapshot) => {
   const Profession = snapshot.val();
   ProfessionT.innerHTML=Profession; 
 })
 
    
 database.ref('users/'+user.uid+'/template5'+'/Personal-data').child('city').set(CityInput.value);
 database.ref('users/'+user.uid+'/template5'+'/Personal-data').child('country').set(CountryInput.value);
 database.ref('users/'+user.uid+'/template5'+'/Personal-data').child('pincode').set(PinCode2Input.value)
 database.ref('users/'+user.uid+'/template5'+'/Personal-data').child('phone').set(PhoneIN.value)
 database.ref('users/'+user.uid+'/template5'+'/Personal-data').child('emailT').set(EmailIN.value)


 addrees();
 phoneandemail();
 uploadprocess();

}
  function phoneandemail(){
    const database = firebase.database();
     var user = firebase.auth().currentUser;
    database.ref('users/' + user.uid + '/template5'+'/Personal-data').once('value')
      .then((snapshot) => {
    
    const PhoneIN = snapshot.child('phone').val();
    const EmailIN=snapshot.child('emailT').val();
    const City = snapshot.child('city').val();
    const Country = snapshot.child('country').val();
    const PinCode2=snapshot.child('pincode').val();
  
    if(PhoneIN!=""){
    PhoneT.innerHTML="<b>Phone</b>";
    PhoneNumberT.innerHTML=PhoneIN;
    
        }
        else{
            PhoneT.innerHTML=PhoneIN;
    PhoneNumberT.innerHTML=PhoneIN;
        }

        if(EmailIN!=""){
            EmailT.innerHTML="<b>Email</b>";
            EmailidT.innerHTML=EmailIN;
            
                }
                else{
                    EmailT.innerHTML=EmailIN;
            EmailidT.innerHTML=EmailIN;
                }
                if(City==""&&EmailIN==""&&PhoneIN==""&&Country==""&&PinCode2==""){
                    let contactT=document.getElementById("contactT");
                    contactT.style.display="none";

                }
                else{
                  let contactT=document.getElementById("contactT");
                    contactT.style.display="block";
                }
                
  })
}
  function addrees(){
    const database = firebase.database();
    var user = firebase.auth().currentUser;
    
    database.ref('users/' + user.uid + '/template5'+'/Personal-data').once('value')
      .then((snapshot) => {
    const City = snapshot.child('city').val();
    const Country = snapshot.child('country').val();
    const PinCode2=snapshot.child('pincode').val();
  
   
  
  
    if(City==""&& Country==""&& PinCode2==""){
        address_Section.innerHTML=City;
        pincodeT.innerHTML=City;
    }
    
    else if(City!=""&&Country==""&&PinCode2==""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=City;
        pincodeT.innerHTML=addres;
    }
    else if(City!=""&&Country!=""&&PinCode2==""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=City+','+Country;
        pincodeT.innerHTML=addres;
    }
    else if(City!=""&&Country==""&&PinCode2!=""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=City+','+PinCode2;
        pincodeT.innerHTML=addres;
    }
    //for Country
    else if(City==""&&Country!=""&&PinCode2==""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=Country;
        pincodeT.innerHTML=addres;
    }
    else if(City!=""&&Country!=""&&PinCode2==""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=City+','+Country;
        pincodeT.innerHTML=addres;
    }
    else if(City==""&&Country!=""&&PinCode2!=""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=Country+','+PinCode2;
        pincodeT.innerHTML=addres;
    }
    //for Pincode
    else if(City==""&&Country==""&&PinCode2!=""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=PinCode2;
        pincodeT.innerHTML=addres;
    }
    else if(City!=""&&Country==""&&PinCode2!=""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=City+','+PinCode2;
        pincodeT.innerHTML=addres;
    }
    else{
        address_Section.innerHTML="<b>Address</b>";
        var addres=City+','+Country+','+PinCode2;
        pincodeT.innerHTML=addres;
    }});
  }


  //  var Workexpereinceaddinputsdiv=document.getElementById("Work-expereince-add-inputs-div");
  //  var workexpereinceaddbtn=document.getElementById("work-expereince-add-btn");
  //  var workexpereinceRemovebtn=document.getElementById("work-expereince-Remove-btn");
  //  function addworkexperienceinput(){

  //   var newfiled=document.createElement('input');
  //   newfiled.setAttribute('type','text');
  //   Workexpereinceaddinputsdiv.appendChild(newfiled)
  //  }
 
  // function addworkexperienceinput() {
  //   var newForm = document.createElement('form');
  //   newForm.innerHTML = document.getElementById('Work-expereince-add-inputs-div').innerHTML;
  //   document.getElementById('Work-expereince-add-inputs-div').appendChild(newForm);
  // }
  //  function workexpereinceRemovebtnfnc(){
    
  //   var input_tags=Workexpereinceaddinputsdiv.getElementsByTagName('input');
  //   if(input_tags.length>2){
  //     Workexpereinceaddinputsdiv.removeChild(input_tags[(input_tags.length)-1]);
  //   }
  //  }


  // function workexpereinceRemovebtnfnc(){
  // var forms = document.querySelectorAll('#Work-expereince-add-inputs-div form');
  // if (forms.length > 1) {
  //   forms[forms.length - 1].remove();
  // }
// }

var buttonadd = document.getElementById("work-expereince-addbtn");

var buttondelete = document.getElementById("work-expereince-Removebtn");
var clickCount = 0;

buttonadd.addEventListener('click', function() {
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  clickCount++; // Increment the click counter

  // Store the click counter in Firebase
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount);

  database.ref('users/' + user.uid +'/template5'+'/Work-Experience'+'/WorkExperienceCount').once('value')
  .then((snapshot) => {
     const WorkExperienceCount= snapshot.val();
if(WorkExperienceCount<0)
{
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount=0);
  document.getElementById("Work-expereince-add-inputs-div2").style.display="none";
  document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
  document.getElementById("work-ex-id-2T").style.display="none";
  document.getElementById("work-ex-id-3T").style.display="none";

}
else if(WorkExperienceCount==1)
{
  document.getElementById("Work-expereince-add-inputs-div2").style.display="block";
  document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
  // document.getElementById("work-ex-id-2T").style.display="block";
  // document.getElementById("work-ex-id-3T").style.display="none";
  document.getElementById("work-ex-id-2T").style.display="inline-flex";
  document.getElementById("work-ex-id-3T").style.display="none";
}
else if(WorkExperienceCount==2)
{
  document.getElementById("Work-expereince-add-inputs-div3").style.display="block";
  document.getElementById("Work-expereince-add-inputs-div2").style.display="block";
  document.getElementById("work-ex-id-2T").style.display="inline-flex";
  document.getElementById("work-ex-id-3T").style.display="inline-flex";
}
else if(WorkExperienceCount>=2)
{
  alert("Worexperence-add Limit is over")
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount=2);
}

   })



});
buttondelete.addEventListener('click', function() {
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  clickCount--; // Increment the click counter

  // Store the click counter in Firebase
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount);
  database.ref('users/' + user.uid +'/template5'+'/Work-Experience'+'/WorkExperienceCount').once('value')
  .then((snapshot) => {
     const WorkExperienceCount= snapshot.val();
     if(WorkExperienceCount<=0)
     {
       database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount=0);
       document.getElementById("Work-expereince-add-inputs-div2").style.display="none";
       document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
       deleteworEx();
       document.getElementById("work-ex-id-2T").style.display="none";
       document.getElementById("work-ex-id-3T").style.display="none";

     }
     else if(WorkExperienceCount==1)
     {deleteworEx3();
     
       document.getElementById("Work-expereince-add-inputs-div2").style.display="block";
       document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
       document.getElementById("work-ex-id-2T").style.display="inline-flex";
    
   
     }
     else if(WorkExperienceCount==2)
{ 
  document.getElementById("Work-expereince-add-inputs-div3").style.display="block";
  document.getElementById("Work-expereince-add-inputs-div2").style.display="block";
  document.getElementById("work-ex-id-2T").style.display="block";
  document.getElementById("work-ex-id-3T").style.display="block";
}
     
   })

});

var Educationaddbtn =document.getElementById("Education-addbtn");
var EducationRemovebtn=document.getElementById("Education-Removebtn");
var clickCounteducation=0;


Educationaddbtn.addEventListener('click', function() {
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  clickCounteducation++; // Increment the click counter

  // Store the click counter in Firebase

  database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation)
  database.ref('users/' + user.uid +'/template5'+'/Education'+'/EducationCount').once('value')
  .then((snapshot) => {
     const WorkExperienceCount= snapshot.val();
if(WorkExperienceCount<0)
{
  database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation=0);
  document.getElementById("Education-Form-add2").style.display="none";
  document.getElementById("Education-Form-add3").style.display="none";
  document.getElementById("education-ex-id-2T").style.display="none";
  document.getElementById("education-ex-id-3T").style.display="none";

}
else if(WorkExperienceCount==1)
{
  document.getElementById("Education-Form-add2").style.display="block";
  document.getElementById("Education-Form-add3").style.display="none";
 
  // document.getElementById("work-ex-id-2T").style.display="block";
  // document.getElementById("work-ex-id-3T").style.display="none";
  document.getElementById("education-ex-id-2T").style.display="inline-flex";
  document.getElementById("education-ex-id-3T").style.display="none";
}
else if(WorkExperienceCount==2)
{
  document.getElementById("Education-Form-add2").style.display="block";
  document.getElementById("Education-Form-add3").style.display="block";
  document.getElementById("education-ex-id-2T").style.display="inline-flex";
  document.getElementById("education-ex-id-3T").style.display="inline-flex";
}
else if(WorkExperienceCount>=2)
{
  alert("Worexperence-add Limit is over")
  database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation=2);
}

   })



});
EducationRemovebtn.addEventListener('click', function() {
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  clickCounteducation--; // Increment the click counter

  // Store the click counter in Firebase
  database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation);
  database.ref('users/' + user.uid +'/template5'+'/Education'+'/EducationCount').once('value')
  .then((snapshot) => {
     const WorkExperienceCount= snapshot.val();
     if(WorkExperienceCount<=0)
     {academicdatadeletefnc();
      database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation=0);
      document.getElementById("Education-Form-add2").style.display="none";
      document.getElementById("Education-Form-add3").style.display="none";
      document.getElementById("education-ex-id-2T").style.display="none";
      document.getElementById("education-ex-id-3T").style.display="none";

     }
     else if(WorkExperienceCount==1)
     {deleteworEx3();
     
      document.getElementById("Education-Form-add2").style.display="block";
      document.getElementById("Education-Form-add3").style.display="none";
       document.getElementById("education-ex-id-2T").style.display="inline-flex";
    
   
     }
     else if(WorkExperienceCount==2)
{ 
  document.getElementById("Education-Form-add2").style.display="block";
  document.getElementById("Education-Form-add3").style.display="block";
  document.getElementById("education-ex-id-2T").style.display="block";
  document.getElementById("education-ex-id-3T").style.display="block";
}
     
   })

});

function logout(){
    firebase.auth().signOut()
}


function templatepreviewbtn(){
  document.getElementById("TemplatePreiew").style.display="block";

}

function templatepreviewbtnno(){
  document.getElementById("TemplatePreiew").style.display="none";
}
function addsection()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;

  
var Accomplishments=document.getElementById("Accomplishments");
var Accomplishmentstextarea=document.getElementById("Accomplishments-textarea");
var Accomplishmentsdivid=document.getElementById("Accomplishmentsdivid");

var Affiliations=document.getElementById("Affiliations");
var Affiliationstextarea=document.getElementById("Affiliations-textarea");


var AdditionalInformation=document.getElementById("Additional-Information");
var AdditionalInformationtextarea=document.getElementById("Additional-Information-textarea");
var AdditionalInformationid=document.getElementById("Additional-Informationid");


var Software=document.getElementById("Software");
var Softwareinput1=document.getElementById("Softwareinput1");
var Softwareinput2=document.getElementById("Softwareinput2");
var Softwareinput3=document.getElementById("Softwareinput3");
var Softwareinput4=document.getElementById("Softwareinput4");
var Softwarediv=document.getElementById("Softwarediv");

var Languages=document.getElementById("Languages");
var Language1=document.getElementById("Language1");
var Language2=document.getElementById("Language2");
var Language3=document.getElementById("Language3");
var Language4=document.getElementById("Language4");
var Languagesdiv=document.getElementById("Languagesdiv")


var Certifications=document.getElementById("Certifications");
var CertificationDate=document.getElementById("CertificationDate");
var Certificationinfo=document.getElementById("Certificationinfo");
var Certificationdiv=document.getElementById("Certificationdiv");

var Interestsinput=document.getElementById("Interests");
var Interests1=document.getElementById("Interests1");
var Interests2 =document.getElementById("Interests2");
var Interests3 =document.getElementById("Interests3");
var Interests4 =document.getElementById("Interests4");
var Interestsdiv=document.getElementById("Interestsdiv");

var perstionalsection=document.getElementById("perstional-section");
var personalsectionaddinput=document.getElementById("personalsectionaddinput");
var useraddedsectiontextarea=document.getElementById("user-added-section-textarea");
var useraddedsection=document.getElementById("user-added-section");

  database.ref('users/'+user.uid+'/template5'+'/Add-Section').child('Accomplishments-checkbox').set(Accomplishments.checked);
  database.ref('users/'+user.uid+'/template5'+'/Add-Section').child('perstionalsection-checkbox').set(perstionalsection.checked);
   

  database.ref('users/'+user.uid+'/template5'+'/Add-Section').child('Affiliations-checkbox').set(Affiliations.checked);
   

  
  database.ref('users/'+user.uid+'/template5'+'/Add-Section').child('Additional-Information-checkbox').set(AdditionalInformation.checked);

   

  database.ref('users/'+user.uid+'/template5'+'/Add-Section').child('software-checkbox').set(Software.checked);
  database.ref('users/'+user.uid+'/template5'+'/Add-Section').child('Languages-checkbox').set(Languages.checked);


  database.ref('users/'+user.uid+'/template5'+'/Add-Section').child('Certification-checkbox').set(Certifications.checked);


 
  database.ref('users/'+user.uid+'/template5'+'/Add-Section').child('Interset').set( Interestsinput.checked);


  database.ref('users/'+user.uid+'/template5'+'/personal-section'+'/perstionalsection-checkbox').set( perstionalsection.checked);


  database.ref('users/' + user.uid +'/template5'+'/Add-Section').once('value')
.then((snapshot) => {
  
   const Accomplishmentscheckbox =snapshot.child('Accomplishments-checkbox').val();
   const Affiliationscheckbox =snapshot.child('Affiliations-checkbox').val();
   const AdditionalInformationcheckbox =snapshot.child('Additional-Information-checkbox').val();
   const softwarecheckbox =snapshot.child('software-checkbox').val();
   const Languagescheckbox =snapshot.child('Languages-checkbox').val();
   const Certificationcheckbox=snapshot.child('Certification-checkbox').val();
   const Interset=snapshot.child('Interset').val();
   const perstionalsection=snapshot.child('perstionalsection-checkbox').val();

   if(Accomplishmentscheckbox==true)
   {
  
    var AcomplisTemplateDividT=document.getElementById("AcomplisTemplateDividT").style.display="block";

    var Accomplishments=document.getElementById("Accomplishments");
    Accomplishments.checked=true;
    


  var Accomplishmentsdivid=document.getElementById("Accomplishmentsdivid").style.display="block";
  
  }
  else{
    var Accomplishments=document.getElementById("Accomplishments");
    Accomplishments.checked=false;
    var Accomplishmentsdivid=document.getElementById("Accomplishmentsdivid").style.display="none";
    var AcomplisTemplateDividT=document.getElementById("AcomplisTemplateDividT").style.display="none";
  }

  
  if(Affiliationscheckbox==true)
  {var Affiliations=document.getElementById("Affiliations");
  var AffiliationsTdiv=document.getElementById("AffiliationsTdiv").style.display="block";
  Affiliations.checked=true;
 var Accomplishmentsdivid=document.getElementById("Affiliationsiddiv").style.display="block";
 }
 else{
  var Affiliations=document.getElementById("Affiliations");
  Affiliations.checked=false;
  var AffiliationsTdiv=document.getElementById("AffiliationsTdiv").style.display="none";
   var Accomplishmentsdivid=document.getElementById("Affiliationsiddiv").style.display="none";
 }

 if(AdditionalInformationcheckbox==true)
 {
  var AdditionalInformation=document.getElementById("Additional-Information");
  AdditionalInformation.checked=true;
  var AdditionalInformationdivT=document.getElementById("AdditionalInformationdivT").style.display="block";
  var Accomplishmentsdivid=document.getElementById("Additional-Informationid").style.display="block";
 }

 else{
  var AdditionalInformation=document.getElementById("Additional-Information");
  AdditionalInformation.checked=false;
  var AdditionalInformationdivT=document.getElementById("AdditionalInformationdivT").style.display="none";
  var Accomplishmentsdivid=document.getElementById("Additional-Informationid").style.display="none";
 }


 if(softwarecheckbox==true)
 {
  
var Software=document.getElementById("Software");
Software.checked=true;
  Software.checked=true;
  var Softwarediv=document.getElementById("Softwarediv").style.display="block";
  document.getElementById("SoftwareT").style.display="block";
 }
 else{
  var Software=document.getElementById("Software");
  Software.checked=false;
  var Softwarediv=document.getElementById("Softwarediv").style.display="none";
  document.getElementById("SoftwareT").style.display="none";
 }

 if(Languagescheckbox==true)
 {
  var Languages=document.getElementById("Languages");
  Languages.checked=true;
  document.getElementById("LanguagesT").style.display="block"
  var Softwarediv=document.getElementById("Languagesdiv").style.display="block";
 }
 else{
  var Languages=document.getElementById("Languages");
  Languages.checked=false;
  document.getElementById("LanguagesT").style.display="none"
  var Softwarediv=document.getElementById("Languagesdiv").style.display="none";
 }


 if(Certificationcheckbox==true)
 {var Certifications=document.getElementById("Certifications");
  Certifications.checked=true;
  document.getElementById("CertificationTdiv").style.display="block";
  var Softwarediv=document.getElementById("Certificationdiv").style.display="block";
 }
 else{var Certifications=document.getElementById("Certifications");
  Certifications.checked=false;
  document.getElementById("CertificationTdiv").style.display="none";
  var Softwarediv=document.getElementById("Certificationdiv").style.display="none";
 }

 if(Interset==true)
 {
  var Interestsinput=document.getElementById("Interests");
  Interestsinput.checked=true;
  var Softwarediv=document.getElementById("Interestsdiv").style.display="block";
  document.getElementById("IntersetdivT").style.display="block";
 }
 else{
  var Interestsinput=document.getElementById("Interests");
  Interestsinput.checked=false;
  document.getElementById("IntersetdivT").style.display="none";
  var Softwarediv=document.getElementById("Interestsdiv").style.display="none";
 }
 if(perstionalsection==true)
 {

  
var perstionalsections=document.getElementById("perstional-section");
perstionalsections.checked=true;
  var personalsectionaddinput=document.getElementById("personalsectionaddinput");
  database.ref('users/'+user.uid+'/template5'+'/personal-section'+'/personal-section-heading').set(personalsectionaddinput.value);
var personalsectiondivT=document.getElementById("personal-section-divT").style.display="block";
database.ref('users/' + user.uid +'/template5'+'/personal-section'+'/personal-section-heading').once('value')
.then((snapshot) => {
   const personalsectionaddinput = snapshot.val();
   document.getElementById("user-added-sectionh1").innerHTML=personalsectionaddinput;
document.getElementById("user-section-heading").innerHTML=personalsectionaddinput;
 })
  var useraddedsection=document.getElementById("user-added-section").style.display="block";
 }
 else{
  
  var perstionalsections=document.getElementById("perstional-section");
perstionalsections.checked=false;
  var personalsectiondivT=document.getElementById("personal-section-divT").style.display="none";
  var useraddedsection=document.getElementById("user-added-section").style.display="none";
 }
 })

}

function Affiliationsinfo()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  var Affiliationstextarea=document.getElementById("Affiliations-textarea");
  database.ref('users/'+user.uid+'/template5'+'/Affiliations').child('Affiliations-info').set(Affiliationstextarea.value);
  database.ref('users/' + user.uid +'/template5'+'/Affiliations'+'/Affiliations-info').once('value')
  .then((snapshot) => {
     const Affiliationsinfo = snapshot.val();

     var AffiliationsT=document.getElementById("AffiliationsT").innerHTML=Affiliationsinfo;
     Affiliationstextarea.value =Affiliationsinfo; 
   })
}


function AdditionalInformationinfo()
{ const database = firebase.database();
  var user = firebase.auth().currentUser;
 var  AdditionalInformationtextarea=document.getElementById("Additional-Information-textarea");
 database.ref('users/'+user.uid+'/template5'+'/Additional-Information').child('Additional-Information-info').set(AdditionalInformationtextarea.value);
 database.ref('users/' + user.uid +'/template5'+'/Additional-Information'+'/Additional-Information-info').once('value')
 .then((snapshot) => {
    const AdditionalInformationinfo = snapshot.val();

    var AdditionalInformationT=document.getElementById("Additional-InformationT").innerHTML=AdditionalInformationinfo;
    AdditionalInformationtextarea.value =AdditionalInformationinfo; 
  })
}


function Certificationinfo()
{ const database = firebase.database();
  var user = firebase.auth().currentUser;
 var Certificationinfo=document.getElementById("Certificationinfo");
 var CertificationDate=document.getElementById("CertificationDate");
 database.ref('users/'+user.uid+'/template5'+'/Certification').child('CertificationDate').set(CertificationDate.value);
 database.ref('users/'+user.uid+'/template5'+'/Certification').child('Certification-info').set(Certificationinfo.value);
 database.ref('users/' + user.uid +'/template5'+'/Certification').once('value')
 .then((snapshot) => {
    const Certificationinfos = snapshot.child('Certification-info').val();
    const CertificationDate = snapshot.child('CertificationDate').val();
    var CertificationDateinfo=document.getElementById("CertificationDateinfo").innerHTML=CertificationDate;
    var CertificationT=document.getElementById("CertificationT").innerHTML=Certificationinfos;
    CertificationDate.value=CertificationDate;
    Certificationinfo.value =Certificationinfos; 
  })

}

function Interestsinfo(){
  const database = firebase.database();
  var user = firebase.auth().currentUser;

  var Interests1=document.getElementById("Interests1");
  var Interests2=document.getElementById("Interests2");
  var Interests3=document.getElementById("Interests3");
  database.ref('users/'+user.uid+'/template5'+'/Interest').child('Interests1-info').set(Interests1.value);
  database.ref('users/'+user.uid+'/template5'+'/Interest').child('Interests2-info').set(Interests2.value);
  database.ref('users/'+user.uid+'/template5'+'/Interest').child('Interests3-info').set(Interests3.value);
  database.ref('users/' + user.uid +'/template5'+'/Interest').once('value')
.then((snapshot) => {
   const Interests1info = snapshot.child('Interests1-info').val();
   const Interests2info = snapshot.child('Interests2-info').val();
   const Interests3info = snapshot.child('Interests3-info').val();
   var IntersetdivT1=document.getElementById("IntersetdivT1").innerHTML=Interests1info;
   var IntersetdivT2=document.getElementById("IntersetdivT2").innerHTML=Interests2info;
   var IntersetdivT3=document.getElementById("IntersetdivT3").innerHTML=Interests3info;
   Interests1.value =Interests1info; 
   Interests2.value =Interests2info; 
   Interests3.value =Interests3info; 

 })


}


function personalsectioninfo()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  var Accomplishmentstextarea=document.getElementById("Accomplishments-textarea");
  var personalsectionT=document.getElementById("personal-section-T");
  var useraddedsectiontextarea=document.getElementById("user-added-section-textarea");
  database.ref('users/'+user.uid+'/template5'+'/personal-section'+'/personal-section-info').set(useraddedsectiontextarea.value);


  database.ref('users/' + user.uid +'/template5'+'/personal-section'+'/personal-section-info').once('value')
.then((snapshot) => {
   const Accomplishmentsinfo = snapshot.val();
   var AcomplistextareaT=document.getElementById("personal-section-T").innerHTML=Accomplishmentsinfo;
   useraddedsectiontextarea.value =Accomplishmentsinfo; 
 })
 
  
}
function softwareinfo()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  var Softwareinput1=document.getElementById("Softwareinput1");
  var Softwareinput2=document.getElementById("Softwareinput2");
  var Softwareinput3=document.getElementById("Softwareinput3");
  var Softwareinput4=document.getElementById("Softwareinput4");
  database.ref('users/'+user.uid+'/template5'+'/Software').child('Softwareinput1-info').set(Softwareinput1.value);
  database.ref('users/'+user.uid+'/template5'+'/Software').child('Softwareinput2-info').set(Softwareinput2.value);
  database.ref('users/'+user.uid+'/template5'+'/Software').child('Softwareinput3-info').set(Softwareinput3.value);
  database.ref('users/'+user.uid+'/template5'+'/Software').child('Softwareinput4-info').set(Softwareinput4.value);
  database.ref('users/' + user.uid +'/template5'+'/Software').once('value')
  .then((snapshot) => {
     const Interests1info = snapshot.child('Softwareinput1-info').val();
     const Interests2info = snapshot.child('Softwareinput2-info').val();
     const Interests3info = snapshot.child('Softwareinput3-info').val();
     const Interests4info = snapshot.child('Softwareinput4-info').val();
     var Skill1T=document.getElementById("Skill1T").innerHTML=Interests1info;
     var Skill2T=document.getElementById("Skill2T").innerHTML=Interests2info;
     var Skill3T=document.getElementById("Skill3T").innerHTML=Interests3info;
     var Skill3T=document.getElementById("Skill3T").innerHTML=Interests3info;
     var Skill4T=document.getElementById("Skill4T").innerHTML=Interests4info;
     Softwareinput1.value =Interests1info; 
     Softwareinput2.value =Interests2info; 
     Softwareinput3.value =Interests3info; 
     Softwareinput4.value =Interests4info; 
  
   })
}

function Languageinfo()
{const database = firebase.database();
  var user = firebase.auth().currentUser;

  var Language1=document.getElementById("Language1");
  var Language2=document.getElementById("Language2");
  var Language3=document.getElementById("Language3");
  var Language4=document.getElementById("Language4");

  database.ref('users/'+user.uid+'/template5'+'/Language').child('Language1-info').set(Language1.value);
  database.ref('users/'+user.uid+'/template5'+'/Language').child('Language2-info').set(Language2.value);
  database.ref('users/'+user.uid+'/template5'+'/Language').child('Language3-info').set(Language3.value);
  database.ref('users/'+user.uid+'/template5'+'/Language').child('Language4-info').set(Language4.value);

  database.ref('users/' + user.uid +'/template5'+'/Language').once('value')
  .then((snapshot) => {
     const Interests1info = snapshot.child('Language1-info').val();
     const Interests2info = snapshot.child('Language2-info').val();
     const Interests3info = snapshot.child('Language3-info').val();
     const Interests4info = snapshot.child('Language4-info').val();
     var Skill1T=document.getElementById("Language1T").innerHTML=Interests1info;
     var Skill2T=document.getElementById("Language2T").innerHTML=Interests2info;
     var Skill3T=document.getElementById("Language3T").innerHTML=Interests3info;
      var Skill4T=document.getElementById("Language4T").innerHTML=Interests4info;
      Language1.value =Interests1info; 
      Language2.value =Interests2info; 
      Language3.value =Interests3info; 
      Language4.value =Interests4info; 
  
   })

}

function skillinfo()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  var Skillinput1=document.getElementById("Skill-input1");
  var Skillinput2=document.getElementById("Skill-input2");
  var Skillinput3=document.getElementById("Skill-input3");
  var Skillinput4=document.getElementById("Skill-input4");

  database.ref('users/'+user.uid+'/template5'+'/skill').child('Skill-input1').set(Skillinput1.value);
  database.ref('users/'+user.uid+'/template5'+'/skill').child('Skill-input2').set(Skillinput2.value);
  database.ref('users/'+user.uid+'/template5'+'/skill').child('Skill-input3').set(Skillinput3.value);
  database.ref('users/'+user.uid+'/template5'+'/skill').child('Skill-input4').set(Skillinput4.value);

  database.ref('users/' + user.uid +'/template5'+'/skill').once('value')
  .then((snapshot) => {
     const Interests1info = snapshot.child('Skill-input1').val();
     const Interests2info = snapshot.child('Skill-input2').val();
     const Interests3info = snapshot.child('Skill-input3').val();
     const Interests4info = snapshot.child('Skill-input4').val();
     var Skill1T=document.getElementById("skill1ST").innerHTML=Interests1info;
     var Skill2T=document.getElementById("skill2ST").innerHTML=Interests2info;
     var Skill3T=document.getElementById("skill3ST").innerHTML=Interests3info;
      var Skill4T=document.getElementById("skill4ST").innerHTML=Interests4info;
      if(Interests1info==""&&Interests2info ==""&&Interests3info ==""&& Interests4info=="")
      {

        document.getElementById("SkillT-H").style.display="none";
      }
  else{
    document.getElementById("SkillT-H").style.display="block";
          var Skill1T=document.getElementById("skill1ST").innerHTML=Interests1info;
     var Skill2T=document.getElementById("skill2ST").innerHTML=Interests2info;
     var Skill3T=document.getElementById("skill3ST").innerHTML=Interests3info;
      var Skill4T=document.getElementById("skill4ST").innerHTML=Interests4info;
      Skillinput1.value =Interests1info; 
      Skillinput2.value =Interests2info; 
      Skillinput3.value =Interests3info; 
      Skillinput4.value =Interests4info; 
  }
  
  
   })

}

function Accomplishmentinfo()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  var Accomplishmentstextarea=document.getElementById("Accomplishments-textarea");
  database.ref('users/'+user.uid+'/template5'+'/Accompliments').child('Accomplishments-info').set(Accomplishmentstextarea.value);

  database.ref('users/' + user.uid +'/template5'+'/Accompliments'+'/Accomplishments-info').once('value')
.then((snapshot) => {
   const Accomplishmentsinfo = snapshot.val();
   var AcomplistextareaT=document.getElementById("Acomplis-textareaT").innerHTML=Accomplishmentsinfo;
   Accomplishmentstextarea.value =Accomplishmentsinfo; 
 })
 



}

function deleteworEx()
{

  const database = firebase.database();
  var user = firebase.auth().currentUser;
  var Jobtitleinputw2="";


let WorkExtextarea="";


  let Employerinput="";
  let EndDateWorkExinput=""
  let StartDateWorkExinput=""
  let CityinputWorkexperience=""
  let CountryinputWorkexperience=""

  document.getElementById("Work-expereince-add-inputs-div2").reset();
 
  let WorkExdateT=document.getElementById("Work-Ex-date")
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('Job-Title').set(Jobtitleinputw2)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('Employer-Position').set(Employerinput)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('City-Work').set(CityinputWorkexperience)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('Country').set(CountryinputWorkexperience)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('Start-Date').set(StartDateWorkExinput)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('End-Date').set(EndDateWorkExinput)

  database.ref('users/'+user.uid+'/template5'+'/Work-Experience2').child('Work-Experience-Info').set(WorkExtextarea)
}

function deleteworEx3()
{

  const database = firebase.database();
  var user = firebase.auth().currentUser;
  var Jobtitleinputw2="";


let WorkExtextarea="";


  let Employerinput="";
  let EndDateWorkExinput=""
  let StartDateWorkExinput=""
  let CityinputWorkexperience=""
  let CountryinputWorkexperience=""
document.getElementById("work-ex-id-3T").style.display=
  document.getElementById("Work-expereince-add-inputs-div3").reset();
 
  let WorkExdateT=document.getElementById("Work-Ex-date")
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('Job-Title').set(Jobtitleinputw2)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('Employer-Position').set(Employerinput)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('City-Work').set(CityinputWorkexperience)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('Country').set(CountryinputWorkexperience)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('Start-Date').set(StartDateWorkExinput)
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('End-Date').set(EndDateWorkExinput)

  database.ref('users/'+user.uid+'/template5'+'/Work-Experience3').child('Work-Experience-Info').set(WorkExtextarea)
}



document.getElementById("Work-expereince-add-inputs-div2-delete-btn").addEventListener("click",(event)=>{
  event.preventDefault()
})
document.getElementById("Work-expereince-add-inputs-div3-delete-btn").addEventListener("click",(event)=>{
  event.preventDefault()
})

document.getElementById("education-add-inputs-div2-delete-btn2").addEventListener("click",(event)=>{
  event.preventDefault()
})

document.getElementById("education-add-inputs-div2-delete-btn3").addEventListener("click",(event)=>{
  event.preventDefault()
})
function deletebtnw2fnc()
{
  // deleteworEx();

  const database = firebase.database();
  var user = firebase.auth().currentUser;
  clickCount--; // Increment the click counter

  // Store the click counter in Firebase
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount);
  database.ref('users/' + user.uid +'/template5'+'/Work-Experience'+'/WorkExperienceCount').once('value')
  .then((snapshot) => {
     const WorkExperienceCount= snapshot.val();
     if(WorkExperienceCount<=0)
     {
       database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount=0);
       document.getElementById("Work-expereince-add-inputs-div2").style.display="none";
      //  document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
       deleteworEx();
       document.getElementById("work-ex-id-2T").style.display="none";
      //  document.getElementById("work-ex-id-3T").style.display="none";

     }
//      else if(WorkExperienceCount==1)
//      {deleteworEx3();
     
//        document.getElementById("Work-expereince-add-inputs-div2").style.display="block";
//        document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
//        document.getElementById("work-ex-id-2T").style.display="inline-flex";
    
   
//      }
//      else if(WorkExperienceCount==2)
// { 
//   document.getElementById("Work-expereince-add-inputs-div3").style.display="block";
//   document.getElementById("Work-expereince-add-inputs-div2").style.display="block";
//   document.getElementById("work-ex-id-2T").style.display="block";
//   document.getElementById("work-ex-id-3T").style.display="block";
// }
     
   })


}


function deletebtnw3fnc()
{
  // deleteworEx();

  const database = firebase.database();
  var user = firebase.auth().currentUser;
  clickCount--; // Increment the click counter

  // Store the click counter in Firebase
  database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount);
  database.ref('users/' + user.uid +'/template5'+'/Work-Experience'+'/WorkExperienceCount').once('value')
  .then((snapshot) => {
     const WorkExperienceCount= snapshot.val();
     if(WorkExperienceCount<=0)
     {
       database.ref('users/'+user.uid+'/template5'+'/Work-Experience').child('WorkExperienceCount').set(clickCount=0);
      //  document.getElementById("Work-expereince-add-inputs-div2").style.display="none";
      //  document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
      //  deleteworEx();
      //  document.getElementById("work-ex-id-2T").style.display="none";
      //  document.getElementById("work-ex-id-3T").style.display="none";

     }
     if(WorkExperienceCount==1)
     {deleteworEx3();
     
     
       document.getElementById("Work-expereince-add-inputs-div3").style.display="none";
        document.getElementById("work-ex-id-3T").style.display="none";

    
   
     }
//      else if(WorkExperienceCount==2)
// { 
//   document.getElementById("Work-expereince-add-inputs-div3").style.display="block";
//   document.getElementById("Work-expereince-add-inputs-div2").style.display="block";
//   document.getElementById("work-ex-id-2T").style.display="block";
//   document.getElementById("work-ex-id-3T").style.display="block";
// }
     
   })


}



function academicdatadeletefnc()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  
let SchoolNameinput="";
let SchoolLocationinput="";
let Degreeinput="";
let FieldofStudy=""
 let GraduationStartDate="";
let GraduationEndDate="";
let Educationtextarea="";

  database.ref('users/'+user.uid+'/template5'+'/Education2').child('School-Name').set(SchoolNameinput)
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('School-Location').set(SchoolLocationinput)
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('Degree').set(Degreeinput)
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('Field-of-Study').set(FieldofStudy)
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('Graduation-Start-Date').set(GraduationStartDate)
  database.ref('users/'+user.uid+'/template5'+'/Education2').child('Graduation-End-Date').set(GraduationEndDate)

  database.ref('users/'+user.uid+'/template5'+'/Education2').child('Education-Info').set(Educationtextarea)
 
}

function academicdatadeletefnc2()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  
let SchoolNameinput="";
let SchoolLocationinput="";
let Degreeinput="";
let FieldofStudy=""
 let GraduationStartDate="";
let GraduationEndDate="";
let Educationtextarea="";

  database.ref('users/'+user.uid+'/template5'+'/Education3').child('School-Name').set(SchoolNameinput)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('School-Location').set(SchoolLocationinput)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Degree').set(Degreeinput)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Field-of-Study').set(FieldofStudy)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Graduation-Start-Date').set(GraduationStartDate)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Graduation-End-Date').set(GraduationEndDate)

  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Education-Info').set(Educationtextarea)
 
}
function academicdatadeletefncdeletebtn3()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;

  clickCounteducation--
  database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation);
  database.ref('users/' + user.uid +'/template5'+'/Education'+'/EducationCount').once('value')
  .then((snapshot) => {
     const WorkExperienceCount= snapshot.val();
     if(WorkExperienceCount<=0)
     {
      database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation=0);
 

     }
     else if(WorkExperienceCount==1)
     {
     
      academicdatadeletefnc3();
      document.getElementById("Education-Form-add3").style.display="none";
       document.getElementById("education-ex-id-3T").style.display="none";
    
   
     }
//      else if(WorkExperienceCount==2)
// { 
//   document.getElementById("Education-Form-add2").style.display="block";
//   document.getElementById("Education-Form-add3").style.display="block";
//   document.getElementById("education-ex-id-2T").style.display="block";
//   document.getElementById("education-ex-id-3T").style.display="block";
// }
     
   })

}

function academicdatadeletefncdeletebtn()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;

  clickCounteducation--
  database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation);
  database.ref('users/' + user.uid +'/template5'+'/Education'+'/EducationCount').once('value')
  .then((snapshot) => {
     const WorkExperienceCount= snapshot.val();
     if(WorkExperienceCount<=0)
     {academicdatadeletefnc();
      database.ref('users/'+user.uid+'/template5'+'/Education').child('EducationCount').set(clickCounteducation=0);
      document.getElementById("Education-Form-add2").style.display="none";
      // document.getElementById("Education-Form-add3").style.display="none";
      document.getElementById("education-ex-id-2T").style.display="none";
      // document.getElementById("education-ex-id-3T").style.display="none";

     }
//      else if(WorkExperienceCount==1)
//      {deleteworEx3();
     
//       document.getElementById("Education-Form-add2").style.display="block";
//       document.getElementById("Education-Form-add3").style.display="none";
//        document.getElementById("education-ex-id-2T").style.display="inline-flex";
    
   
//      }
//      else if(WorkExperienceCount==2)
// { 
//   document.getElementById("Education-Form-add2").style.display="block";
//   document.getElementById("Education-Form-add3").style.display="block";
//   document.getElementById("education-ex-id-2T").style.display="block";
//   document.getElementById("education-ex-id-3T").style.display="block";
// }
     
   })

}


function academicdatadeletefnc3()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  
let SchoolNameinput="";
let SchoolLocationinput="";
let Degreeinput="";
let FieldofStudy=""
 let GraduationStartDate="";
let GraduationEndDate="";
let Educationtextarea="";



  database.ref('users/'+user.uid+'/template5'+'/Education3').child('School-Name').set(SchoolNameinput)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('School-Location').set(SchoolLocationinput)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Degree').set(Degreeinput)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Field-of-Study').set(FieldofStudy)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Graduation-Start-Date').set(GraduationStartDate)
  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Graduation-End-Date').set(GraduationEndDate)

  database.ref('users/'+user.uid+'/template5'+'/Education3').child('Education-Info').set(Educationtextarea)


  

}

function workexperinceformfnc()
{
  Workexperiencedata();Workexperiencedata2();
  
  Workexperiencedata3()
}

function academicdataformfnc(){
  academicdata3();
  academicdata2();
  academicdata();
}

function addsectionformfnc(){
  Accomplishmentinfo();
  Affiliationsinfo();
  AdditionalInformationinfo();
  softwareinfo();
  Languageinfo();
  Certificationinfo();
  personalsectioninfo();
  Interestsinfo();
}
