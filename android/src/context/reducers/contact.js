const contacts = (state, {type, payload}) => {
    
    switch(type) {
        case 'CREATE_CONTACT_LOADING':
          
            return {
                ...state,
                createContact: {
                    ...state.createContact,
                    loading: true,
                    error: null
                }
            }
            case 'CREATE_CONTACT_SUCCESS':
          
                return {
                    ...state,
                    createContact: {
                        ...state.createContact,
                        data: payload,
                        error: null,
                        loading: false
                    },
                    
                getContact: {
                    ...state.getContact,
                    loading: false,
                    data: [payload, ...state.getContact.data],
                    error: null
                }
                }
                case 'CREATE_CONTACT_FAILED':
          
                    return {
                        ...state,
                        createContact: {
                            ...state.createContact,
                            loading: false,
                            error: payload
                        }
                    }
        case 'GET_CONTACT_LOADING':
          
            return {
                ...state,
                getContact: {
                    ...state.getContact,
                    loading: true,
                    error: null
                }
            }
            case 'GET_CONTACT_SUCCESS':
                
                return {
                    ...state,
                    getContact: {
                        ...state.getContact,
                        data: payload,
                        loading: false,
                        error: null
                    }
                }
                case 'GET_CONTACT_FAILED':
                    
                    return {
                        ...state,
                        getContact: {
                            ...state.getContact,
                            loading: false,
                            error: payload
                        }
                    }
        default:
            return state;
    }

}
export default contacts;