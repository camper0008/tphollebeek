function updateClock ( )
{
    
    var dayStart = "09:00:00"; //tjek ind (Mandag, Tirsdag, Onsdag, Torsdag)
    var dayEnd = "15:00:00"; //tjek ud (Mandag, Tirsdag, Onsdag, Torsdag)
    var dayEndFriday = "11:30:00"; //tjek ud (fredag)
// var dayEndTest = "19:30:00";
    var BiHeVistart = "14:20:01"; //tjek ud tid starter -Viborg (Mandag, tirsdag & Onsdag)
    var BiHeViend = "14:45:01"; // tjek ud tid stopper -Viborg (Mandag, tirsdag & Onsdag)
    var BiHeKastart = "14:06:01"; //tjek ud tid starter -Karup (tirsdag)
    var BiHeKaend = "14:19:00";// tjek ud tid stopper -Karup (tirsdag)
    var BiHeBjstart = "14:06:01";//tjek ud tid starter -Bjeringbro (torsdag)
    var BiHeBjend = "14:19:00";// tjek ud tid stopper -Bjeringbro (torsdag)
    var BiTLstart = "14:20:01";//tjek ud tid starter -Testlab (Mandag & Onsdag)
    var BiTLend = "14:45:00";// tjek ud tid stopper -Testlab (Mandag & Onsdag)
    var GTstart = "13:50:01";//tjek ud tid starter -Gåtur (Torsdag)
    var GTend = "14:05:00";// tjek ud tid stopper -Gåtur (Torsdag)
    var EAstart = "09:00:00";//efter aftale
    var EAend = "15:00:00";//efter aftale
    var HVstart = "14:00:00";//handi vagt
    var HVend = "15:00:00";//handi vagt
    var HCstart = "13:45:01";//hACKING KLUP
    var HCend = "14:20:00";// HACKING KLUP
    
    var currentTime = new Date ( );
    //currentTime = new Date("09/05/2018 10:21:00");



    var weekDay = currentTime.getDay();
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );

    var currentTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + curentHours + ":" + currentMinutes + ":" + currentSeconds);
    var normalStartTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + dayStart);
    var normalEndTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + dayEnd);
    var normalEndFridayTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + dayEndFriday);
// var normalEndTestTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + dayEndTest);
    var BiHeVistartTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + BiHeVistart);
    var BiHeViendTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + BiHeViend);
    var BiHeKastartTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + BiHeKastart);
    var BiHeKaendTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + BiHeKaend);
    var BiHeBjstartTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + BiHeBjstart);
    var BiHeBjendTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + BiHeBjend);
    var BiTLstartTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + BiTLstart);
    var BiTLendTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + BiTLend);
    var GTstartTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + GTstart);
    var GTendTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + GTend);
    var EAstartTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + EAstart);
    var EAendTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + EAend);
    var HVstartTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + HVstart);
    var HVendTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + HVend);
    var HCstartTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + HCstart);
    var HCendTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + HCend);


    normalStartTimeStamp = normalStartTimeStamp.getTime();
    normalEndTimeStamp = normalEndTimeStamp.getTime();
    normalEndFridayTimeStamp = normalEndFridayTimeStamp.getTime();
// normalEndTestTimeStamp = normalEndTestTimeStamp.getTime();
    currentTimeStamp = currentTimeStamp.getTime();
    BiHeVistartTimeStamp = BiHeVistartTimeStamp.getTime();
    BiHeViendTimeStamp = BiHeViendTimeStamp.getTime();
    BiHeKastartTimeStamp = BiHeKastartTimeStamp.getTime();
    BiHeKaendTimeStamp = BiHeKaendTimeStamp.getTime();
    BiHeBjstartTimeStamp = BiHeBjstartTimeStamp.getTime();
    BiHeBjendTimeStamp = BiHeBjendTimeStamp.getTime();
    BiTLstartTimeStamp = BiTLstartTimeStamp.getTime();
    BiTLendTimeStamp = BiTLendTimeStamp.getTime();
    GTstartTimeStamp = GTstartTimeStamp.getTime();
    GTendTimeStamp = GTendTimeStamp.getTime();
    EAstartTimeStamp = EAstartTimeStamp.getTime();
    EAendTimeStamp = EAendTimeStamp.getTime();
    HVstartTimeStamp = HVstartTimeStamp.getTime();
    HVendTimeStamp = HVendTimeStamp.getTime();
    HCstartTimeStamp = HCstartTimeStamp.getTime();
    HCendTimeStamp = HCendTimeStamp.getTime();
    
    if(currentHours < 10) {
        currentHours = "0" + currentHours;
    }
    
    if(currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    
    if(currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }
    
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

    if(
      ( currentTimeStamp > BiHeVistartTimeStamp ) && ( currentTimeStamp < BiHeViendTimeStamp ) && ( weekDay == 1 ) ||
      ( currentTimeStamp > BiHeVistartTimeStamp ) && ( currentTimeStamp < BiHeViendTimeStamp ) && ( weekDay == 2 ) ||
      ( currentTimeStamp > BiHeVistartTimeStamp ) && ( currentTimeStamp < BiHeViendTimeStamp ) && ( weekDay == 3 )
    ){
        
        $("#BiHeVi").addClass("valid");
        $("#BiHeVi").removeClass("invalid");
    }else{
        $("#BiHeVi").removeClass("valid");
        $("#BiHeVi").addClass("invalid");
    }
    
    if(
      ( currentTimeStamp > BiHeKastartTimeStamp ) && ( currentTimeStamp < BiHeKaendTimeStamp ) && ( weekDay == 2 )
    ){
        $("#BiHeKa").addClass("valid");
        $("#BiHeKa").removeClass("invalid");
    }else{
        $("#BiHeKa").removeClass("valid");
        $("#BiHeKa").addClass("invalid");
    }
    
    if(
      ( currentTimeStamp > HCstartTimeStamp ) && ( currentTimeStamp < HCendTimeStamp ) && ( weekDay == 2 )
    ){
        $("#HC").addClass("valid");
        $("HC").removeClass("invalid");
    }else{
        $("#HC").removeClass("valid");
        $("#HC").addClass("invalid");
    }
    
    if(
      ( currentTimeStamp > BiHeBjstartTimeStamp ) && ( currentTimeStamp < BiHeBjendTimeStamp ) && ( weekDay == 4 )
    ){
        $("#BiHeBj").addClass("valid");
        $("#BiHeBj").removeClass("invalid");
    }else{
        $("#BiHeBj").removeClass("valid");
        $("#BiHeBj").addClass("invalid");
    }
    if(
      ( currentTimeStamp > BiTLstartTimeStamp ) && ( currentTimeStamp < BiTLendTimeStamp ) && ( weekDay == 1 ) ||
      ( currentTimeStamp > BiTLstartTimeStamp ) && ( currentTimeStamp < BiTLendTimeStamp ) && ( weekDay == 3 ) 
    ){
        $("#BiTL").addClass("valid");
        $("#BiTL").removeClass("invalid");
    }else{
        $("#BiTL").removeClass("valid");
        $("#BiTL").addClass("invalid");
    }
    
    
    
    if( 
      ( currentTimeStamp > EAstartTimeStamp ) && ( currentTimeStamp < EAendTimeStamp )
    ){
        $("#EA").addClass("valid");
        $("#EA").removeClass("invalid");
    }else{
        $("#EA").removeClass("valid");
        $("#EA").addClass("invalid");
    }
    
    

    if( 
      ( currentTimeStamp > HVstartTimeStamp ) && ( currentTimeStamp < HVendTimeStamp ) && ( weekDay == 2 )
    ){
        $("#HV").addClass("valid");
        $("#HV").removeClass("invalid");
    }else{
        $("#HV").removeClass("valid");
        $("#HV").addClass("invalid");
    }
    
    if( 
      ( currentTimeStamp > HCstartTimeStamp ) && ( currentTimeStamp < HCendTimeStamp ) && ( weekDay == 2 )
    ){
        $("#HC").addClass("valid");
        $("#HC").removeClass("invalid");
    }else{
        $("#HC").removeClass("valid");
        $("#HC").addClass("invalid");
    }
    
    

    if(weekDay > 0 && weekDay < 5){
        if(
          currentTimeStamp < normalStartTimeStamp
        ){
            $("#clock").addClass("greenClock");
            $("#clock").removeClass("redClock");
            if( currentTimeStamp < normalStartTimeStamp ){$("#notice").html('<p style="font-size:3vh; color:rgb(59, 229, 76);margin-top: -2vh;">Du kan nu logge ind</p>');}
            else {$("#notice").html('<p style="font-size:3vh; color:green;margin-top: -2vh;">Du kan nu logge ud</p>');}
        }else if(
          currentTimeStamp > normalEndTimeStamp
        ){
            $("#clock").addClass("greenClock");
            $("#clock").removeClass("redClock");
            if( currentTimeStamp < normalStartTimeStamp ){$("#notice").html('<p style="font-size:3vh; color:rgb(59, 229, 76);margin-top: -2vh;">Du kan nu logge ind</p>');}
            else {$("#notice").html('<p style="font-size:3vh; color:green;margin-top: -2vh;">Du kan nu logge ud</p>');}
        }
    }else if(weekDay == 5){
        if(
          currentTimeStamp < normalStartTimeStamp
        ){
            $("#clock").addClass("greenClock");
            $("#clock").removeClass("redClock");
            if( currentTimeStamp < normalStartTimeStamp ){$("#notice").html('<p style="font-size:3vh; color:rgb(59, 229, 76);margin-top: -2vh;">Du kan nu logge ind</p>');}
            else {$("#notice").html('<p style="font-size:3vh; color:green;margin-top: -2vh;">Du kan nu logge ud</p>');}
        }else if(
          currentTimeStamp > normalEndFridayTimeStamp
        ){
            $("#clock").addClass("greenClock");
            $("#clock").removeClass("redClock");
            if( currentTimeStamp < normalStartTimeStamp ){$("#notice").html('<p style="font-size:3vh; color:rgb(59, 229, 76);margin-top: -2vh;">Du kan nu logge ind</p>');}
            else {$("#notice").html('<p style="font-size:3vh; color:green;margin-top: -2vh;">Du kan nu logge ud</p>');}
        }
    }else{
        $("#clock").removeClass("greenClock");
        $("#clock").addClass("redClock");
        $("#notice").html("Dette er ikke et tidspunkt der kan logges ud på!");
    }

    $("#clock").html(currentTimeString);
}


function clearSelected ( selected )
{
    if($( "#BiHeVi" ).hasClass('activeButton') && selected != "#BiHeVi"){
        $("#BiHeVi").removeClass("activeButton");
        $("#BiHeVi").addClass("inactiveButton");
    }
    if($( "#BiHeKa" ).hasClass('activeButton') && selected != "#BiHeKa"){
        $("#BiHeKa").removeClass("activeButton");
        $("#BiHeKa").addClass("inactiveButton");
    }
    if($( "#BiHeBj" ).hasClass('activeButton') && selected != "#BiHeBj"){
        $("#BiHeBj").removeClass("activeButton");
        $("#BiHeBj").addClass("inactiveButton");
    }
    if($( "#BiTL" ).hasClass('activeButton') && selected != "#BiTL"){
        $("#BiTL").removeClass("activeButton");
        $("#BiTL").addClass("inactiveButton");
    }
    
    if($( "#EA" ).hasClass('activeButton') && selected != "#EA"){
        $("#EA").removeClass("activeButton");
        $("#EA").addClass("inactiveButton");
    }
    
    if($( "#HV" ).hasClass('activeButton') && selected != "#HV"){
        $("#HV").removeClass("activeButton");
        $("#HV").addClass("inactiveButton");
    }
    
    if($( "#HC" ).hasClass('activeButton') && selected != "#HC"){
        $("#HC").removeClass("activeButton");
        $("#HC").addClass("inactiveButton");
    }
}

$(document).ready(function()
{
    // loginBlock();
    setInterval('updateClock()', 1000);
    
    $( "#BiHeVi" ).on( "click", function() {
        clearSelected("#BiHeVi");
        if($( "#BiHeVi" ).hasClass('inactiveButton')){
            $("#BiHeVi").addClass("activeButton");
            $("#BiHeVi").removeClass("inactiveButton");
            $("#com").attr('value','1');
        }else{
            $("#BiHeVi").removeClass("activeButton");
            $("#BiHeVi").addClass("inactiveButton");
            $("#com").removeAttr('value')
        }
    });
    
    $( "#BiHeKa" ).on( "click", function() {
        clearSelected("#BiHeKa");
        if($( "#BiHeKa" ).hasClass('inactiveButton')){
            $("#BiHeKa").addClass("activeButton");
            $("#BiHeKa").removeClass("inactiveButton");
            $("#com").attr('value','2');
        }else{
            $("#BiHeKa").removeClass("activeButton");
            $("#BiHeKa").addClass("inactiveButton");
            $("#com").removeAttr('value')
        }
    });
    
    $( "#BiHeBj" ).on( "click", function() {
        clearSelected("#BiHeBj");
        if($( "#BiHeBj" ).hasClass('inactiveButton')){
            $("#BiHeBj").addClass("activeButton");
            $("#BiHeBj").removeClass("inactiveButton");
            $("#com").attr('value','3');
        }else{
            $("#BiHeBj").removeClass("activeButton");
            $("#BiHeBj").addClass("inactiveButton");
            $("#com").removeAttr('value')
        }
    });
    
    $( "#BiTL" ).on( "click", function() {
        clearSelected("#BiTL");
        if($( "#BiTL" ).hasClass('inactiveButton')){
            $("#BiTL").addClass("activeButton");
            $("#BiTL").removeClass("inactiveButton");
            $("#com").attr('value','4');
        }else{
            $("#BiTL").removeClass("activeButton");
            $("#BiTL").addClass("inactiveButton");
            $("#com").removeAttr('value')
        }
    });
    
    
    
    $( "#EA" ).on( "click", function() {
        clearSelected("#EA");
        if($( "#EA" ).hasClass('inactiveButton')){
            $("#EA").addClass("activeButton");
            $("#EA").removeClass("inactiveButton");
            $("#com").attr('value','6');
        }else{
            $("#EA").removeClass("activeButton");
            $("#EA").addClass("inactiveButton");
            $("#com").removeAttr('value')
        }
    });
    
    
    $( "#HV" ).on( "click", function() {
        clearSelected("#HV");
        if($( "#HV" ).hasClass('inactiveButton')){
            $("#HV").addClass("activeButton");
            $("#HV").removeClass("inactiveButton");
            $("#com").attr('value','7');
        }else{
            $("#HV").removeClass("activeButton");
            $("#HV").addClass("inactiveButton");
            $("#com").removeAttr('value')
        }
    });
    
    $( "#HC" ).on( "click", function() {
        clearSelected("#HC");
        if($( "#HC" ).hasClass('inactiveButton')){
            $("#HC").addClass("activeButton");
            $("#HC").removeClass("inactiveButton");
            $("#com").attr('value','8');
        }else{
            $("#HC").removeClass("activeButton");
            $("#HC").addClass("inactiveButton");
            $("#com").removeAttr('value')
        }
    });
    
});
