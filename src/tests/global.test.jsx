test("o arquivo de estilos globais deve ser importável", () => {
 const css = require("../styles/global.css");
 expect(css).toBeDefined();
}); 
