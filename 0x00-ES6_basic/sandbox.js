function da_var() {
  console.log("(x) in func scope: ", x);
  if (true) {
    var x = 1;
    console.log("(x) in if block: ", x);
  }
  x = 2;
  console.log("after all: ", x);
}

function da_let() {
  let x = 2;

  console.log("(x) in func scope: ", x);
  if (true) {
    let x = 1;
    console.log("(x) in if block: ", x);
  }
  console.log("after all: ", x);
}

da_var();
//da_let();
