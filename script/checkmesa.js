const $d = document,
        $mesas = $d.querySelector(".users"),
        $mesasEscogidSpan = $d.querySelector(".mesasEscogidSpan"),
        $mesasEscogidas =$d.querySelector(".mesasEscogidas"),
        $numeMesasSpan = $d.querySelector(".numeMesasSpan"),
        $numeMesas =$d.querySelector(".numeroMesas"),
        $precio = $d.querySelector(".precio"),
        $precioSpan = $d.querySelector(".precioSpan"),
        $zona = $d.querySelector(".zona"),
        $zonaSpan = $d.querySelector(".zonaSpan")


function addUbicacionMesas($mesa){
    if($mesa>0 && $mesa<=14){
        let zona=4
        if(ubicacion.includes(zona)){
            return ubicacion
        }else{
            ubicacion.push(zona)
            return ubicacion
        }
    }
    if($mesa>14 && $mesa<=28){
        let zona=3
        if(ubicacion.includes(zona)){
            return ubicacion
        }else{
            ubicacion.push(zona)
            return ubicacion
        }
        
    }
   
}
function deleteUbicacionMesas(){

    let existeZona4 = mesasEscogidas.filter(e => e>0 && e<=14);
    let existeZona3 = mesasEscogidas.filter(e => e>14 && e<=28);

    if(existeZona4.length==0){
        let zona=4
        ubicacion.splice(ubicacion.indexOf(zona),1)
    }if(existeZona3.length==0){
        let zona=3
        ubicacion.splice(ubicacion.indexOf(zona),1)
    }
    
   
}        
let cont = 0
let mesasEscogidas = []
let ubicacion = []
$mesas.addEventListener("click",e=>{
    let $radioSocio = $d.querySelector("input[type=radio]:checked").value
    let $mesa = e.target.dataset.mesa
    let $mesaEscogida = $d.querySelector(`.mesa[data-mesa='${$mesa}']`)
    console.log($mesa)

    $checkbox = $d.getElementById(`${$mesa}`)
    if($checkbox.checked){
        $checkbox.checked = false
        $mesaEscogida.classList.replace("escogida", "libre");
        cont --
        mesasEscogidas.splice(mesasEscogidas.indexOf($mesa),1)
        deleteUbicacionMesas()
    }else{
        $checkbox.checked = true
        $mesaEscogida.classList.replace("libre", "escogida");
        cont ++
        mesasEscogidas.push($mesa)
        addUbicacionMesas($mesa)
    }
    if($radioSocio== "SI"){
        $precioSpan.innerHTML = cont*20
        $precio.value = cont*20
    }if($radioSocio== "NO"){
        $precioSpan.innerHTML = cont*25
        $precio.value = cont*25
    }
console.log(cont)
    $numeMesasSpan.innerHTML = cont
   $numeMesas.value = cont 
    $mesasEscogidSpan.innerHTML = mesasEscogidas.sort().join(",")
    $mesasEscogidas.value = mesasEscogidas.sort().join(",")
    $zonaSpan.innerHTML = ubicacion.sort().join(",")
    $zona.value = ubicacion.sort().join(",")  
})