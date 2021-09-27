Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function capture (){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="blahh" src="'+data_uri+'">';
}
);
}
console.log("ml5 version : ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gHg-ueu3p/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is"+prediction1;
    speakdata2="And the second prediction is"+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}
function identify(){
img = document.getElementById("blahh");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    prediction1=results[0].label;
    prediction2=results[1].label;
    speak();
    if(results[0].label=="happy"){
document.getElementById("update_emoji").innerHTML="&#128513;"; }

if(results[0].label=="sad"){
    document.getElementById("update_emoji").innerHTML="&#128532;"; }

    if(results[0].label=="angry"){
        document.getElementById("update_emoji").innerHTML="&#128545;"; }

        if(results[0].label=="crying"){
            document.getElementById("update_emoji").innerHTML="&#128546;"; }

            if(results[0].label=="tired"){
                document.getElementById("update_emoji").innerHTML="&#128555;"; }

                if(results[0].label=="yanwing"){
                    document.getElementById("update_emoji").innerHTML="&#129393;"; }

        if(results[1].label=="angry"){
            document.getElementById("update_emoji2").innerHTML="&#128545;"; }

            if(results[1].label=="sad"){
                document.getElementById("update_emoji2").innerHTML="&#128532;"; }

                if(results[1].label=="happy"){
                    document.getElementById("update_emoji2").innerHTML="&#128513;"; }

                    if(results[1].label=="crying"){
                        document.getElementById("update_emoji2").innerHTML="&#128546;"; }
            
                        if(results[1].label=="tired"){
                            document.getElementById("update_emoji2").innerHTML="&#128555;"; }
            
                            if(results[1].label=="yanwing"){
                                document.getElementById("update_emoji2").innerHTML="&#129393;"; }
}
}