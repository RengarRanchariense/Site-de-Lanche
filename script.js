const form = document.querySelector(".lanche");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const end = document.querySelector("input[name='end']").value;
  const bread = document.querySelector("select[name='bread']").value;
  const steak = document.querySelector(
    "input[name='flexRadioDefault']:checked"
  ).value;
  const obs = document.querySelector("textarea[name='obs']").value;

  let salad = "";

  document
    .querySelectorAll("input[name='salad']:checked")
    .forEach(function (item) {
      salad += " - " + item.value + "\n";
    });

  console.log({
    name,
    end,
    bread,
    steak,
    salad,
    obs,
  });

  alert(
    "Pedido Realizado!" +
      "\nNome do Cliente: " +
      name +
      "\nEndereço de Entrega: " +
      end +
      "\nTipo de Pão: " +
      bread +
      "\nRecheio: " +
      steak +
      "\n" +
      salad +
      "\nObservações: " +
      obs
  );
});
