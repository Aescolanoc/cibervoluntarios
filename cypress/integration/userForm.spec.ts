describe("Cibervoluntarios Form", () => {
  beforeEach(() => {
    cy.visit("/form");
  });

  it("It rendered", () => {
    cy.get("h1").should("contain.text", "Formulario Cibervoluntarios");
    cy.get("header.header").find("img.logo").should("be.visible");
    cy.get("button.btn.btn-primary").should("be.visible");
  });

  it("the user fill step 1, click on next and step 2 it shows", () => {
    cy.get('input[id="name"').type("Daniel");
    cy.get('input[id="lastName"').type("Esteve");
    cy.get('textarea[id="comment"').type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur odio lorem, nec interdum ex ornare at. Aenean sed semper urna. Nam bibendum congue eros, at euismod risus tempor vitae. Phasellus dictum lorem vel enim mattis, nec scelerisque purus sollicitudin. Donec ut neque massa. Integer bibendum justo erat, quis tristique elit faucibus sit amet. Curabitur nisl purus, fringilla et sodales in, pellentesque non nunc."
    );
    cy.get("button.btn.btn-primary").click();
    cy.get("h5").should("contain.text", "Paso 2 de 4 - Selecciona 3 ODS");
    cy.get("div.ods-wrapper").find("img.figure-img").should("be.visible");
  });

  it("the user fill step 1, click on next and and error message shows", () => {
    cy.get("button.btn.btn-primary").click();
    cy.get("div.alert").should("contain.text", "Debe rellenar los campos obligatorios");
  });

  it("the user fill step 2, click on next and step 3 it shows ", () => {
    cy.get('input[id="name"').type("Daniel");
    cy.get('input[id="lastName"').type("Esteve");
    cy.get("button.btn.btn-primary").click();

    cy.get("div.ods-wrapper__imgage").eq(0).click();
    cy.get("div.ods-wrapper__imgage").eq(1).click();
    cy.get("div.ods-wrapper__imgage").eq(2).click();
    cy.get("button.btn.btn-primary").eq(1).click();
    cy.get("h5").should("contain.text", "Paso 3 de 4 - Selecciona tus libros favoritos");
  });

  it("the user fill step 2, click on next and and error message shows", () => {
    cy.get('input[id="name"').type("Daniel");
    cy.get('input[id="lastName"').type("Esteve");
    cy.get("button.btn.btn-primary").click();

    cy.get("div.ods-wrapper__imgage").eq(0).click();
    cy.get("div.ods-wrapper__imgage").eq(1).click();
    cy.get("button.btn.btn-primary").eq(1).click();
    cy.get("div.alert").should("contain.text", "Seleccione 3 elementos");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
    cy.get("div.ods-wrapper__imgage").eq(2).click();
    cy.get("div.ods-wrapper__imgage").eq(3).click();
    cy.get("div.alert").should("contain.text", "Sólo se pueden seleccionar 3 elementos");
  });

  it("the user fill step 3, click on next and step 4 it shows ", () => {
    cy.get('input[id="name"').type("Daniel");
    cy.get('input[id="lastName"').type("Esteve");
    cy.get("button.btn.btn-primary").click();

    cy.get("div.ods-wrapper__imgage").eq(0).click();
    cy.get("div.ods-wrapper__imgage").eq(1).click();
    cy.get("div.ods-wrapper__imgage").eq(2).click();
    cy.get("button.btn.btn-primary").eq(1).click();

    cy.get("button.btn.btn-primary").eq(1).click();
    cy.get("h5").should("contain.text", "Paso 4 de 4 - Resumen");
  });

  it("step 4 is rendered, click on next and sent message it shows", () => {
    cy.get('input[id="name"').type("Daniel");
    cy.get('input[id="lastName"').type("Esteve");
    cy.get("button.btn.btn-primary").click();

    cy.get("div.ods-wrapper__imgage").eq(0).click();
    cy.get("div.ods-wrapper__imgage").eq(1).click();
    cy.get("div.ods-wrapper__imgage").eq(2).click();
    cy.get("button.btn.btn-primary").eq(1).click();

    cy.get("div.multiselect").click();
    cy.get("li.multiselect-option").eq(0).click();
    cy.get("li.multiselect-option").eq(1).click();
    cy.get("li.multiselect-option").eq(2).click();
    cy.get("h5").click();
    cy.get("button.btn.btn-primary").eq(1).click();

    cy.get("button.btn.btn-primary").eq(1).click();

    cy.get("div.text-center").eq(0).should("contain.text", "Datos enviados correctamente");
  });
});
