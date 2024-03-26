export const getPasswordStrength = (password) => {
  if (!password) {
    return "empty"; // Return "empty" if the password is empty
  } else if (
    password.length >= 12 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*]/.test(password)
  ) {
    return "very strong";
  } else if (
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password)
  ) {
    return "strong";
  } else if (
    password.length >= 8 &&
    /[a-zA-Z]/.test(password) &&
    /\d/.test(password)
  ) {
    return "medium";
  } else {
    return "weak";
  }
};

export const renderStrengthIndicators = ({ password }) => {
  const strength = getPasswordStrength(password);
  let colors = ["bg-gray-200", "bg-gray-200", "bg-gray-200", "bg-gray-200"];

  switch (strength) {
    case "empty":
      colors[0] = "bg-gray-200";
      break;
    case "weak":
      colors[0] = "bg-orange-500";
      break;
    case "medium":
      colors[0] = colors[1] = "bg-orange-500";
      break;
    case "strong":
      colors[0] = colors[1] = colors[2] = "bg-green-500";
      break;
    case "very strong":
      colors = ["bg-green-500", "bg-green-500", "bg-green-500", "bg-green-500"];
      break;
    default:
      break;
  }

  return (
    <div>
      <div className="flex justify-between gap-2 mb-2">
        {colors.map((color, index) => (
          <div key={index} className={`w-1/4 h-1 rounded-full ${color} mr-1`} />
        ))}
      </div>
      <p className="flex w-full justify-end text-gray-400 text-sm">
        {strength}
      </p>
    </div>
  );
};
