// src/app/shared/validators/password-policy.validator.ts
function passwordPolicyValidator() {
  return (control) => {
    const val = control.value || "";
    const errors = {};
    if (val.length < 8)
      errors["minLength"] = true;
    if (!/[A-Z]/.test(val))
      errors["uppercase"] = true;
    if (!/[a-z]/.test(val))
      errors["lowercase"] = true;
    if (!/\d/.test(val))
      errors["digit"] = true;
    if (!/[!@#$%^&*()_+\-=\[\]{};':",./<>?]/.test(val))
      errors["symbol"] = true;
    return Object.keys(errors).length ? errors : null;
  };
}
function passwordMatchValidator(newPassKey = "newPassword", confirmKey = "confirmPassword") {
  return (group) => {
    const np = group.get(newPassKey)?.value;
    const cp = group.get(confirmKey)?.value;
    return np && cp && np !== cp ? { passwordsMismatch: true } : null;
  };
}

export {
  passwordPolicyValidator,
  passwordMatchValidator
};
//# sourceMappingURL=chunk-4OT4RRV7.js.map
