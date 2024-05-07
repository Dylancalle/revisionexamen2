describe("buscarproeycto", () => {
  
  it("Se deberia mostrar todos los nombres de los proyectos buscados en un string", () => {
    let proyectos = [];
    proyectos.push("proyecto1")
    proyectos.push("proyecto2")
    proyectos.push("proyecto3")
    proyectos.push("proyecto2")
    expect(buscarProyecto("proyecto2", proyectos)).toEqual("proyecto2proyecto2")
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
    }
  return proyectosbuscados;
}