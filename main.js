var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function Start() {
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript ;
    if (content == "selfie")
    {
     Speak() ;
    }   
}

camera = document.getElementById("webcam");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function Speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
     setTimeout (function() 
     {
        selfie_id = "selfie1";
        speak_data = "Taking your selfie in 5 seconds";
        take_snapshot();
        utterThis = new SpeechSynthesisUtterance(speak_data);
       synth.speak(utterThis);
    } , 5000);

    setTimeout (function() 
    {
       selfie_id = "selfie2";
       speak_data = "Taking your selfie in 10 seconds";
       take_snapshot() ;
       utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
   } , 10000);

   setTimeout (function() 
   {
      selfie_id = "selfie3";
      speak_data = "Taking your selfie in 15 seconds";
      take_snapshot() ;
      utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
  } , 15000);
}

function take_snapshot() {
    console.log(selfie_id);
   Webcam.snap ( function(data_url) {
       if(selfie_id=="selfie1") {
        document.getElementById('selfie1').innerHTML = '<img id="s1"  src="'+data_url+'"/>';
       }
       if(selfie_id=="selfie2") {
        document.getElementById("selfie2").innerHTML = '<img id="s2" src="'+data_url+'"/>';
    }
    if(selfie_id=="selfie3") {
        document.getElementById("selfie3").innerHTML = '<img id="s3" src="'+data_url+'"/>';
    }
} );
   }
