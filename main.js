let inputs = document.querySelectorAll("input");

const patterns = {
  username: /^[a-z\d\s]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z]{2,8})\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
  password: /\b[\w@-]{8,20}\b/,
  telephone: /\b\d{11}\b/,
  slug: /^[a-z\d-]{8,20}$/,
};

function validate(input, regex) {
  if (regex.test(input.value)) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    }
  } else {
    input.classList.add("invalid");
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
