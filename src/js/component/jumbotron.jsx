import React from "react";

function Jumbotron(){
    return(
        <div className="jumbotron ms-5 mt-5 me-5 p-3 mb-2"  style= {{"background-color":"#83C5BE"}}>
        <h1 className="display-4 text-light"><strong><i className="fas fa-dumbbell"></i> No Pain, No Gain!</strong></h1>
        <p className="lead">"No pain, no gain" no significa que tengas que salir arrastrándote de la sala de entrenamiento y que al día siguiente no puedas ni levantarte; significa que en el momento en el que estás entrenando debes concentrarte y sentir que el músculo está trabajando. Por otro lado, aunque salgas baldado de entrenar, sin una alimentación y descanso adecuados, olvídate de progresar. </p>
        {/* <hr className="my-4"/> */}
        <p>Recuerda: Terminar un entrenamiento cansado es normal; tener ganas de vomitar, sentir dolor (que no molestias) o mareos es síntoma de que algo no va bien.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>

    )
}

export default Jumbotron
