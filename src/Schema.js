import * as yup from 'yup';

const Schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required()
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(["small", "medium", "large", "extraLarge"])
        .required("What size?"),
    pepperoni: yup
        .boolean(),
    olives: yup
        .boolean(),
    mushrooms: yup
        .boolean(),
    sausage: yup
        .boolean(),
    specialInstructions: yup
        .string()
        .trim()
});

export default Schema;