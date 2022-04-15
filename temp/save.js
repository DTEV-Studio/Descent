function send_to_database(message){
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.onreadystatechange = function () {
        if (objXMLHttpRequest.readyState === 4) {
            if (objXMLHttpRequest.status === 200) {
                alert("yay gelukt!");
            } else {
                alert('Error Code: ' + objXMLHttpRequest.status);
                alert('Error Message: ' + objXMLHttpRequest.statusText);
            }
        }
    }
    objXMLHttpRequest.open('GET', 'uitslag.php?resultaat=' + message);
    objXMLHttpRequest.send();
}
function game_has_finished(){
    send_to_database(score)
}