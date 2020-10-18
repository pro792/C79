student=[];
function Submit(){
    var n1=document.getElementById("name1").value;
    var n2=document.getElementById("name2").value;
    var n3=document.getElementById("name3").value;
    var n4=document.getElementById("name4").value;

    student.push(n1);
    student.push(n2);
    student.push(n3);
    student.push(n4);


console.log(student);

document.getElementById("display").innerHTML=student;
document.getElementById("Submit").style.display="none";
document.getElementById("Sort").style.display="inline-block";



}

function Sorting(){
    student.sort();
    console.log(student);

document.getElementById("display").innerHTML=student;

}