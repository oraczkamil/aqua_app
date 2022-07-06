let errorMessages = {};

const useValidation = () => ({
    validate: (rules, messages, data) => {
        Object.keys(data).map(key => {
            validation(rules[key], {key: key, value: data[key]}, messages[key]);
        });

        if(!Object.keys(errorMessages).length){
            return true;
        }else{
            errorMessages = {};
        
            return false;
        }
    },
    errors: !errorMessages ? [] : errorMessages
});

const validation = (type, attribute, message) => {
    switch (type){
        case 'required': required(attribute, message);
        default: return true;
    }
}

const required = (attribute, message) => {
    if(!attribute.value){
        errorMessages[attribute.key] = message;
    }
}

export default useValidation;