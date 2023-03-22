/* eslint-disable react/prop-types */
export function validator(data, config) {
    const errors = {}
    function validate(validateMethod, data, config) {
        switch (validateMethod) {
            case "isRequired":
                if (data.trim() === "") return config.massage
                break
            case "isEmail": {
                const emailReg = /^\S+@\S+\.\S+$/g
                if (!emailReg.test(data)) return config.massage
                break
            }
            case "isCorrectPassword": {
                const passwordRegEx = /[A-Z]+/g
                if (!passwordRegEx.test(data)) return config.massage
                break
            }
            case "IsContentDigit": {
                const passwordDigitRegEx = /[0-9]+/g
                if (!passwordDigitRegEx.test(data)) return config.massage
                break
            }
            case "min": {
                if (data.length < config.value) return config.massage
                break
            }

            default:
                break
        }
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            )
            if (error && !errors[fieldName]) {
                errors[fieldName] = error
            }
        }
    }
    return errors
}
