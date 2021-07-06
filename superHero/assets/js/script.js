$(document).ready(function(){
    $("#btn-buscar").on("click", function(){
        let idSuperHero = parseInt($("#input-superhero").val());
        let expresion = /\d/;
        if(idSuperHero > 0 && idSuperHero <= 731 && expresion.test(idSuperHero)) {
            $.ajax({
                type: "GET",
                url: `https://superheroapi.com/api.php/10159630120441103/${idSuperHero}`,
                datatype: "json",
                success: function(data){
                    $("#mensaje").text("SuperHero encontrado");
                    $("#ficha-heroe").
                    html(`
                    <div class="row g-0">
                        <div class="col-12 col-md-4">
                            <img id="foto-superhero" class="img-fluid" src="${data.image.url}" alt="${data.name}">
                        </div>
                        <div class="col-12 col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Nombre: ${data.name}</h3>
                                <p class="card-text">Conexiones: ${data.connections["group-affiliation"]}</p>
                                <p class="card-text mb-4 px-3"><span class="italica">Publicado por:</span> ${data.biography.publisher}</p>
                                <div class="border-bottom my-3"></div>
                                <p class="card-text px-3"><span class="italica">Ocupación:</span> ${data.work.occupation}</p>
                                <div class="border-bottom my-3"></div>
                                <p class="card-text px-3"><span class="italica">Primera aparición:</span> ${data.biography["first-appearance"]}</p>
                                <div class="border-bottom my-3"></div>
                                <p class="card-text px-3"><span class="italica">Altura:</span> ${data.appearance.height.join(" - ")}</p>
                                <div class="border-bottom my-3"></div>
                                <p class="card-text px-3"><span class="italica">Peso:</span> ${data.appearance.weight.join(" - ")}</p>
                                <div class="border-bottom my-3"></div>
                                <p class="card-text px-3"><span class="italica">Alianzas:</span> ${data.biography.aliases.join(", ")}</p>
                            </div>
                        </div>
                    </div>
                    `);
                    $("#foto-superhero").on('error', function(){
                        $(this).attr('src','https://gravatar.com/avatar/be6ca4065f4d469542b6712024722084?s=200&d=mp&r=x');
                    });
                    let powerStats = [];
                    $.each(data.powerstats , function(key, value){
                        if(value !== "null"){
                            powerStats.push({
                                y: value,
                                name: key
                            });
                        };
                    });
                    let tituloGrafico = "";
                    if (powerStats.length > 0){
                        tituloGrafico = `Estadisticas de poder de ${data.name}`;
                    }
                    else{
                        tituloGrafico = `${data.name} no tiene estadísticas de poder`;
                    };
                    options = {
                        title: {
                            text: tituloGrafico,
                        },
                        data: [{
                            type: "pie",
                            showInLegend: true,
                            indexLabel: "{name} {y}",
                            startAngle: 240,
                            dataPoints: powerStats,
                        }],
                    };
                    let chart = new CanvasJS.Chart("chartContainer", options);
                    chart.render();
                },
                error: function(error){
                    console.error(error);
                }
            });
        }
        else {
            $("#mensaje").text("No ha ingresado un número válido");
        }
    });
});