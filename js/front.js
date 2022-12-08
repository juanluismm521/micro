


function carga() {

var contendor  = $("#tbody").html();
 var nuevaFila = '<tr>';
 nuevaFila  += '<th scope="row">4</th>';
 nuevaFila  += ('<td>' + ahora() + '</td>');
 nuevaFila  += '<td>"Permitido"</td>';
 nuevaFila  += '</tr>';

 $(nuevaFila).appendTo("#tbody");

}

function ahora() {
    var hoy = new Date();
    var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    var fechaYHora = fecha + ' ' + hora;
    return fechaYHora;
}