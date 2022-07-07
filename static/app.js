$(function()
{
    $('#create').click(function(){
        
        var valor = document.getElementById("nombre").value;
        var valor2 = document.getElementById("descripcion").value;
        var valor3 = document.getElementById("fecha").value;
        var valor4 = document.getElementById("hora").value;
        var valor5 = document.getElementById("zona").value;
        var valor6 = document.getElementById("ubicacion").value;
        var valor7 = document.getElementById("email").value;
        var valor8 = document.getElementById("frecuencia").value;
        var valor9 = document.getElementById("meet").value;
        
        
        $.ajax({
            type: "POST",
            url:'http://127.0.0.1:5000/create_evento',
            data:JSON.stringify({
                'summary': valor,
                'location':valor6,
                'description':valor2,
                'start': {
                  'dateTime': valor4+'T09:00:00-05:00',
                  'timeZone': valor5,
                },
                'end': {
                  'dateTime': valor4+'T17:00:00-05:00',
                  'timeZone': valor5,
                },
                 "conferenceData": {
                      "createRequest": {
                        "conferenceSolutionKey": {
                          "type": "hangoutsMeet"
                        },
                        "requestId": "RandomString"
                      }
                    },
                'recurrence': [
                  'RRULE:FREQ=DAILY;COUNT='+valor8
                ],
                'attendees': [
                  {'email': valor7},
                ],
                'reminders': {
                  'useDefault': False,
                  'overrides': [
                    {'method': 'email', 'minutes': 24 * 60},
                    {'method': 'popup', 'minutes': 10},
                  ],
                },
            }),
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function(){
                alert("se ingreso correctamente");
            }
        })
        
    })
})