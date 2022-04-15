import Validator from "fastest-validator";

const v = new Validator();

const schema = {
  content: { type: "string", min: 3 },
  $$strict: true,
};

const check = v.compile(schema);

export { check as noteValidator };
