describe("buscarproeycto", () => {
  
  it("Se deberia mostrar todos los nombres de los proyectos buscados en un string", () => {
    let proyectos = [];
    proyectos.push("proyecto1")
    proyectos.push("proyecto2")
    proyectos.push("proyecto3")
    proyectos.push("proyecto2")
    expect(buscarProyecto("proyecto2", proyectos)).toEqual("proyecto2proyecto2")
  });
  it("Se deberia mostrar los dos nombres de los proyectos que empiezan o contiene ese elemento en sus nombres", () => {
    let proyectos = [];
    proyectos.push("proyecto1")
    proyectos.push("proyecto2")
    proyectos.push("proyecto3")
    proyectos.push("proyecto2")
    expect(buscarProyecto("proyec", proyectos)).toEqual("proyecto1proyecto2proyecto3proyecto2")
  });
 
});

function buscarProyecto(nombre, proyectos){
  let proyectosbuscados = "";
      if(proyectos.length === 0)
  {
      return "";
  }
  for(const proyecto of proyectos)
    {
      if(proyecto===nombre)
       {
       proyectosbuscados=proyectosbuscados+proyecto;
       }
       else if(proyecto.includes(nombre)){
       
        // Si lo contiene, añadirlo al array de elementos encontrados
        proyectosbuscados=proyectosbuscados+proyecto;
       }
    }
    return proyectosbuscados;
}