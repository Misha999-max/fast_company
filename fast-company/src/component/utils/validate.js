/* eslint-disable react/prop-types */
export function validator(data, config) {
    const errors = {}
    function validate(validateMethod, data, config) {
        let statusValidate
        switch (validateMethod) {
            case "isRequired": {
                if (typeof data === "boolean") {
                    statusValidate = !data
                } else {
                    // statusValidate = data.trim() === ""
                }

                break
            }
            case "isEmail": {
                const emailReg = /^\S+@\S+\.\S+$/g
                statusValidate = !emailReg.test(data)

                break
            }
            case "isCorrectPassword": {
                const passwordRegEx = /[A-Z]+/g
                statusValidate = !passwordRegEx.test(data)

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
        if (statusValidate) return config.massage
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
